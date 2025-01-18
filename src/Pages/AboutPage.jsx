import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Contact from '../Components/ContactSection/ContactSection';
import Footer from '../Components/Footer/Footer';
import AboutBanner from '../Components/AboutBanner/AboutBanner';
import WhoWeR from '../Components/WhoWeR/WhoWeR';
import Journey from '../Components/Journey/Journey';
import Philosophy from '../Components/Philosophy/Philosophy';
import apiClient from '../API/api';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await apiClient.get('/about');
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;  // Display a loading state while data is being fetched
  }

  return (
    <>
      <Navbar />
      <AboutBanner mainBanner={aboutData.mainBanner} />
      <WhoWeR
        subheading={aboutData.firstSection.subheading}
        description={aboutData.firstSection.description}
        image={aboutData.firstSection.image}
      />
      <Journey
        description={aboutData.secondSection.description}
        image={aboutData.secondSection.image}
      />
      <Philosophy
        description={aboutData.thirdSection.description}
        image={aboutData.thirdSection.image}
      />
      <Contact />
      <Footer />
    </>
  );
};

export default AboutPage;
