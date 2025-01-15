import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="sub-navbar">
            <div className="wrapper">
                <div className="sub-nav-container">
                <div className="email">
                <p>support@gmail.com</p>
            </div>
            <div className="social-icons">
                <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </div>

                </div>


            </div>

        </div>
        <div className="main-navbar">
            <div className="wrapper">
                <div className="main-nav-container">
                <div className="logo">
                <h1>Altivex Elevators Industry</h1> 
            </div>
            <div className="nav-links">
                <Link to= '/'>Home</Link>
                <Link to= '/about-us'>About</Link>
                <Link to= '/products'>Elevators</Link>
                <Link to= '/shop'>Shop components</Link>
                <Link to= '/contact'>Contact</Link>
            </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar