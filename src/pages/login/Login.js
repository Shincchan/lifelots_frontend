import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="appName">LifeLots</div>
                <span className='loginDescription'>Login to use lifelots </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='email'  type="email" className="loginInput" />
                    <input placeholder='password'  type="password" className="loginInput"/>
                    <button className='loginButton'>Login</button>
                    <span className='loginForgot'> Forgot Password ?</span>
                    <button className='loginRegister'>Create a Account</button>



                </div>
            </div>
        </div>
    </div>

  )
}
