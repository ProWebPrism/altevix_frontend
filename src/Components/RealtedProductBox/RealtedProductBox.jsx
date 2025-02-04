import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './RealtedProductBox.css'
import apiClient from '../../API/api'

function RealtedProductBox({ category }) {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get(`/product/category/${category._id}`)
        console.log(response.data)
        setProducts(response.data.products)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProducts()
  }, [category])  
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  const handleCardClick = (productId) => {
    scrollToTop(); // Scroll to top before navigating
    navigate(`/productInner/${productId}`); // Navigate to the product's inner page
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='related-section'>
      <h2 className='related-h2'>Related <span>Products</span></h2>
      <div className='related'>
        <Slider {...sliderSettings}>
          {products?.map((product, index) => (
            <div key={index} className="slide-item">
              <div className="related-card" onClick={() => handleCardClick(product._id)}>
                <div className="related-product-image">
                  <img
                    src={`http://localhost:5000/${product.productImage}`}
                    alt={product.name}
                    className="decorative-image"
                  />
                </div>
                <div className="related-product-card-content">
                  <h3>{product.name}</h3>
                  <p>{product.productCode}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default RealtedProductBox