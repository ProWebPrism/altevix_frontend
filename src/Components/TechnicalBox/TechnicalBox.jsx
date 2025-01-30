import React from 'react'
import './TechnicalBox.css'


function TechnicalBox({ title, feature }) {
  return (
    <div className='tech-box'>
        <h3>{title}</h3>
        <p>{feature}</p>
    </div>
  )
}

export default TechnicalBox