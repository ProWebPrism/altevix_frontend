import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);
    const closeDropdown = () => setDropdownOpen(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login-page');
    };
    const handleProfile = () => {
        navigate('/Profile-page')
    }

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
                            <Link to='/'>Home</Link>
                            <Link to='/about-us'>About</Link>
                            <Link to='/products'>Elevators</Link>
                            <Link to='/contact-us'>Contact</Link>
                        </div>
                        <div className="auth-buttons">
                            {isLoggedIn ? (
                                <div className="user-dropdown-container">
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        className="user-icon"
                                        onClick={toggleDropdown}
                                    />
                                    {dropdownOpen && (
                                        <div className="user-dropdown-menu">
                                            <button onClick={handleLogout}>Logout</button>
                                            <button onClick={handleProfile}>Profile</button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className='auth-links'>
                                    <Link to='/login-page'>Login</Link>/
                                    <Link to='/registration-page'>Register</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
