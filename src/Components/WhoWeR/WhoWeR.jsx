import React from 'react';
import './WhoWeR.css';
import img from '../../assets/images/contactsection.png'

const WhoWeR = ({ subheading, description, image }) => {
  return (
    <div className="who-we-are">
      <div className="wrapper">
        <div className="who-we-are-content">
          <div className="left-side">
            <h3>
              WHO <span>WE ARE</span>
            </h3>
            <h5>{subheading}</h5>
            <p>
              {description}
            </p>
          </div>
          <div className="right-side">
            <div className="background">
              <img
                src={`http://localhost:5000${image}`}
                alt="Decorative"
                className="decorative-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeR;
