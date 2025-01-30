import React from 'react';
import "./ProductCard.css"
import ProductCardimg from '../../assets/images/about-banner.png'
import { useNavigate } from 'react-router-dom';

function ProductCard({ category }) {
  const navigate = useNavigate()
  return (
    <div className='product-card' onClick={() => navigate(`/productList/${category._id}`)}>
        <div className="product-image">
             <img
                src={`http://localhost:5000/${category.image}`}
                alt="Decorative"
                className="decorative-image"
            />
        </div>
        <div className="product-name">
            <h3>{category.name}</h3>
        </div>
    </div>
  )
}

export default ProductCard
