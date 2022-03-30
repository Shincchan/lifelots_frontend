import React from 'react'
import './register.css'
export default function Register() {
  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <div className="appName">LifeLots</div>
                <span className='registerDescription'>register to use lifelots </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder='username'  type="text" className="registerInput" />
                    <input placeholder='email'  type="email" className="registerInput" />

                    <input placeholder='password'  type="password" className="registerInput"/>
                    <input placeholder='confirm password'  type="password" className="registerInput"/>

                    <button className='registerButton'>Sign Up</button>
                    <button className='registerRegister'>register to Account</button>



                </div>
            </div>
        </div>
    </div>
  )
}
