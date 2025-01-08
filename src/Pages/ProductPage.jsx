import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AboutBanner from '../Components/AboutBanner/AboutBanner'
import ProductDescription from '../Components/ProductDescription/ProductDescription'
import Contact from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'



const ProductPage = () => {
    return (
      <>
     <Navbar/>
     <AboutBanner/>
     <ProductDescription/>
     <Contact/>
     <Footer/>
      </>
    )
  }
  
  export default ProductPage