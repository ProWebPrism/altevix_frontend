import React, { useState } from 'react';
import axios from 'axios';
import './ResetPassword.css'
import apiClient from '../../../API/api';

const PasswordReset = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the new password and confirm password match
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match');
            return;
        }

        const token = localStorage.getItem('admintoken'); // Assuming token is stored in localStorage

        if (!token) {
            setError('No authentication token found');
            return;
        }

        try {
            const response = await apiClient.post(
                '/admin/reset-password',
                { oldPassword, newPassword },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setSuccessMessage(response.data.message);
            setError('')
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (err) {
            setError(err.response?.data?.message || 'Error resetting password');
            setSuccessMessage('')
        }
    };

    return (
        <div className="pr-main-container">
                    <div className="password-reset-container">
            <h2>Reset Your Password</h2>
            <form onSubmit={handleSubmit} className="password-reset-form">
                <input
                    type="password"
                    name="oldPassword"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit" className="submit-btn">Reset Password</button>
            </form>

            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
            
        </div>

    );
};

export default PasswordReset;
