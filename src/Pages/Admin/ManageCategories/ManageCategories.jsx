import React, { useEffect, useState } from 'react';
import apiClient from '../../../API/api';
import './ManageCategories.css';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '', image: null });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch categories on load
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await apiClient.get('/category'); // Replace with your endpoint
      console.log(response.data);
      
      setCategories(response.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || (!formData.image && !currentCategory)) {
      setError('Please fill out all fields.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    if (formData.image) formDataToSend.append('image', formData.image);

    try {
      if (currentCategory) {
        // Editing existing category
        await apiClient.put(`/category/${currentCategory._id}`, formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setSuccess('Category updated successfully.');
      } else {
        // Adding a new category
        await apiClient.post('/category', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setSuccess('Category added successfully.');
      }

      setError('');
      setFormData({ name: '', image: null });
      setCurrentCategory(null);
      fetchCategories();
    } catch (err) {
      setError('Error saving category. Please try again.');
      console.error(err);
    }
  };

  const handleEditCategory = (category) => {
    setCurrentCategory(category);
    setFormData({ name: category.name, image: null }); // Keep the current image unless a new one is uploaded
  };

  const handleDeleteCategory = async (id) => {
    try {
      await apiClient.delete(`/category/${id}`);
      setSuccess('Category deleted successfully.');
      fetchCategories();
    } catch (err) {
      setError('Error deleting category. Please try again.');
      console.error(err);
    }
  };

  const handleCancelEdit = () => {
    setCurrentCategory(null);
    setFormData({ name: '', image: null });
  };

  return (
    <div className="manage-categories">
      <h1>Manage Categories</h1>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleFormSubmit} className="category-form">
        <input
          type="text"
          placeholder="Category Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
        />
        <button type="submit">
          {currentCategory ? 'Update Category' : 'Add Category'}
        </button><br />
        {currentCategory && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </form>

      <div className="categories-list">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category) => (
            <div key={category._id} className="category-card">
              <img src={`http://localhost:5000/${category.image}`} alt={category.name} />
              <h2>{category.name}</h2>
              <button onClick={() => handleEditCategory(category)}>Edit</button><br />
              <button onClick={() => handleDeleteCategory(category._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default ManageCategories;
