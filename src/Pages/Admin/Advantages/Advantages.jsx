import React, { useState, useEffect } from 'react';
import apiClient from '../../../API/api';
import './Advantages.css'

const AdvantagesSectionUpdate = () => {
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

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchCardSection = async () => {
      try {
        const response = await apiClient.get('/section/advantages');
        setCards({
          cards: response.data.cards || [
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
      } catch (error) {
        console.error('Error fetching card section data:', error);
        alert('Failed to fetch card section data.');
      }
    };

    fetchCardSection();
  }, []);

  const handleFileChange = (e, index) => {
    const updatedCards = [...cards.cards];
    updatedCards[index].image = e.target.files[0];
    setCards((prevState) => ({ ...prevState, cards: updatedCards }));
  };

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    setCards((prevState) => {
      const updatedCards = [...prevState.cards];
      updatedCards[index] = { ...updatedCards[index], [field]: value };
      return { ...prevState, cards: updatedCards };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    // Loop through the cards and append each image and title
    cards.cards.forEach((card) => {
        if (card.image) {
          formData.append('images', card.image);  // Append as 'images'
        }
        formData.append(`cardtitle[]`, card.title); // Append titles as 'cardtitle[]'
      });
      
  
    // Debugging: Log the FormData to check if the data is correct
  
    try {
      const response = await apiClient.put('/section/advantages', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(response.data.message);
    } catch (error) {
      alert('Error updating the advantages section.');
    }
  };
  
  
  
  

  return (
    <div className="advantages-section-update">
      <h2>Update Advantages Section</h2>
      <form onSubmit={handleSubmit}>
        {cards.cards.map((carousel, index) => (
          <div key={index} className="carousel-form">
            <h3>Card {index + 1}</h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, index)}
            />
            <input
              type="text"
              placeholder="Title"
              value={carousel.title || ''}
              onChange={(e) => handleInputChange(e, index, 'title')}
            />
          </div>
        ))}
        <button className="carouselupdate" type="submit">
          Update Advantages Section
        </button>
      </form>
    </div>
  );
};

export default AdvantagesSectionUpdate;
