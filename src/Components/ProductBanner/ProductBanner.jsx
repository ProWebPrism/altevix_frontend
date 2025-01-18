import React from 'react';
import './ProductBanner.css';

const ProductBanner = ({ mainBanner }) => {
  return (
    <div className='product-banner'>
        <img 
          src={`http://localhost:5000/${mainBanner}`}
          alt='Altivex' 
          className='product-banner-img'
        />
        <div className="wrapper">
            <div className="product-content">
            <h1>Products</h1>
            </div>
        </div>
    </div>
  )
}

export default ProductBanner;
