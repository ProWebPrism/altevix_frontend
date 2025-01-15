import React from 'react'
import img from '../../assets/images/journey.png'
import './Journey.css'

const Journey = ({ description, image }) => {
  return (
    <div className='journey-section'>
      <div className="wrapper">
        <div className="journey-content">
          <div className="left">
            <div className="bground">
              <img src={`http://localhost:5000${image}`} alt="" />
            </div>
          </div>
          <div className="right">
            <h3>OUR <span >JOURNEY</span></h3>
            <p>{description}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Journey