import React from 'react';
import "./ProductCard.css"
import ProductCardimg from '../../assets/images/about-banner.png'

function ProductCard() {
  return (
    <div className='product-card'>
        <div className="product-image">
             <img
                src={ProductCardimg}
                alt="Decorative"
                className="decorative-image"
            />
        </div>
        <div className="product-name">
            <h3>lift</h3>
        </div>
    </div>
  )
}

export default ProductCard
