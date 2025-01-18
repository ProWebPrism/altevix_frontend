import React, { useState } from 'react';
import apiClient from '../../../API/api';
import './ProductPage.css'; // Import CSS file

const AdminUpdateSection = () => {
  const [formData, setFormData] = useState({
    subheading: '',
    description: '',
    sliderMainTitle: '',
    sliderCards: [{ title: '', image: null }],
    cardSection: [{ title: '', image: null }],
    complimentaryCards: [{ title: '', image: null }],
    bannerImage: null,  // Added bannerImage field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCardChange = (e, index, type, field) => {
    const files = e.target.files || null;
    const updatedCards = [...formData[type]];
    if (field === 'image') {
      updatedCards[index].image = files[0];
    } else {
      updatedCards[index].title = e.target.value;
    }
    setFormData({ ...formData, [type]: updatedCards });
  };

  const handleBannerImageChange = (e) => {
    setFormData({ ...formData, bannerImage: e.target.files[0] }); // Handling banner image file change
  };

  const addCard = (type) => {
    setFormData({
      ...formData,
      [type]: [...formData[type], { title: '', image: null }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
  
    // Append basic fields
    form.append('subheading', formData.subheading);
    form.append('description', formData.description);
    form.append('sliderMainTitle', formData.sliderMainTitle);
  
    // Append banner image if exists
    if (formData.bannerImage) {
      form.append('bannerImage', formData.bannerImage);
    }
  
    // Append slider cards with both title and image
    if (formData.sliderCards && formData.sliderCards.length > 0) {
      formData.sliderCards.forEach((card) => {
        if (card.title) form.append('sliderCards', card.title);  // Append title with matching field name
        if (card.image instanceof File) form.append('sliderCards', card.image);  // Append image with matching field name
      });
    }
  
    // Append card section with both title and image
    if (formData.cardSection && formData.cardSection.length > 0) {
      formData.cardSection.forEach((card) => {
        if (card.title) form.append('cardSection', card.title);  // Append title with matching field name
        if (card.image instanceof File) form.append('cardSection', card.image);  // Append image with matching field name
      });
    }
  
    // Append complimentary cards with both title and image
    if (formData.complimentaryCards && formData.complimentaryCards.length > 0) {
      formData.complimentaryCards.forEach((card) => {
        if (card.title) form.append('complimentaryCards', card.title);  // Append title with matching field name
        if (card.image instanceof File) form.append('complimentaryCards', card.image);  // Append image with matching field name
      });
    }
  
    // Log FormData contents before sending
    for (let [key, value] of form.entries()) {
      console.log(key, value);
    }
  
    try {
      const response = await apiClient.post('/product-page', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Page updated successfully!');
    } catch (error) {
      alert('Error updating page: ' + error.message);
    }
  };
  
  
  
  
  

  return (
    <div className="admin-update-section">
      <h1>Update Product Page </h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Banner Image:</label>
          <input
            type="file"
            name="bannerImage"
            onChange={handleBannerImageChange} // Handling banner image change
          />
        </div>

        <div className="form-group">
          <label>Subheading:</label>
          <input
            type="text"
            name="subheading"
            value={formData.subheading}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Slider Main Title:</label>
          <input
            type="text"
            name="sliderMainTitle"
            value={formData.sliderMainTitle}
            onChange={handleInputChange}
          />
        </div>

        {/* Slider Cards Section */}
        <div className="form-section">
          <h2>Slider Cards</h2>
          {formData.sliderCards.map((card, index) => (
            <div className="card-group" key={`slider-${index}`}>
              <label>Card Title:</label>
              <input
                type="text"
                value={card.title}
                onChange={(e) => handleCardChange(e, index, 'sliderCards', 'title')}
              />
              <label>Card Image:</label>
              <input
                type="file"
                onChange={(e) => handleCardChange(e, index, 'sliderCards', 'image')}
              />
            </div>
          ))}
          <button
            type="button"
            className="btn-add"
            onClick={() => addCard('sliderCards')}
          >
            Add Slider Card
          </button>
        </div>

        {/* Card Section */}
        <div className="form-section">
          <h2>Card Section</h2>
          {formData.cardSection.map((card, index) => (
            <div className="card-group" key={`card-${index}`}>
              <label>Card Title:</label>
              <input
                type="text"
                value={card.title}
                onChange={(e) => handleCardChange(e, index, 'cardSection', 'title')}
              />
              <label>Card Image:</label>
              <input
                type="file"
                onChange={(e) => handleCardChange(e, index, 'cardSection', 'image')}
              />
            </div>
          ))}
          <button
            type="button"
            className="btn-add"
            onClick={() => addCard('cardSection')}
          >
            Add Card Section
          </button>
        </div>

        {/* Complimentary Cards */}
        <div className="form-section">
          <h2>Complimentary Cards</h2>
          {formData.complimentaryCards.map((card, index) => (
            <div className="card-group" key={`complimentary-${index}`}>
              <label>Card Title:</label>
              <input
                type="text"
                value={card.title}
                onChange={(e) => handleCardChange(e, index, 'complimentaryCards', 'title')}
              />
              <label>Card Image:</label>
              <input
                type="file"
                onChange={(e) => handleCardChange(e, index, 'complimentaryCards', 'image')}
              />
            </div>
          ))}
          <button
            type="button"
            className="btn-add"
            onClick={() => addCard('complimentaryCards')}
          >
            Add Complimentary Card
          </button>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminUpdateSection;
