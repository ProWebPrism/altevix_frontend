import React from 'react';
import img from '../../assets/images/about-banner.png' 

const ProductListBanner = ({ mainBanner, title }) => {
  return (
    <div className='about-banner'>
        <img 
          src={mainBanner}
          alt='About Altivex' 
          className='about-banner-img'
        />
        <div className="wrapper">
            <div className="about-content">
            <h1>{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default ProductListBanner;
