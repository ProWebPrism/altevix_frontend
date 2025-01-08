import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Contact from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'
import AboutBanner from '../Components/AboutBanner/AboutBanner'
import WhoWeR from '../Components/WhoWeR/WhoWeR'
import Journey from '../Components/Journey/Journey'
import Philosophy from '../Components/Philosophy/Philosophy'

const AboutPage = () => {
  return (
    <>
   <Navbar/>
   <AboutBanner/>
   <WhoWeR/>
   <Journey/>
   <Philosophy/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default AboutPage