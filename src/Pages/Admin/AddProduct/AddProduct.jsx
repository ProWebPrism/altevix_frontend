import React, { useState, useEffect } from 'react';
import './AddProduct.css';
import apiClient from '../../../API/api';

const ProductInformation = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [advantages, setAdvantages] = useState([{ title: '', description: '' }]);
  const [bluePrintImages, setBluePrintImages] = useState(null);
  const [applications, setApplications] = useState('');
  const [technicalFeatures, setTechnicalFeatures] = useState([{ title: '', feature: '' }]);
  const [solutions, setSolutions] = useState([{ image: '', title: '', subheading: '', features: '' }]);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await apiClient.get('/category'); // Replace with your endpoint
      
      setCategories(response.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };
  
  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleAddAdvantage = () => {
    setAdvantages([...advantages, { title: '', description: '' }]);
  };

  const handleRemoveAdvantage = (index) => {
    const newAdvantages = [...advantages];
    newAdvantages.splice(index, 1);
    setAdvantages(newAdvantages);
  };

  const handleAddTechnicalFeature = () => {
    setTechnicalFeatures([...technicalFeatures, { title: '', feature: '' }]);
  };

  const handleRemoveTechnicalFeature = (index) => {
    const newFeatures = [...technicalFeatures];
    newFeatures.splice(index, 1);
    setTechnicalFeatures(newFeatures);
  };

  const handleAddSolution = () => {
    setSolutions([...solutions, { image: '', title: '', subheading: '', features: '' }]);
  };

  const handleRemoveSolution = (index) => {
    const newSolutions = [...solutions];
    newSolutions.splice(index, 1);
    setSolutions(newSolutions);
  };
  const handleBlueprintImagesChange = (e) => {
    if (e.target.files.length > 2) {
      alert("You can only upload up to 2 blueprint images.");
    } else {
      setBluePrintImages(e.target.files);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', productName);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('advantages', JSON.stringify(advantages));
    formData.append('applications', JSON.stringify(applications.split(',')));
    formData.append('technicalFeatures', JSON.stringify(technicalFeatures));
    formData.append('customisedSolutionCards', JSON.stringify(solutions.map(solution => ({
      ...solution,
      features: solution.features.split(','),
    }))));
  
    // Upload Blueprint images (max 2)
    if (bluePrintImages) {
      for (let i = 0; i < bluePrintImages.length; i++) {
        formData.append('blueprintImages', bluePrintImages[i]);
      }
    }
  
    // Upload the product image
    if (productImage) {
      formData.append('productImage', productImage);
    }
  
    // Upload solution card images from the solutions state
    solutions.forEach((solution, index) => {
      if (solution.image) {
        formData.append('customisedSolutionCardsImages', solution.image);
      }
    });
  
    try {
      const response = await apiClient.post('/product', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('There was an error adding the product.');
    }
  };
  
  

  return (
    <form className="product-info-container" onSubmit={handleSubmit}>
      <h2>Add Product Information</h2>
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)} // Ensure this sets the ObjectId
          className="input-field"
        >
          <option value="">Select a Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
      </div>


      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label>Advantages</label>
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-section">
            <input
              type="text"
              placeholder="Advantage Title"
              value={advantage.title}
              onChange={(e) => {
                const newAdvantages = [...advantages];
                newAdvantages[index].title = e.target.value;
                setAdvantages(newAdvantages);
              }}
            />
            <textarea
              placeholder="Advantage Description"
              value={advantage.description}
              onChange={(e) => {
                const newAdvantages = [...advantages];
                newAdvantages[index].description = e.target.value;
                setAdvantages(newAdvantages);
              }}
            />
            <button type="button" onClick={() => handleRemoveAdvantage(index)} className="remove-btn">Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddAdvantage} className="add-btn">Add Advantage</button>
      </div>

      <div className="form-group">
        <label htmlFor="bluePrintImages">Blueprint Images (Max 2)</label>
        <input
          type="file"
          id="bluePrintImages"
          accept="image/*"
          onChange={handleBlueprintImagesChange}
          multiple
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label htmlFor="applications">Applications</label>
        <input
          type="text"
          id="applications"
          value={applications}
          onChange={(e) => setApplications(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label>Technical Features</label>
        {technicalFeatures.map((feature, index) => (
          <div key={index} className="feature-section">
            <input
              type="text"
              placeholder="Feature Title"
              value={feature.title}
              onChange={(e) => {
                const newFeatures = [...technicalFeatures];
                newFeatures[index].title = e.target.value;
                setTechnicalFeatures(newFeatures);
              }}
            />
            <textarea
              placeholder="Feature Description"
              value={feature.feature}
              onChange={(e) => {
                const newFeatures = [...technicalFeatures];
                newFeatures[index].feature = e.target.value;
                setTechnicalFeatures(newFeatures);
              }}
            />
            <button type="button" onClick={() => handleRemoveTechnicalFeature(index)} className="remove-btn">Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddTechnicalFeature} className="add-btn">Add Feature</button>
      </div>

      <div className="form-group">
        <label>Customized Solutions</label>
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card">
            <input
              type="text"
              placeholder="Solution Title"
              value={solution.title}
              onChange={(e) => {
                const newSolutions = [...solutions];
                newSolutions[index].title = e.target.value;
                setSolutions(newSolutions);
              }}
            />
            <input
              type="text"
              placeholder="Solution Subheading"
              value={solution.subheading}
              onChange={(e) => {
                const newSolutions = [...solutions];
                newSolutions[index].subheading = e.target.value;
                setSolutions(newSolutions);
              }}
            />
            <textarea
              placeholder="Solution Features (comma-separated)"
              value={solution.features}
              onChange={(e) => {
                const newSolutions = [...solutions];
                newSolutions[index].features = e.target.value;
                setSolutions(newSolutions);
              }}
            />
                <input
                    type="file"
                    placeholder="Solution Image"
                    onChange={(e) => {
                        const newSolutions = [...solutions];
                        newSolutions[index].image = e.target.files[0];  // Save the actual file here
                        setSolutions(newSolutions);
                    }}
                />

            <button type="button" onClick={() => handleRemoveSolution(index)} className="remove-btn">Remove</button>
          </div>
        ))}
              <div className="form-group">
                  <label htmlFor="productImage">Product Image</label>
                  <input
                      type="file"
                      id="productImage"
                      accept="image/*"
                      onChange={handleProductImageChange}
                      className="input-field"
                  />
              </div>
        <button type="button" onClick={handleAddSolution} className="add-btn">Add Solution</button>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default ProductInformation;
