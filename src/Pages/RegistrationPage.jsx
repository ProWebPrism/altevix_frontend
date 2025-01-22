import React, { useState } from 'react';
import './RegistrationPage.css';
import apiClient from '../API/api';
import { useNavigate, Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Validate password length (at least 6 characters)
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error message

    // Check if passwords match
    if (formData.password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.name.length < 3) {
      setError('Enter a valid name');
      return;
    }

    // Check if email is valid
    if (!validateEmail(formData.email)) {
      setError('Invalid email format');
      return;
    }

    // Check if password meets minimum length
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await apiClient.post('/auth/register', {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        password: formData.password,
      });

      if (response.data) {
        localStorage.setItem('token', response.data.token); // Assuming the response contains a token
        alert('Registration successful...');
        navigate('/'); // Navigate to login or another page
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="Registration-page">
      <div className="wrapper">
        <h3>Registration</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          {error && <div className="error-message">{error}</div>}

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <div className="form-actions">
            <button type="submit" className="login-btn">Submit</button>
            <Link to="/login-page" className="login-link">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
