import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import Contact from '../Components/ContactSection/ContactSection';
import Footer from '../Components/Footer/Footer';
import ProductCard from '../Components/ProductCard/ProductCard';
import ComplementaryCard from '../Components/ComplementaryCard/ComplementaryCard';
import apiClient from '../API/api';
import './ProductPage.css';
import PasssengerElevators from '../Components/PassengerElevator/PassengerElevators';
import ProductBanner from '../Components/ProductBanner/ProductBanner';
import GoogleMeet from '../Components/GoogleMeet/GoogleMeet';

const ProductPage = () => {
  const [productPageData, setProductPageData] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProductPageData = async () => {
      try {
        const response = await apiClient.get('/product-page');
        setProductPageData(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchProductPageData();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await apiClient.get('/category'); // Replace with your endpoint
      
      setCategories(response.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  return (
    <>
      {productPageData && categories ? (
        <>
          <Navbar />
          <ProductBanner mainBanner={productPageData.banner.image} />
          <ProductDescription description={productPageData.banner.description} subheading={productPageData.banner.subheading} />
          <PasssengerElevators title={productPageData.sliderSection.mainTitle} slides={productPageData.sliderSection.cards} />
          <div className="productcategory">
            <div className="wrapper">
              <div className="productcategory-wrapper">
                {categories.map((category, index) => (
                  <ProductCard
                    key={index}
                    category={category}

                  />
                ))}
              </div>
            </div>
          </div>
          <div className="Complementarycategory">
            <div className="wrapper">
              <h2 className="section-title">COMPLEMENTARY</h2>
              <div className="Complementarycategory-wrapper">
                <ComplementaryCard card={productPageData.complimentary.cards[0]} />
                <ComplementaryCard card={productPageData.complimentary.cards[1]} />
              </div>
            </div>
          </div>
          <Contact />
          <GoogleMeet />
          <Footer />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductPage;
