import React, { useState } from "react";
import apiClient from "../../../API/api";

const UpdateContactDetails = () => {
  const [formData, setFormData] = useState({
    location: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await apiClient.post("/contact-page", formData);
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Error updating contact details");
    }
  };

  return (
    <div className="update-contact-details">
      <h2 className="title">Update Contact Details</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Update
        </button>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </form>

      {/* Styling */}
      <style jsx>{`
        .update-contact-details {
          background-color: #fff;
          padding: 20px;
          max-width: 400px;
          margin: 0 auto;
          border: 2px solid #ff0000;
          border-radius: 10px;
        }
        .title {
          text-align: center;
          color: #ff0000;
          margin-bottom: 20px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        label {
          font-weight: bold;
          color: #ff0000;
        }
        input {
          padding: 10px;
          border: 1px solid #ff0000;
          border-radius: 5px;
          outline: none;
        }
        input:focus {
          border-color: #ff4d4d;
        }
        .btn-submit {
          background-color: #ff0000;
          color: #fff;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .btn-submit:hover {
          background-color: #cc0000;
        }
        .success {
          color: green;
          text-align: center;
        }
        .error {
          color: red;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default UpdateContactDetails;
