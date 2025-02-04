import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';
import apiClient from '../API/api';

function LoginPage() {
  useEffect(() => {
    
  })
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before login attempt

    if (!validateForm()) {
      return;
    }

    try {
      const response = await apiClient.post('/auth/login', { email, password });

      if (response.data) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        navigate('/'); // Redirect to home page
      }
    } catch (error) {
      console.error(error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='LoginPage-sec'>
      <div className="wrapper">
        <h3>Login</h3>
        <form onSubmit={handleSubmit} className='contact-form'>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {formErrors.email && <p className='error-message'>{formErrors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {formErrors.password && <p className='error-message'>{formErrors.password}</p>}
          <button type='submit' className='login-btn'>Submit</button>
        </form>
        {error && <p className='error-message'>{error}</p>}
        <p className='redirect-text'>
          Don't have an account? <Link to='/registration-page'>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
