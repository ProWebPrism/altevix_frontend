import React from 'react'
import "./ComplementaryCard.css"
import ComplementaryCardimg from '../../assets/images/about-banner.png'

function ComplementaryCard() {
  return (
    <div className='Complementary-card'>
      <div className="Complementary-image">
        <img
          src={ComplementaryCardimg}
          alt="Decorative"
          className="decorative-image"
        />
        <div className="Complementary-name">
          <h3>STRUCTURES</h3>
        </div>
      </div>
    </div>
  )
}

export default ComplementaryCard