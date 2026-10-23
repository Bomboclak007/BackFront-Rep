const express = require("express")
const cors = require("cors")
const {Pool, Query} = require("pg")
const { use } = require("react")
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:"true"
}))
app.use(express.json())
const pool = new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    port:5432,
})
const JWT_SECRET = process.env.JWT_SECRET || process.env.DB_SECRET
if (!JWT_SECRET){
    throw new Error('JWT_SECRET is required')
}
// const pool = new Pool({
//     user:"postgres",
//     password:"1234",
//     host:"localhost",
//     database:"postgres",
//     port:"5432"
// })
const PORT = 3000

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split('')[1]
    
    if (!token) {
        return res.status(401).json({ error: 'Токен обязателен' })
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Неверный токен'})
        }

        req.user = user
        next()
    })
}

app.post('/api/auth/register', async(req, res)=> {
    const {name_user, password, age_user } = req.body

    if (!name_user || !password || !age_user) {
        return res.status(400).json({error: 'Заполни все поля'})
    }
    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        const result = await pool.query(
            'INSERT INTO users (name_user, password, age_user) VALUES ($1, $2, $3) RETURNING id, name_user',
            [name_user, hashedPassword, age_user]
        )
            res.status(201).json(result.rows[0])
    } catch (error){
        console.error('ОШИБКА:', error)
        res.status(500).json({ error: error.message})
    }
})

app.post('/api/auth/login', async(req, res)=> {
    const {name_user, password} = req.body

    try{
        const result = await pool.query(
            'SELECT id, name_user, password, role_users FROM users WHERE name_user = $1',
            [name_user]
        )

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Неверные данные'})
        }
        const user = result.rows[0]
        const valid = await bcrypt.compare(password, user.password)
        
        if (!valid){
            return res.status(401).json({error: 'Неверный данные'})
        }
        const token = jwt.sign(
            {
                id: user.id,
                name_user: user.name_user,
                role: user.role
            },
            JWT_SECRET,
            {expiresIn: '24h'}
        )

        res.json({
            user:{
                id: user.id,
                name_user: user.name_user,
                role: user.role
            },
            token
        })
    } catch (error){
        console.error('Login error:', error)
        res.status(500).json({error: 'Ошибка сервера'})
    }
})

app.get("/api/main", async (req,res)=>{
    try{
        const result = await pool.query("SELECT * from newsone ORDER BY id OFFSET 1")
        res.json(result.rows)
    }
    catch(error){
        res.status(500).json({error:`Ошибка сервера :${error.message}`})
    }
})
app.get("/api/main2", async (req,res)=>{
    try{
        const result = await pool.query("SELECT * from newsone ORDER BY id LIMIT 1")
        res.json(result.rows[0])
    }
    catch(error){
        res.status(500).json({error:`Ошибка сервера :${error.message}`})
    }
})

app.get("/api/main3", async (req,res)=>{
    try{
        const result = await pool.query("SELECT * from peoplwork")
        res.json(result.rows)
    }
    catch(error){
        res.status(500).json({error:`Ошибка сервера : ${error.message}`})
    }
})

app.get("/api/main4", async (req,res)=>{
    try{
        const result = await pool.query('SELECT * from "FeaturedVideos" ')
        res.json(result.rows)
    }
    catch(error){
        res.status(500).json({error:`Ошибка сервера : ${error.message}`})
    }
})

app.get("/api/main5", async (req,res)=>{
    try{
        const result = await pool.query('SELECT * from "footer" ')
        res.json(result.rows)
    }
    catch(error){
        res.status(500).json({error:`Ошибка сервера : ${error.message}`})
    }
})
app.get("/api/main6", async (req,res)=>{
    try{
        const result = await pool.query("SELECT * from peoplwork order by id limit 1")
        res.json(result.rows)
    }
    catch(error){
        res.status(500).json({error:`Ошибка сервера : ${error.message}`})
    }
})

app.listen(PORT,()=>{
    console.log(`Сервер запущен на порте ${PORT}`)
})

