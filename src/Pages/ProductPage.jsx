import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AboutBanner from '../Components/AboutBanner/AboutBanner'
import ProductDescription from '../Components/ProductDescription/ProductDescription'
import Contact from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'
import ProductCard from '../Components/ProductCard/ProductCard'
import ComplementaryCard from '../Components/ComplementaryCard/ComplementaryCard'
import './ProductPage.css'

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <AboutBanner />
      <ProductDescription />
      <div className="productcatagoery">
        <div className="wrapper">
          <div className="productcatagoery-warpper">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
      <div className="Complementarycatagoery">
        <div className="wrapper">
        <h2 className='section-tittle'>COMPLEMENTARY</h2>
          <div className="Complementarycatagoery-wrapper">
            <ComplementaryCard/>
            <ComplementaryCard/>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default ProductPage