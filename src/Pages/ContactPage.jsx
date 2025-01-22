import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import location from '../assets/images/location.svg';
import telephone from '../assets/images/call.svg';
import mail from '../assets/images/mail.svg';
import './ContactPage.css';
import apiClient from '../API/api';
import GoogleMeet from '../Components/GoogleMeet/GoogleMeet'

function ContactPage() {
  const [contactDetails, setContactDetails] = useState(null);
      const [formData, setFormData] = useState({
          name: '',
          email: '',
          company: '',
          message: ''
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await apiClient.post('/contact', formData);
          alert(response.data.message);
          setFormData({ name: '', email: '', company: '', message: '' });
      } catch (error) {
          console.error('Error submitting form:', error);
          alert('Failed to send your enquiry. Please try again later.');
      }
  };
  

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
                  <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Name" onClick={handleInputChange} />
                    <input type="text" name="company" placeholder="Company" onClick={handleInputChange}/>
                    <input type="text" name="email" placeholder="Email" onClick={handleInputChange}/>
                    <input type="text" name="message" placeholder="Comments" onClick={handleInputChange}/>
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
      <GoogleMeet/>
      <Footer />
    </div>
  );
}

export default ContactPage;
