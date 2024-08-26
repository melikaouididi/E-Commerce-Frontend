import React from 'react'
import './Login.css'

export const Login = () => {



    // fgccfxfxfx




  return (
    <div className='container-body'>
    <div className="form-container">
        <div className="form-title">
            <h2>Login</h2>
        </div>
        <form className="login-form">
            <div className="input-group">
                <label for="login-email">Email</label>
                <input type="email" id="login-email" placeholder="Enter your email"/>
            </div>
            <div className="input-group">
                <label for="login-password">Password</label>
                <input type="password" id="login-password" placeholder="Enter your password"/>
            </div>
            <div className="input-group">
                <button type="submit" className="btn btn-login">Login</button>
            </div>
        </form>
    </div>
    </div>
  )
}
