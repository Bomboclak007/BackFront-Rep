const express = require("express")
const cors = require("cors")
const {Pool, Query} = require("pg")
const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:"true"
}))

const pool = new Pool({
    user:"postgres",
    password:"1234",
    host:"localhost",
    database:"postgres",
    port:"5432"
})
const PORT = 3000

app.get("/api/main", async (req,res)=>{
    try{
        const result = await pool.query("SELECT * from newsone OFFSET 1")
        res.json(result.rows)
    }
    catch(error){
        res.status(500).json({error:`Ошибка сервера :${error.message}`})
    }
})
app.get("/api/main2", async (req,res)=>{
    try{
        const result = await pool.query("SELECT * from newsone LIMIT 1")
        res.json(result.rows[0])
    }
    catch(error){
        res.status(500).json({error:`Ошибка сервера :${error.message}`})
    }
})






app.listen(PORT,()=>{
    console.log(`Сервер запущен на порте ${PORT}`)
})

