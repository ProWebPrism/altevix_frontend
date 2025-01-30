import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faShoppingCart, faBars, faTimes, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import apiClient from '../../API/api';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Navbar = () => {
      Modal.setAppElement("#root"); // Set root element for accessibility
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [modalContent, setModalContent] = useState("");
      const [selectedDate, setSelectedDate] = useState(null);
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

      const toggleMobileMenu = () => {
          setMobileMenuOpen((prev) => !prev);
      };
      const fetchAuthUrl = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/google/auth-url"); // Update this URL if backend runs elsewhere
            const data = await response.json();
            window.location.href = data.authUrl; // Redirects user to Google OAuth
        } catch (error) {
            console.error("Error fetching auth URL:", error);
        }
    };
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
    const handleScheduleMeeting = async () => {
        try {
            const eventDetails = {
                summary: "Meeting Scheduled via Altivex",
                startTime: selectedDate.toISOString(),
                endTime: new Date(selectedDate.getTime() + 60 * 60 * 1000).toISOString(), // Add 1 hour
            };
      
            const response = await fetch("http://localhost:5000/api/google/create-event", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Add authentication headers if needed, e.g., tokens
                },
                body: JSON.stringify(eventDetails),
            });
      
            const result = await response.json();
      
            if (response.ok) {
                alert("Meeting scheduled successfully!");
                console.log("Event created:", result.event);
            } else {
                alert("Failed to schedule the meeting.");
                console.error("Error:", result);
            }
        } catch (error) {
            console.error("Error scheduling meeting:", error);
        } finally {
            setModalIsOpen(false);
        }
      };
    

      return (
        <div className="navbar-container">
          {/* Sub Navbar */}
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
    
          {/* Main Navbar */}
          <div className="main-navbar">
            <div className="wrapper">
              <div className="main-nav-container">
                {/* Logo */}
                <div className="logo">
                  <h1>Altivex Elevators Industry</h1>
                </div>
    
                {/* Mobile Menu Toggle */}
                <FontAwesomeIcon
                  icon={mobileMenuOpen ? faTimes : faBars}
                  className="mobile-menu-toggle"
                  onClick={toggleMobileMenu}
                />
    
                {/* Desktop and Mobile Navigation Links */}
                <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
                  {mobileMenuOpen && (
                    <div className="mobile-logo">
                      <h1>Altivex Elevators Industry</h1>
                    </div>
                  )}
                  <Link to="/" onClick={() => mobileMenuOpen && toggleMobileMenu}>
                    Home
                  </Link>
                  <Link to="/about-us" onClick={() => mobileMenuOpen && toggleMobileMenu}>
                    About
                  </Link>
                  <Link to="/products" onClick={() => mobileMenuOpen && toggleMobileMenu}>
                    Elevators
                  </Link>
                  <Link to="/contact-us" onClick={() => mobileMenuOpen && toggleMobileMenu}>
                    Contact
                  </Link>
                  <Link to="/spare-parts" onClick={() => mobileMenuOpen && toggleMobileMenu}>
                    Spare parts
                  </Link>
    
                  {/* Mobile-specific icons */}
                  {mobileMenuOpen && (
                    <>
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="mobile-cart-icon"
                        onClick={() => {
                          toggleCart()
                          toggleMobileMenu()
                        }}
                      />
                      {isLoggedIn ? (
                                          <>
                                              <FontAwesomeIcon
                                                  icon={faUserCircle}
                                                  className="mobile-user-icon"
                                                  onClick={() => toggleDropdown()}
                                              />
                                              {dropdownOpen && (
                                                  <div className="user-dropdown-menu">
                                                      <button onClick={handleLogout}>Logout</button>
                                                      <button onClick={handleProfile}>Profile</button>
                                                  </div>
                                              )}
                                          </>
                      ) : (
                        <div className="mobile-auth-links">
                          <Link to="/login-page" onClick={toggleMobileMenu}>
                            Login
                          </Link>
                          <Link to="/registration-page" onClick={toggleMobileMenu}>
                            Register
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </div>
    
                {/* Desktop Auth Buttons */}
                <div className={`auth-buttons ${mobileMenuOpen ? "active" : ""}`}>
                  <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" onClick={toggleCart} />
                  {isLoggedIn ? (
                    <div className="user-dropdown-container">
                      <FontAwesomeIcon icon={faUserCircle} className="user-icon" onClick={toggleDropdown} />
                      {dropdownOpen && (
                        <div className="user-dropdown-menu">
                          <button onClick={handleLogout}>Logout</button>
                          <button onClick={handleProfile}>Profile</button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="auth-links">
                      <Link to="/login-page">Login</Link>/<Link to="/registration-page">Register</Link>
                    </div>
                  )}
              </div>
  
              {/* Mobile Menu Toggle */}
              {/* <FontAwesomeIcon
                icon={mobileMenuOpen ? faTimes : faBars}
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
              /> */}
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
                    <div
                      className="cart-item-image"
                      onClick={() => navigate(`/productInner/${item.productId._id}`)}
                    >
                      <img src={`http://localhost:5000/${item.productId?.productImage || 'default-image.jpg'}`} 
     alt={item.name || 'Product Image'} />

                    </div>
                    <div className="cart-item-details">
                      <p onClick={() => navigate(`/productInner/${item.productId._id}`)}>
                        {item.name}
                      </p>
                      <p onClick={() => navigate(`/productInner/${item.productId._id}`)}>
                        Quantity: {item.quantity}
                      </p>
                      <button
                        className="remove-item-btn"
                        onClick={() => handleRemoveItem(item.productId._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items in the cart yet!</p>
              )}
            </div>
            <div className="cart-footer">
              <button className="place-order-btn" onClick={fetchAuthUrl}>
                Place Order
              </button>
            </div>
          </div>
        )}
            <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className="modal"
                    overlayClassName="modal-overlay"
                  >
                    <h2 className="modal-title">Schedule a Meeting for order</h2>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      showTimeSelect
                      dateFormat="Pp"
                      className="date-picker"
                    />
                    <div className="modal-actions">
                      <button onClick={handleScheduleMeeting} className="modal-button">
                        Schedule Meeting
                      </button>
                      <button onClick={() => setModalIsOpen(false)} className="modal-close-button">
                        Close
                      </button>
                    </div>
                  </Modal>

        </div>
    );
};

export default Navbar;
