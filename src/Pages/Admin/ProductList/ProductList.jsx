import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../API/api";
const ProductCard = () => {
    const [products, setProducts] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await apiClient.get('/product')
                setProducts(response.data.products)
            } catch (error) {
                console.error(error);
                
            }
        }
        fetchProducts()
    },[])
    const handleDeleteProduct = async (productId) => {
        try {
          await apiClient.delete(`/product/${productId}`);
          // Filter out the deleted product from the state
          setProducts(products.filter((product) => product._id !== productId));
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      };


  return (
    <>
    { products && (
        <div className="product-container">
      <button className="add-product-btn" onClick={()=> navigate('/admin/add-product')}>
        + Add New Product
      </button>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={`http://localhost:5000/${product.productImage}`} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
            </div>
            <div className="product-actions">
              <button  className="edit-btn" onClick={() => navigate(`/admin/editproduct/${product._id}`)}>
                Edit
              </button>
              <button  className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
)}
    </>
    
  );
};

export default ProductCard;
