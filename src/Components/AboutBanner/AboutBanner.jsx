import React from 'react';
import './AboutBanner.css';
import img from '../../assets/images/about-banner.png' 

const AboutBanner = ({ mainBanner }) => {
  return (
    <div className='about-banner'>
        <img 
          src={`http://localhost:5000${mainBanner}`}
          alt='About Altivex' 
          className='about-banner-img'
        />
        <div className="wrapper">
            <div className="about-content">
            <h1>About Altivex</h1>
            </div>
        </div>
    </div>
  )
}

export default AboutBanner;
