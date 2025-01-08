import React from 'react';
import './WhoWeR.css';
import img from '../../assets/images/contactsection.png'

const WhoWeR = () => {
  return (
    <div className="who-we-are">
      <div className="wrapper">
        <div className="who-we-are-content">
          <div className="left-side">
            <h3>
              WHO <span>WE ARE</span>
            </h3>
            <h5>We are a reference company in the lifting sector</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book Lorem Ipsum <br/> <br />is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="right-side">
            <div className="background">
              <img
                src={img}
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
