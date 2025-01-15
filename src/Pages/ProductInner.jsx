import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ProductInnerBanner from '../Components/ProductInnerBanner/ProductInnerBanner'
import Contact from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'
import BreadCrumps from '../Components/BreadCrumps/BreadCrumps'
import ProductDetailImage from '../assets/images/symbio.jpg'
import './ProductInner.css'

const ProductInner = () => {
  return (
    <div>
      <Navbar />
      <ProductInnerBanner />
      <BreadCrumps />
      <div className="product-inner-des">
        <div className="wrapper">
          <h3>Symbio</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
      </div>
      <div className="product-detaling">
        <div className="wrapper">
          <div className="product-detail-row">
            <div className="product-detail-col1">
              <h2>Advantages</h2>
              <div className="product-detail-points">
                <div className="product-detail-card">
                  <h3>High efficiency machine</h3>
                  <p>Rest assured. Our high efficiency permanent magnet machines meet our legendary engineering and quality control standards. You can count on smooth reliable performance and great passenger experiences for years to come.</p>
                </div>
                <div className="product-detail-card">
                  <h3>High efficiency machine</h3>
                  <p>Rest assured. Our high efficiency permanent magnet machines meet our legendary engineering and quality control standards. You can count on smooth reliable performance and great passenger experiences for years to come.</p>
                </div>
                <div className="product-detail-card">
                  <h3>High efficiency machine</h3>
                  <p>Rest assured. Our high efficiency permanent magnet machines meet our legendary engineering and quality control standards. You can count on smooth reliable performance and great passenger experiences for years to come.</p>
                </div>
                <div className="product-detail-card">
                  <h3>High efficiency machine</h3>
                  <p>Rest assured. Our high efficiency permanent magnet machines meet our legendary engineering and quality control standards. You can count on smooth reliable performance and great passenger experiences for years to come.</p>
                </div>
              </div>
            </div>
            <div className="product-detail-col2">
              <div className="product-detail-image">
                <img
                  src={ProductDetailImage}
                  alt="Decorative"
                  className="decorative-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-Applications">
        <div className="wrapper">
          <div className="product-appliction-wrapp">
            <div className="product-appliction-col1">
              
            </div>
            <div className="product-appliction-col2">
              
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default ProductInner