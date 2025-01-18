import React, { useEffect, useState } from 'react'
import apiClient from '../../API/api'
import settings from '../../assets/images/Group 18.png'
import './ValueProposition.css'

const ValuePropositon = () => {
  const [cards, setCards] = useState({
    cards: [
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
    ],
  });

  useEffect(() => {
    const fetchCardSection = async () => {
      try {
        const response = await apiClient.get('/section/advantages');
        setCards({
          cards: response.data.cards,
        });
      } catch (error) {
        console.error('Error fetching card section data:', error);
        alert('Failed to fetch card section data.');
      }
    };

    fetchCardSection();
  }, []);

  return (
    <div className="proposition-container">
      <div className="wrapper">
        <div className="headers">
          <h2>ALWAYS INNOVATING:</h2>
          <h2 className="highlight">OUR VALUE PROPOSITION</h2>
          <p>We are the strategic partner of professionals in the sector worldwide because we offer the following advantages:</p>
        </div>
        <div className="cards">
          {cards.cards.map((card, index) => (
            <div className="card" key={index}>
              <img src={`http://localhost:5000/${card.image }`|| settings} alt="Card Icon" />
              <p>{card.title || 'No title available'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ValuePropositon;
