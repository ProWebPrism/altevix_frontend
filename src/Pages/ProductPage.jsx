import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ProductDescription from '../Components/ProductDescription/ProductDescription'
import Contact from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'
import ProductCard from '../Components/ProductCard/ProductCard'
import ComplementaryCard from '../Components/ComplementaryCard/ComplementaryCard'
import apiClient from '../API/api'
import './ProductPage.css'
import PasssengerElevators from '../Components/PassengerElevator/PassengerElevators'
import ProductBanner from '../Components/ProductBanner/ProductBanner'

const ProductPage = () => {
  const [productPageData, setProductPageData] = useState(null)
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
  return (
    <>
      {productPageData ? (
        <>
          <Navbar />
          <ProductBanner mainBanner={productPageData.banner.image} />
          <ProductDescription description={productPageData.banner.description } subheading={productPageData.banner.subheading} />
          <PasssengerElevators title={productPageData.sliderSection.mainTitle } slides={productPageData.sliderSection.cards} />
          <div className="productcatagoery">
            <div className="wrapper">
              <div className="productcatagoery-warpper">
                <ProductCard card={productPageData.cardSection.cards[0]} />
                <ProductCard card={productPageData.cardSection.cards[1]}/>
                <ProductCard card={productPageData.cardSection.cards[2]}/>
                <ProductCard card={productPageData.cardSection.cards[3]}/>
              </div>
            </div>
          </div>
          <div className="Complementarycatagoery">
            <div className="wrapper">
              <h2 className="section-tittle">COMPLEMENTARY</h2>
              <div className="Complementarycatagoery-wrapper">
                <ComplementaryCard card={productPageData.complimentary.cards[0]}/>
                <ComplementaryCard card={productPageData.complimentary.cards[1]}/>
              </div>
            </div>
          </div>
          <Contact />
          <Footer />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductPage