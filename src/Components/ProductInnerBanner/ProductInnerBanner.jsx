import React from 'react'
import './ProductInnerBanner.css'

function ProductInnerBanner({ name, category }) {
  return (
    <div className='ProductBanner-sec'>
        <div className="wrapper">
            <div className="product-inner-content">
                <h1>{name}</h1>
                <h5>{category.name}</h5>
            </div>
        </div>
    </div>
  )
}

export default ProductInnerBanner