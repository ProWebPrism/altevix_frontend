import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import location from '../assets/images/location.svg'
import telephone from '../assets/images/call.svg'
import mail from '../assets/images/mail.svg'
import './ContactPage.css'



function ContactPage() {
  return (
    <div>
        <Navbar/>
            <div className="contact-wrap">
                <div className="wrapper">
                  <div className="contact-row">
                    <div className="contact-col-1">
                        <div className="contact-page-form">
                          <h3>Contact-us</h3>
                          <form action="" className='contact-form'>
                              <input type="text" name='name' placeholder='Name' />
                              <input type="text" name='company' placeholder='Company' />
                              <input type="text" name='email' placeholder='Email' />
                              <input type="text" name='message' placeholder='Comments' />
                              <button type='submit' className='login-btn'>Submit</button>
                          </form>
                        </div>
                    </div>
                    <div className="contact-col-2">
                        <div className="location">
                           <img
                                src={location}
                                alt="Decorative"
                                className="decorative-image"
                            />
                          <a href='#'>Umm Al quiwan , United Arab Emirates</a>
                        </div>
                        <div className="call">
                        <img
                                src={telephone}
                                alt="Decorative"
                                className="decorative-image"
                            />
                          <a href="#">0566539382</a>
                        </div>
                        <div className="mail">
                        <img
                                src={mail}
                                alt="Decorative"
                                className="decorative-image"
                            />
                          <a href="#">info@altivixme.com</a>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}
export default ContactPage
