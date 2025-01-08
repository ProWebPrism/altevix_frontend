import React from 'react'
import img from '../../assets/images/journey.png'
import './Journey.css'

const Journey = () => {
  return (
    <div className='journey-section'>
      <div className="wrapper">
        <div className="journey-content">
          <div className="left">
            <div className="bground">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="right">
            <h3>OUR <span >JOURNEY</span></h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book
               <br/><br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
             industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Journey