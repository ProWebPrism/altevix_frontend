import React from 'react'
import "./ComplementaryCard.css"
import ComplementaryCardimg from '../../assets/images/about-banner.png'

function ComplementaryCard({ card }) {
  return (
    <div className='Complementary-card'>
      <div className="Complementary-image">
        <img
          src={`http://localhost:5000/${card.image}`}
          alt="Decorative"
          className="decorative-image"
        />
        <div className="Complementary-name">
          <h3>{card.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default ComplementaryCard