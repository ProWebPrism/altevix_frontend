import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ProductInnerBanner from '../Components/ProductInnerBanner/ProductInnerBanner'
import Contact from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'
import BreadCrumps from '../Components/BreadCrumps/BreadCrumps'
import ProductDetailImage from '../assets/images/symbio.jpg'
import liftblueprint1 from '../assets/images/bluprint-1.png'
import liftblueprint2 from '../assets/images/bluprint-2.png'
import TechnicalBox from '../Components/TechnicalBox/TechnicalBox'
import CustomizedBox from '../Components/CustomizedBox/CustomizedBox'
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
                  <h3>Versatile</h3>
                  <p>Rest assured. Our high efficiency permanent magnet machines meet our legendary engineering and quality control standards. You can count on smooth reliable performance and great passenger experiences for years to come.</p>
                </div>
                <div className="product-detail-card">
                  <h3>Flexibility / Adaptability</h3>
                  <p>Rest assured. Our high efficiency permanent magnet machines meet our legendary engineering and quality control standards. You can count on smooth reliable performance and great passenger experiences for years to come.</p>
                </div>
                <div className="product-detail-card">
                  <h3>Comfort</h3>
                  <p>Rest assured. Our high efficiency permanent magnet machines meet our legendary engineering and quality control standards. You can count on smooth reliable performance and great passenger experiences for years to come.</p>
                </div>
                <div className="product-detail-card">
                  <h3>Great durability</h3>
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
            <img
                  src={liftblueprint1}
                  alt="Decorative"
                  className="decorative-image"
                />
            </div>
            <div className="product-appliction-col2">
            <img
                  src={liftblueprint2}
                  alt="Decorative"
                  className="decorative-image"
                />
            </div>
            <div className="product-appliction-col3">
                <div className="appliction-list">
                  <h3>Applictions</h3>
                  <ol>
                    <li>Residential building</li>
                    <li>Shopping centres</li>
                    <li>Hotels</li>
                    <li>Hospitals</li>
                    <li>Offices</li>
                    <li>Bedlifts</li>
                    <li>High rise installations</li>
                  </ol>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="techincal-specialty">
        <div className="wrapper">
          <h2>Technical Features</h2>
          <div className="techincalspecialties-row">
              <TechnicalBox/>
              <TechnicalBox/>
              <TechnicalBox/>
              <TechnicalBox/>
              <TechnicalBox/>
          </div>
        </div>
      </div>
      <div className="customazied-sec">
        <div className="wrapper">
          <div className="customazied-head">
            <h2>Customised solutions</h2>
          </div>
          <div className="customazied-products">
            <CustomizedBox/>
            <CustomizedBox/>
            <CustomizedBox/>
            <CustomizedBox/>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default ProductInner