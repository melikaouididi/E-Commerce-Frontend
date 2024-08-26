import React from 'react';
import './SignUp.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

export const SignUp = () => {
const navigate = useNavigate()

useEffect(() => {
    if (localStorage.token) {
        navigate("/")
    }
} ,[localStorage.token])

const [success,setSuccess] = useState("")
const [error,setError] = useState("")
const [signup,setSignup] = useState(
    {
        name: '',
        email: '',
        password:'',
    }
)

const signUpUser = async(name,email,password) => {
    try{
        const config = {
            headers: {
                "Conten-Type": "application/json"
            }
        }
        const response = await axios.post("/user/signup", {
            name,
            email,
            password
        },config)

        const data = response.data
        localStorage.removeItem("token")

        setSuccess("Successful")

        setTimeout(() => {
            navigate("/")
        },5000)
    } catch (error) {
        console.log(error)
        setError(error.response.data)

        setTimeout(() => {
            setError("")
        },5000)
        return
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    let newPassword = `${signup.password}`
    const minChars = 5
    const maxChars = 10

    if (newPassword.length < minChars || newPassword.length > maxChars) {
        setError("Password should be between 5 and 10 characters")
        return;
    }
    signUpUser(signup.name,signup.email,signup.password)
}

function handleChange(e){
    setSignup({...signup,[e.target.name]: e.target.value})
}


  return (
    <div className='container-body'>
    <div className="form-container">
    <div className="form-title">
        <h2>Sign Up</h2>
    </div>
    <form className="signup-form" method='POST' onSubmit={handleSubmit}>
        <div className="input-group">
            <label for="signup-name">Name</label>
            <input type="text" id="signup-name" placeholder="Enter your name" name='signup-name' value={signup.name} onChange={handleChange} />
        </div>
        <div className="input-group">
            <label for="signup-email">Email</label>
            <input type="email" id="signup-email" placeholder="Enter your email" name='signup-email' value={signup.email} onChange={handleChange}/>
        </div>
        <div className="input-group">
            <label for="signup-password">Password</label>
            <input type="password" id="signup-password" placeholder="Enter your password" name='signup-password' value={signup.password} onChange={handleChange}/>
        </div>
        <div className="input-group">
            <button type="submit" className="btn btn-signup">Sign Up</button>
        </div>
    </form>
</div>
</div>
  )
};
