import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HeroSection.css'
import apiClient from '../../../API/api';

const HeroSectionUpdate = () => {
  const [carousels, setCarousels] = useState([{}, {}, {}, {}]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const response = await apiClient.get('/section/herosection'); 
        setCarousels(response.data.carousels || [ {}, {}, {}, {} ]); 
      } catch (error) {
        console.error('Error fetching hero section data:', error);
        alert('Failed to fetch hero section data.');
      }
    };

    fetchHeroSection();
  }, []);

  const handleFileChange = (e, index) => {
    const updatedCarousels = [...carousels];
    updatedCarousels[index].image = e.target.files[0];
    setCarousels(updatedCarousels);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCarousels = [...carousels];
    updatedCarousels[index][name] = value;
    setCarousels(updatedCarousels);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    carousels.forEach((carousel, index) => {
      if (carousel.image) formData.append(`carousel${index + 1}img`, carousel.image);
      formData.append(`carousel${index + 1}title`, carousel.title);
      formData.append(`carousel${index + 1}description`, carousel.description);
    });

    try {
      const response = await apiClient.put('/section/herosection', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
    } catch (error) {
      alert('Error updating hero section');
    }
  };

  return (
    <div className="hero-section-update">
      <h2>Update Slider Section</h2>
      <form onSubmit={handleSubmit}>
        {carousels.map((carousel, index) => (
          <div key={index} className="carousel-form">
            <h3>Carousel {index + 1}</h3>
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
              onChange={(e) => handleInputChange(e, index)}
            />
            <textarea
              placeholder="Description"
              name="description"
              value={carousel.description || ''}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        ))}
        <button className='carouselupdate' type="submit">Update Slider Section</button>
      </form>
    </div>
  );
};

export default HeroSectionUpdate;
