import React from 'react'
import settings from '../../assets/images/Group 18.png'
import './ValueProposition.css'

const ValuePropositon = () => {
  return (
    <div className="proposition-container">
      <div className="wrapper">
        <div className="headers">
          <h2>ALWAYS INNOVATING:</h2>
          <h2 className='highlight'>OUR VALUE PROPOSITION</h2>
          <p>We are the strategic partner of professionals in the sector worldwide because we offer the following advantages:</p>
        </div>
        <div className="cards">
          <div className="card">
              <img src={settings} alt="Settings Icon" />
              <p>High production capacity</p>
            </div>


          <div className="card">
              <img src={settings} alt="Settings Icon" />
              <p>High production capacity</p>
            </div>

          <div className="card">
              <img src={settings} alt="Settings Icon" />
              <p>High production capacity</p>
            </div>

          <div className="card">
              <img src={settings} alt="Settings Icon" />
              <p>High production capacity</p>
            </div>

          <div className="card">
              <img src={settings} alt="Settings Icon" />
              <p>High production capacity</p>
            </div>

          <div className="card">
              <img src={settings} alt="Settings Icon" />
              <p>High production capacity</p>
            </div>

          <div className="card">
              <img src={settings} alt="Settings Icon" />
              <p>High production capacity</p>
            </div>

          <div className="card">
              <img src={settings} alt="Settings Icon" />
              <p>High production capacity</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default ValuePropositon