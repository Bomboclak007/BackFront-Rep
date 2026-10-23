import { useState,useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
export default function Authorization(){
    const[loginUsername,setloginUsername] = useState('')
    const[loginPassword,setloginPassword] = useState('')
    const[loading,setLoading]= useState(false)
    const[Message,setMessage]= useState('')
    const[IsError,setIsError]= useState(false)
    const[User,setUser]= useState(null)
    const[username,setUsername]= useState('')
    const[password,setPassword]= useState('')
    const[userAge,setUserAge]= useState('')

    const handleSubmits = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);


        try{
            const response = await axios.post('http://localhost:3000/api/auth/register',
                {
                    name_user:username,
                    password:password,
                    age_user:userAge,
                });
                setMessage(response.data.message || "Регистрация успешна");
                setIsError(false);
                setUsername('');
                setPassword('');
                setUserAge('');
        } catch (error) {
            const errorMsg = error.response?.data?.error || 'Ошибка регистрации';
            setMessage(errorMsg);
            setIsError(true);
        } finally{
            setLoading(false);
        }
    };



    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);
        setIsError(false);
        try{
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                name_user: loginUsername,
                password: loginPassword,
            });
            const newToken = response.data.token;
            onLogin?.(newToken);
            setUser(response.data.user);
            localStorage.setItem('token', newToken);

            setMessage('Вход успешен!');

            setloginUsername('');
            setloginPassword('');
            setMessage(response.data.message || 'Вход успешен');
            Navigate('/Page2')
        } catch (error){
            setMessage(error.response?.data?.error || 'Ошибка входа');
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };
    return(
        <>
        <div className="App">
            <div className="form-container">
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmits}>
                    <input type="text"
                        placeholder="Логин"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input type="password"
                        placeholder="Пароль" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required   
                    />
                    <input type="text"
                        placeholder="Age" 
                        value={userAge}
                        onChange={(e)=> setUserAge(e.target.value)}
                        required   
                    />
                    <button type="submit" disabled={loading}>Зарегатся</button>
                </form>
            </div>
        </div>
        <div className="auth-container">
            <div className="form-container">
                <h3>Вход</h3>
                <form onSubmit={handleLogin}>
                    <input type="text"
                        placeholder="Логин"
                        value={loginUsername}
                        onChange={(e) => setloginUsername(e.target.value)}
                        required
                    />
                    <input type="password"
                        placeholder="Пароль" 
                        value={loginPassword}
                        onChange={(e)=> setloginPassword(e.target.value)}
                        required   
                    />
                    <button type="submit" disabled={loading}>Войти</button>
                </form>
            </div>
        </div>
            <form action="">
                <input type="text" />
                <input type="text" />
            </form>
            <button></button>
        </>
    )
}