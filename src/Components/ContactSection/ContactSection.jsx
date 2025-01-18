import React from 'react'
import './ContactSection.css'
import img from '../../assets/images/contactsection.png'

const ContactSection = () => {
    return (
        <div className='contact-section'>
            <div className="wrapper">
                <div className="left-section">
                    <h3 className='brand-name'>Altivex</h3>

                    <div className="contact-card">
                        <h3>Contact</h3>
                        <form action="" className='contact-form'>
                            <input type="text" name='name' placeholder='Name' />
                            <input type="text" name='company' placeholder='Company' />
                            <input type="text" name='email' placeholder='Email' />
                            <input type="text" name='message' placeholder='Comments' />
                            <button type='submit'>Submit</button>

                        </form>
                    </div>

                </div>
            </div>
            <div className="right-section">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default ContactSection