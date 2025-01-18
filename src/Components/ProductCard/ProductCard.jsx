import React from 'react';
import "./ProductCard.css"
import ProductCardimg from '../../assets/images/about-banner.png'

function ProductCard({ card }) {
  return (
    <div className='product-card'>
        <div className="product-image">
             <img
                src={`http://localhost:5000/${card.image}`}
                alt="Decorative"
                className="decorative-image"
            />
        </div>
        <div className="product-name">
            <h3>{card.title}</h3>
        </div>
    </div>
  )
}

export default ProductCard
