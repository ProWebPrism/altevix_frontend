import React from 'react'
import './RegistrationPage.css'



const RegistrationPage = () => {
  return (
    <div className='Registration-page'>
        <div className="wrapper">
        <h3>Registration</h3>
            <form action="" className='contact-form'>
                <input type="text" name='name' placeholder='Name' />
                <input type="text" name='company' placeholder='Company' />
                <input type="text" name='email' placeholder='Email' />
                <input type="password" name='message' placeholder='Password' />
                <input type="password" name='message' placeholder='Confirm Password' />
                <button type='submit' className='login-btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default RegistrationPage
