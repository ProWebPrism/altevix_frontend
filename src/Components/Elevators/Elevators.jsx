import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import "./Elevators.css";
import elevator from '../../assets/images/elevators.jpg'
import apiClient from "../../API/api";

const OurElevators = () => {
const [elevators, setElevators] = useState({
        description: '',
        cards: [{ image: null, title: '', description: '' },
             { image: null, title: '', description: '' },
              { image: null, title: '', description: '' },
               { image: null, title: '', description: '' }]
      });
      const navigate = useNavigate()
      useEffect(() => {
        const fetchCardSection = async () => {
            try {
                const response = await apiClient.get('/section/cards');
                setElevators({
                    description: response.data.description || '',
                    cards: response.data.cards || [{ image: null, title: '', description: '' }, { image: null, title: '', description: '' }, { image: null, title: '', description: '' }, { image: null, title: '', description: '' }]
                });
            } catch (error) {
                console.error('Error fetching card section data:', error);
                alert('Failed to fetch card section data.');
            }
        };

        fetchCardSection();
    }, []);

  return (
    <section className="our-elevators">
      <div className="wrapper">
        <h2 className="section-title">
          OUR <span className="highlight">ELEVATORS</span>
        </h2>
        <p className="section-description">
          {elevators.description}
        </p>

        <div className="elevator-grid">
          {elevators.cards.map((elevator, index) => (
            <div className="elevator-card" key={index}>
              <img
                src={`http://localhost:5000${elevator.image}`}
                alt={elevator.title}
                className="elevator-image"
              />
              <h3 className="elevator-title">{elevator.title}</h3>
              <p className="elevator-description">{elevator.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurElevators;
