import React, { useEffect, useState } from 'react';
import apiClient from '../../../API/api';
import './CustomMade.css'

const UpdateCustomMade = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
        const fetchCustom = async () => {
            try {
                const response = await apiClient.get('/section/custom')
                if(response) {
                    setDescription(response.data.description)
                    setImage(response.data.image)
                }
            } catch (error) {
                console.error(error);
                
            }
        }
        fetchCustom()
    },[])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !description) {
      setMessage('Please provide both an image and description.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);

    try {
      const response = await apiClient.put('/section/custom', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to update custom section.');
      console.error(error);
    }
  };

  return (
    <div className="update-custom-container">
      <h2>Update Custom made Section</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Select Image:</label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter a description..."
          />
        </div>

        {message && <p className="message">{message}</p>}

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateCustomMade;
