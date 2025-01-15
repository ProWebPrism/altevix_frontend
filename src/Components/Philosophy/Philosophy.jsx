import React from 'react'
import './Philosophy.css'
import img from '../../assets/images/contactsection.png'

const Philosophy = ({ description, image }) => {
  return (
        <div className="who-we-are">
          <div className="wrapper">
            <div className="who-we-are-content">
              <div className="left-side">
                <h3>
                  OUR <span>PHILOSOPHY</span>
                </h3>
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
  )
}

export default Philosophy