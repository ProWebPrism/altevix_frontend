import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope,FaWhatsapp, FaVideo } from "react-icons/fa"; // Example icons from react-icons
import "./GoogleMeet.css";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactDetails = () => {
  Modal.setAppElement("#root"); // Set root element for accessibility
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const fetchAuthUrl = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/google/auth-url"); // Update this URL if backend runs elsewhere
        const data = await response.json();
        window.location.href = data.authUrl; // Redirects user to Google OAuth
    } catch (error) {
        console.error("Error fetching auth URL:", error);
    }
};
useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get('access_token');
    const refreshToken = queryParams.get('refresh_token');

    if (accessToken && refreshToken) {
        // Store the tokens in localStorage or your app's state
        localStorage.setItem("googleAccessToken", accessToken);
        localStorage.setItem("googleRefreshToken", refreshToken);
        
        // Open the modal
        setModalIsOpen(true);
    }
}, [location.search]);
const handleScheduleMeeting = async () => {
  try {
      const eventDetails = {
          summary: "Meeting Scheduled via Altevix",
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
    <div className="contact-container">
      <div className="contact-icons">
        <div className="contact-icon">
          <FaWhatsapp size={30} />
          <p>WhatsApp</p>
        </div>
        <div className="contact-icon">
          <FaPhone size={30} />
          <p>Call</p>
        </div>
        <div className="contact-icon" onClick={fetchAuthUrl}>
          <FaVideo size={30} />
          <p>Google Meet</p>
        </div>
        <div className="contact-icon">
          <FaEnvelope size={30} />
          <p>Email</p>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="modal-title">Schedule a Meeting</h2>
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

export default ContactDetails;
