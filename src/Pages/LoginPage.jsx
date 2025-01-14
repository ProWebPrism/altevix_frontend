import React from 'react'
import './LoginPage.css'


function LoginPage() {
  return (
    <div className='LoginPage-sec'>
        <div className="wrapper">
            <h3>Login</h3>
            <form action="" className='contact-form'>
                <input type="text" name='email' placeholder='Email' />
                <input type="password" name='message' placeholder='Password' />
                <button type='submit' className='login-btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage