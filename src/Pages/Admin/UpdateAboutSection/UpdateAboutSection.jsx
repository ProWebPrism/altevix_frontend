import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateAboutSection.css'
import apiClient from '../../../API/api';

const UpdateAboutSection = () => {
  const [formData, setFormData] = useState({
    mainBanner: '',
    firstSectionImage: '',
    firstSectionSubheading: '',
    firstSectionDescription: '',
    secondSectionImage: '',
    secondSectionDescription: '',
    thirdSectionImage: '',
    thirdSectionDescription: '',
  });

  const [selectedFiles, setSelectedFiles] = useState({
    mainBanner: null,
    firstSectionImage: null,
    secondSectionImage: null,
    thirdSectionImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();

    // Append text data
    for (let key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    // Append files
    if (selectedFiles.mainBanner) formDataToSubmit.append('mainBanner', selectedFiles.mainBanner);
    if (selectedFiles.firstSectionImage) formDataToSubmit.append('firstSectionImage', selectedFiles.firstSectionImage);
    if (selectedFiles.secondSectionImage) formDataToSubmit.append('secondSectionImage', selectedFiles.secondSectionImage);
    if (selectedFiles.thirdSectionImage) formDataToSubmit.append('thirdSectionImage', selectedFiles.thirdSectionImage);

    try {
      const response = await apiClient.put('/about', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('About section updated successfully!');
    } catch (error) {
      console.error('Error updating about section:', error);
      alert('Error updating about section.');
    }
  };

  useEffect(() => {
    const fetchAboutSection = async () => {
      try {
        const response = await apiClient.get('/about');
        const { data } = response;

        setFormData({
          mainBanner: data.mainBanner,
          firstSectionImage: data.firstSection.image,
          firstSectionSubheading: data.firstSection.subheading,
          firstSectionDescription: data.firstSection.description,
          secondSectionImage: data.secondSection.image,
          secondSectionDescription: data.secondSection.description,
          thirdSectionImage: data.thirdSection.image,
          thirdSectionDescription: data.thirdSection.description,
        });
      } catch (error) {
        console.error('Error fetching about section data:', error);
      }
    };

    fetchAboutSection();
  }, []);

  return (
    <div className='update-about-section'>
      <h1>Update About Page</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className='form-group'>
          <label>Main Banner Image</label>
          <input
            type="file"
            name="mainBanner"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className='form-group'>
          <label>First Section Image</label>
          <input
            type="file"
            name="firstSectionImage"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className='form-group'>
          <label>First Section Subheading</label>
          <input
            type="text"
            name="firstSectionSubheading"
            value={formData.firstSectionSubheading}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>First Section Description</label>
          <textarea
            name="firstSectionDescription"
            value={formData.firstSectionDescription}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Second Section Image</label>
          <input
            type="file"
            name="secondSectionImage"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className='form-group'>
          <label>Second Section Description</label>
          <textarea
            name="secondSectionDescription"
            value={formData.secondSectionDescription}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Third Section Image</label>
          <input
            type="file"
            name="thirdSectionImage"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className='form-group'>
          <label>Third Section Description</label>
          <textarea
            name="thirdSectionDescription"
            value={formData.thirdSectionDescription}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update Page</button>
      </form>
    </div>
  );
};

export default UpdateAboutSection;
