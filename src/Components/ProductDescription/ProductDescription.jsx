import React from 'react';
import "./ProductDescription.css";
import Dropdown from '../Dropdown/DropDown';

function ProductDescription({ description, subheading }) {
    return (
        <section className='product-des'>
            <div className="wrapper">
                <div className="product-des-head">
                    <h2 className='section-tittle'><span class='highlight'>DEVELOPMENT</span> OF PRODUCT</h2>
                    <h3>{subheading}</h3>
                </div>
                <div className="product-des-para">
                    <p>{description}</p>
                </div>
            </div>
            <div className="filter-sec">
                <div className="wrapper">
                    <p>Find the product that best suits your needs:</p>
                    <div className="product-filter-wrapp">
                        <div className="product-filter">
                            <Dropdown />
                            <Dropdown />
                            <Dropdown />
                            <Dropdown />
                        </div>
                        <button class="submit-btn" fdprocessedid="8sr2j8">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDescription
