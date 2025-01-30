import React, { useState, useEffect } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import apiClient from '../../API/api';

const Footer = () => {
    const [contactDetails, setContactDetails] = useState(null);
    useEffect(() => {
        const fetchContactDetails = async () => {
          try {
            const response = await apiClient.get('/contact-page');
            setContactDetails(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchContactDetails();
      }, []);
    return (
    <> { contactDetails && (
        <div className='footer-section'>
            <div className="wrapper">
                <div className="footer-content">
                    <div className="about-us">
                        <h4>Altivex</h4>
                        <p>We are a leading company in the lifting sector. We have more than 50 years
                            of experience designing and marketing Lifting Equipment and Components for
                            professionals in the sector around the world.
                        </p>
                    </div>
                    <div className="altivex">
                        <h5>Altivex</h5>
                        <ul>
                            <li>About Altivex</li>
                            <li>Why Altivex</li>
                            <li>Resources</li>
                            <li>Present</li>
                            <li>Contact</li>
                        </ul>

                    </div>
                    <div className="elevators">
                        <h5>Elevators</h5>
                        <ul>
                            <li>Passenger Elevators</li>
                            <li>Lift</li>
                            <li>Car lift</li>
                            <li>Single-family homes</li>
                            <li>Stair lift</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>Contact</h5>
                        <ul>
                            <li><FontAwesomeIcon icon={faLocationDot} size="lg"/>
                            <span>{contactDetails.location}</span></li>
                            <li><FontAwesomeIcon icon={faPhone} size="lg"/>
                            <span>{contactDetails.phone}</span></li>
                            <li> <FontAwesomeIcon icon={faEnvelope}  size="lg"/>
                            <span>{contactDetails.email}</span></li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="footer-bottom">
                <div className="wrapper footer-bottom-content ">
                    <ul className='footer-bottom-links'>
                        {/* <li>Legal notice</li> */}
                        <li>Privacy policy</li>
                        <li>Cookies policy</li>
                        {/* <li>Quality policy</li> */}
                        <li>Copyright © 2025 Altivex Elevator Industry all rights reserved.</li>
                    </ul>
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
    )}
        
        </>
    )
}

export default Footer