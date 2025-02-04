import React, { useEffect, useState } from "react";
import apiClient from '../../API/api'
import './UpcomingMeetings.css'

function UpcomingMeetings() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await apiClient.get("/google/getMeetings", {
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
    <div className="meetings-container">
      <h3>Upcoming Meetings</h3>
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
      )}
    </div>
  );
}

export default UpcomingMeetings;
