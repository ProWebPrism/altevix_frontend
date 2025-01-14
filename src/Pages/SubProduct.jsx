import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Contact from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'
import BreadCrumps from '../Components/BreadCrumps/BreadCrumps'
import AboutBanner from '../Components/AboutBanner/AboutBanner'
import RealtedProductBox from '../Components/RealtedProductBox/RealtedProductBox'
import subproduct from '../assets/images/subproduct.jpg'
import wishlist from '../assets/images/wishlist.svg'
import './SubProduct.css'


const SubProduct = () => {
    return (
        <div>
            <Navbar />
            <AboutBanner />
            <BreadCrumps />
            <div className="subproduct-wrap">
                <div className="wrapper">
                    <div className="subproduct-sec">
                        <div className="subproduct-left">
                            <img
                                src={subproduct}
                                alt="Decorative"
                                className="decorative-image"
                            />
                        </div>
                        <div className="subproduct-right">
                            <div className="subproduct-head">
                                <p>REF:200410040</p>
                                <h3>BARRIER CED. CEGARD MINI SY 2000-16 +KIT</h3>
                            </div>
                            <div className="sub-wishlist">
                                <p><span>
                                <img
                                src={wishlist}
                                alt="Decorative"
                                className="wish-image"
                                />
                                </span>Add to wishlist</p>
                            </div>
                            <div className="sub-description">
                                <h3>Description</h3>
                                <p>BARRIER CEDES CEGARD MINI SY 2000-16 - 10-30 VDC + SUPPORT KIT</p>
                            </div>
                            <div className="sub-product-detail">
                                <h3>Product Details</h3>
                                <ul>
                                    <li><span>SUPPLIER REF</span>108903</li>
                                    <li><span>MANUFACTURER</span>CEDES</li>
                                    <li><span>MODEL</span>CEGARD MINI SY 2000-16 + KIT</li>
                                </ul>
                            </div>
                            <div className="sub-product-attachments">
                                <h3>Attachments</h3>
                                <div className="sub-product-attachments-link">
                                    <p>Plano_200410040</p>
                                    <a href="#">Download</a>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>  
            </div>
            <div className="related-product-wrap">
                <div className="wrapper">
                    <div className="related-product-head">
                        <h3>Related products</h3>
                    </div>
                    <div className="related-product-cards">
                        <RealtedProductBox/>
                        <RealtedProductBox/>
                        <RealtedProductBox/>
                        <RealtedProductBox/>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}
export default SubProduct