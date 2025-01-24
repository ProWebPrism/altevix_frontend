import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import apiClient from '../../API/api';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate();

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);
    const closeDropdown = () => setDropdownOpen(false);
    const toggleCart = () => setIsCartOpen((prev) => !prev);

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
    const fetchCartItems = async () => {
        try {
            const response = await apiClient.get('/cart');
            console.log(response.data.cart.items);
            
            setCartItems(response.data.cart.items || []);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };
    const handleRemoveItem = async (itemId) => {
        try {
            await apiClient.delete(`/cart/remove/${itemId}`); // API call to remove item
            setCartItems(prevItems => prevItems.filter(item => item.productId._id !== itemId)); // Remove from the state
        } catch (error) {
            console.error('Error removing item from the cart:', error);
        }
    };
    useEffect(() => {
        fetchCartItems()
    },[cartItems])
    

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
                        <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="cart-icon"
                                onClick={toggleCart}
                            />
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
                        {/* Cart Sidebar */}
                        {isCartOpen && (
                <div className="cart-sidebar">
                    <div className="cart-header">
                        <h2>Your Cart</h2>
                        <button onClick={toggleCart} className="close-cart">
                            &times;
                        </button>
                    </div>
                    <div className="cart-items">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={`http://localhost:5000/${item.productId.productImage}`} alt={item.name} />
                                    </div>
                                    <div className="cart-item-details">
                                        <p>{item.name}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <button className="remove-item-btn" onClick={() => handleRemoveItem(item.productId._id)}>Remove</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No items in the cart yet!</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
