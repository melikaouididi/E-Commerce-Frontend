import React from 'react'
import './Login.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()

    console.log('Login in process started')

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/")
        }
    }, [navigate])


    const [success,setSuccess] = useState("")
    const [error,setError] = useState("")
    const [login,setLogin] = useState(
        {
            email: '',
            password:'',
        }
    )

const loginUser = async(email,password) => {
    try{
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
         axios.defaults.baseURL = 'https://e-commerce-1-oq0c.onrender.com'
        const response = await axios.post("/user/login", {
            email,
            password
        },config)


        console.log(response)
        console.log(response.data)
        

    
        
    
       localStorage.setItem("token",response.data.data.access_token)
       localStorage.setItem("user", JSON.stringify(response.data.data.user))
       
       
       
        setSuccess("Successful")
        console.log('Login in process successful')

        navigate("/")

    } catch (error) {
        console.log(error)
        setError(error.response?.data?.message || "Login failed")

        setTimeout(() => {
            setError("")
        },5000)
        return
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(login.email,login.password)
}

function handleChange(e){
    setLogin({...login,[e.target.name]: e.target.value})
}



  return (
    <div className='container-body'>
    <div className="form-container">
        <div className="form-title">
            <h2>Login</h2>
        </div>
        <form className="login-form" method='POST' onSubmit={handleSubmit}>
            <div className="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" name = 'email' value={login.email} onChange={handleChange}/>
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" name ='password' value={login.password} onChange={handleChange}/>
            </div>
            <div className="input-group">
                <button type="submit" className="btn btn-login">Login</button>
            </div>
        </form>
    </div>
    </div>
  )
}
