import React from 'react'
import './RealtedProductBox.css'
import subproduct from '../../assets/images/subproduct.jpg'


function RealtedProductBox() {
  return (
    <div className='related-card'> 
        <div className="related-product-image">
            <img
                src={subproduct}
                alt="Decorative"
                className="decorative-image"
            />
        </div>
        <div className="related-product-card-content">
            <h3>SWEEP EGARD 36 ELEM.174 BEAMS+POWER SUP</h3>
            <p>200410115</p>
        </div>
    </div>
  )
}

export default RealtedProductBox