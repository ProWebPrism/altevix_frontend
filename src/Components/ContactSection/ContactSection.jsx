import React, { useState } from 'react'
import './ContactSection.css'
import img from '../../assets/images/contactsection.png'
import apiClient from '../../API/api';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState('');
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
    return (
        <div className='contact-section'>
            <div className="wrapper">
                <div className="left-section">
                    <h3 className='brand-name'>Altivex</h3>

                    <div className="contact-card">
                        <h3>Contact</h3>
                        <form onSubmit={handleSubmit} className='contact-form'>
                            <input type="text" name='name' placeholder='Name' value={formData.name} onChange={handleInputChange}/>
                            <input type="text" name='company' placeholder='Company' value={formData.company} onChange={handleInputChange}/>
                            <input type="text" name='email' placeholder='Email' value={formData.email} onChange={handleInputChange}/>
                            <input type="text" name='message' placeholder='Comments'value={formData.message} onChange={handleInputChange}/>
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