import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductListing.css';
import img from '../../assets/images/custom.jpg'
import ProductListBanner from '../../Components/ProductListBanner/ProductListBanner';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import apiClient from '../../API/api';



const ProductList = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('')
    
    const { categoryId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
      const fetchProducts = async () => {
        try {
            const response = await apiClient.get(`/product/category/${categoryId}`)
            console.log(response);
            
            setProducts(response.data.products)
            if (response.data.products.length > 0) {
              setCategory(response.data.products[0].category.name); 
            } else {
              setCategory('');
            }
        } catch (error) {
            console.error(error);
            
        }
      }
      fetchProducts()
    },[])
  return (
<>
      <Navbar />
      <div>
        {/* Banner */}
        <ProductListBanner mainBanner={img} title={category} />


        {/* Main Section */}
        <div className="wrapper product-list-container">
          <br /><br /><br />
                  {/* <aside className="filter-sidebar">
                      <h2 className="filter-title">Filters</h2>
                      <select id="filter" className="filter-select">
                          <option value="all">All</option>
                          <option value="low-to-high">Price: Low to High</option>
                          <option value="high-to-low">Price: High to Low</option>
                          <option value="electronics">Electronics</option>
                          <option value="furniture">Furniture</option>
                      </select>
                  </aside> */}


          {/* Product List */}
          <main className="product-list-section">
            <div className="product-list">
              { products && products.map((product) => (
                <div className="product-list-card" key={product.id}>
                  <img
                    src={`http://localhost:5000/${product.productImage}`}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <button className="product-btn" onClick={() => navigate(`/productInner/${product._id}`)}>View Details</button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>


  );
};

export default ProductList;
