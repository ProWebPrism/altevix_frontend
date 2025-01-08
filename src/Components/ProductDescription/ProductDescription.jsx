import React from 'react';
import "./ProductDescription.css";
import Dropdown from '../Dropdown/DropDown';

function ProductDescription() {
  return (
    <section className='product-des'>
        <div className="wrapper">
            <div className="product-des-head">
                <h2 className='section-tittle'><span class='highlight'>DEVELOPMENT</span> OF PRODUCT</h2>
                <h3>We find the best solution anywhere</h3>
            </div>
            <div className="product-des-para">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
        </div>
        <div className="filter-sec">
            <div className="wrapper">
                <p>Find the product that best suits your needs:</p>
                <div className="product-filter">
                <Dropdown/>
                <Dropdown/>
                <Dropdown/>
                <Dropdown/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDescription
