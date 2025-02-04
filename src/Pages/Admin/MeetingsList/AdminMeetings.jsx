import React, { useState, useEffect } from "react";
import "./AdminMeetings.css";
import apiClient from "../../../API/api";

function AdminMeetingsList() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await apiClient.get("/google/getMeetingsadmin", {
          withCredentials: true,
        });
        setMeetings(response.data.events);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };

    fetchMeetings();
  }, []);

  return (
    <div className="admin-meetings-container">
      <h3>All Scheduled Meetings</h3>
      {meetings.length === 0 ? (
        <p>No upcoming meetings scheduled.</p>
      ) : (
        <ul className="admin-meetings-list">
          {meetings.map((meeting) => (
            <li key={meeting.id} className="admin-meeting-item">
              <strong>{meeting.summary}</strong>
              <p>Date: {new Date(meeting.start.dateTime).toLocaleDateString()}</p>
              <p>Time: {new Date(meeting.start.dateTime).toLocaleTimeString()}</p>
              <p>Organizer: {meeting.organizer?.email || "N/A"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminMeetingsList;
