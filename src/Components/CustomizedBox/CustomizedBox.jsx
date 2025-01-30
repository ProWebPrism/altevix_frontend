import React from 'react';
import './CustomizedBox.css';

function CustomizedBox({ image, title, subheading, features }) {
  return (
    <div className="customizedbox">
      <div className="customized-image">
        <img
          src={image}
          alt={title}
          className="decorative-image"
        />
      </div>
      <div className="customized-content">
        <div className="customized-head">
          <h3>{title}</h3>
          <h4>{subheading}</h4>
        </div>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomizedBox;
