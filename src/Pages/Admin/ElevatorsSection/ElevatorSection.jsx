import React, { useState, useEffect } from 'react';

import apiClient from '../../../API/api';
import './ElevatorSection.css'

const ElevatorSectionUpdate = () => {
    const [cards, setCards] = useState({
        description: '',
        cards: [{ image: null, title: '', description: '' },
             { image: null, title: '', description: '' },
              { image: null, title: '', description: '' },
               { image: null, title: '', description: '' }]
      });
      
  const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchCardSection = async () => {
            try {
                const response = await apiClient.get('/section/cards');
                setCards({
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
  

    const handleFileChange = (e, index) => {
        const updatedCards = [...cards.cards];
        updatedCards[index].image = e.target.files[0]; 
        setCards(prevState => ({ ...prevState, cards: updatedCards }));
      };
      
      const handleInputChange = (e, index, field) => {
        const { value } = e.target;
      
        setCards((prevState) => {
          const updatedCards = [...prevState.cards];
          updatedCards[index] = {
            ...updatedCards[index],
            [field]: value,
          };
      
          return { ...prevState, cards: updatedCards };
        });
      };
      
      const handleSectionDescriptionChange = (e) => {
        const { value } = e.target;
        setCards((prevState) => ({
          ...prevState,
          description: value,
        }));
      };
      
      

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('description', cards.description);
      
        cards.cards.forEach((card, index) => {
          if (card.image) formData.append(`card${index + 1}img`, card.image);  // Attach image file
          formData.append(`card${index + 1}title`, card.title);  // Attach title
          formData.append(`card${index + 1}description`, card.description);  // Attach description
        });
      
        try {
          const response = await apiClient.put('/section/cards', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          alert(response.data.message);
        } catch (error) {
          alert('Error updating cards section');
        }
      };
      

  return (
    <div className="hero-section-update">
      <h2>Update Elevator Section</h2>
      <form onSubmit={handleSubmit}>
        <h3>Description</h3>
              <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={cards.description || ''}
                  onChange={handleSectionDescriptionChange}
              />
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
                    name="title"
                    value={carousel.title || ''}
                    onChange={(e) => handleInputChange(e, index, 'title')}
                />
                <textarea
                    placeholder="Description"
                    name="description"
                    value={carousel.description || ''}
                    onChange={(e) => handleInputChange(e, index, 'description')}
                />

          </div>
        ))}
        <button className='carouselupdate' type="submit">Update Elevator Section</button>
      </form>
    </div>
  );
};

export default ElevatorSectionUpdate;
