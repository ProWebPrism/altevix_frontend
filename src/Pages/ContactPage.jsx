import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import location from '../assets/images/location.svg';
import telephone from '../assets/images/call.svg';
import mail from '../assets/images/mail.svg';
import './ContactPage.css';
import apiClient from '../API/api';

function ContactPage() {
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
  }, []); // Include empty dependency array to fetch data on mount

  return (
    <div>
      <Navbar />
      {contactDetails ? (
        <div className="contact-wrap">
          <div className="wrapper">
            <div className="contact-row">
              <div className="contact-col-1">
                <div className="contact-page-form">
                  <h3>Contact-us</h3>
                  <form action="" className="contact-form">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="company" placeholder="Company" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="message" placeholder="Comments" />
                    <button type="submit" className="login-btn">Submit</button>
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
                  <a href="#">{contactDetails.location}</a>
                </div>
                <div className="call">
                  <img
                    src={telephone}
                    alt="Decorative"
                    className="decorative-image"
                  />
                  <a href="#">{contactDetails.phone}</a>
                </div>
                <div className="mail">
                  <img
                    src={mail}
                    alt="Decorative"
                    className="decorative-image"
                  />
                  <a href="#">{contactDetails.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading contact details...</p>
      )}
      <Footer />
    </div>
  );
}

export default ContactPage;
