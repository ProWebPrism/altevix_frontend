import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import apiClient from "../API/api";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function ProfilePage() {
  const [meetings, setMeetings] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await apiClient.get("/google/getMeetings", {
          withCredentials: true,
        });
        console.log(response.data.events);
        setMeetings(response.data.events);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };

    const fetchUserInfo = async () => {
      try {
        const response = await apiClient.get("/auth/profile", {
          withCredentials: true,
        });
        setUserInfo({
          name: response.data.name,
          email: response.data.email,
        });
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchMeetings();
    fetchUserInfo();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await apiClient.put("/auth/profile", userInfo, {
        withCredentials: true,
      });
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <>
    <Navbar/>
    <div className="Profile-page">
      <div className="wrapper">
        <h3>Profile Information</h3>
        <div className="profile-info">
          {isEditing ? (
            <div className="edit-form">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
              />
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <div className="user-info">
              <p><strong>Name:</strong> {userInfo.name}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <button onClick={handleEditClick}>Edit</button>
            </div>
          )}
        </div>

        {/* <h3>Upcoming Meetings</h3>
        {meetings.length === 0 ? (
          <p>No upcoming meetings scheduled.</p>
        ) : (
          <ul className="meetings-list">
            {meetings.map((meeting) => (
              <li key={meeting.id} className="meeting-item">
                <strong>{meeting.summary}</strong>
                <p>Date: {new Date(meeting.start.dateTime).toLocaleDateString()}</p>
                <p>Time: {new Date(meeting.start.dateTime).toLocaleTimeString()}</p>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ProfilePage;
