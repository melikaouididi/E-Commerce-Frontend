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
        first_name: '',
        last_name : '',
        date_of_birth :'',
        phone: '',
        email: '',
        password:'',
    }
)

const signUpUser = async(first_name,last_name,date_of_birth,phone,email,password) => {
    try{
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        axios.defaults.baseURL = 'https://e-commerce-d2rw.onrender.com'
        const response = await axios.post("/user/create", {
            first_name,
            last_name,
            date_of_birth,
            phone,
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
    signUpUser(signup.first_name,signup.last_name,signup.date_of_birth,signup.phone,signup.email,signup.password)
}

function handleChange(e){
    setSignup({...signup,[e.target.name]: e.target.value})
}


  return (
    <div className='container-body'>
    <div className="form-container">
    <div className="form-title">
        <h2>Welcome To My Store</h2>
    </div>
    <form className="signup-form" method='POST' onSubmit={handleSubmit}>
        <div className="input-group">
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" placeholder="Enter your first name" name='first_name' value={signup.first_name} onChange={handleChange} />
        </div>
        <div className="input-group">
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name" placeholder="Enter your last name" name='last_name' value={signup.last_name} onChange={handleChange} />
        </div>
        <div className="input-group">
            <label for="date_of_birth">Date Of Birth</label>
            <input type="text" id="date_of_birth" placeholder="Enter your date of birth" name='date_of_birth' value={signup.date_of_birth} onChange={handleChange} />
        </div>
        <div className="input-group">
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter your phone number" name='phone' value={signup.phone} onChange={handleChange} />
        </div>
        <div className="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" name='email' value={signup.email} onChange={handleChange}/>
        </div>
        <div className="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" name='password' value={signup.password} onChange={handleChange}/>
        </div>
        <div className="input-group">
            <button type="submit" className="btn btn-signup" >Sign Up</button>
        </div>
    </form>
</div>
</div>
  )
};
