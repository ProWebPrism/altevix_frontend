import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
import AboutSection from '../Components/AboutDescription/AboutSection'
import OurElevators from '../Components/Elevators/Elevators'
import ValuePropositon from '../Components/ValuePropositon/ValueProposition'
import CustomMadeSection from '../Components/CustomMadeSection/CustomMadeSection'
import StoreSection from '../Components/StoreSection/StoreSection'
import BrowsSection from '../Components/BrowseSection/BrowseSection'
import ContactSection from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <OurElevators/>
        <ValuePropositon/>
        <CustomMadeSection/>
        <StoreSection/>
        <BrowsSection/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Homepage