import React, { useEffect, useState } from 'react'
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
import GoogleMeet from '../Components/GoogleMeet/GoogleMeet'
import './ProductInner.css'
import { useParams } from 'react-router-dom'
import apiClient from '../API/api'



const ProductInner = () => {
  const [productImage, setProductImage] = useState(null)
  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [advantages, setAdvantages] = useState()
  const [applications, setApplications] = useState([])
  const [technicalFeatures, setTechnicalFeatures] = useState([])
  const [solutions, setSolutions] = useState(null)
  const [bluePrintImages, setBluePrintImages] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    // Fetch the existing product data and fill in the form
    const fetchProductData = async () => {
      try {
        const response = await apiClient.get(`/product/${id}`);
        const product = response.data.product;
        setProductImage(product.productImage)
        setProductName(product.name);
        setCategory(product.category);
        setDescription(product.description);
        setAdvantages(product.advantages);
        setApplications(product.applications);
        setTechnicalFeatures(product.technicalFeatures);
        setSolutions(product.customisedSolutionCards);
        setBluePrintImages(product.blueprintImages)
      } catch (error) {
        console.error('Error fetching product data:', error);
        alert('There was an error fetching the product data.');
      }
    };

    fetchProductData();
  }, [id]);
  const handleAddToCart = async (productId) => {
    const quantity = 1
    try {
      const response = await apiClient.post('/cart/add', { quantity, productId})
      alert(response.data.message)
    } catch (error) {
      alert('Failed adding item to cart')
      console.error(error);
      
    }
  }
  return (
    <div>
      <Navbar />
      <ProductInnerBanner name={productName} category={category} />
      <BreadCrumps />
      <div className="product-inner-des">
        <div className="wrapper">
          <h3>{productName}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="product-detaling">
        <div className="wrapper">
          <div className="product-detail-row">
            <div className="product-detail-col1">
              <h2>Advantages</h2>
              <div className="product-detail-points">{advantages?.map((advantage, index) => (
                <div className="product-detail-card" key={index}>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              ))}
              </div>
            </div>
            <div className="product-detail-col2">
              <div className="product-detail-image">
                <img
                  src={`http://localhost:5000/${productImage}`}
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
            {/* Dynamically render blueprint images */}
            { bluePrintImages && bluePrintImages.map((image, index) => (
              <div className={`product-appliction-col${index + 1}`} key={index}>
                <img
                  src={`http://localhost:5000/${image}`} // Adjust path as needed
                  alt={`Blueprint ${index + 1}`}
                  className="decorative-image"
                />
              </div>
            ))}

            <div className="product-appliction-col">
              <div className="appliction-list">
                <h3>Applications</h3>
                <ol>
                  {/* Dynamically render applications */}
                  {applications?.map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
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
            {technicalFeatures?.map((techFeature, index) => (
              <TechnicalBox
                key={index}
                title={techFeature.title}
                feature={techFeature.feature}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="customazied-sec">
        <div className="wrapper">
          <div className="customazied-head">
            <h2>Customised Solutions</h2>
          </div>
          <div className="customazied-products">
            {solutions?.map((solution, index) => (
              <CustomizedBox
                key={index}
                image={`http://localhost:5000/${solution.image}`} // Ensure the image URL is correctly formatted
                title={solution.title}
                subheading={solution.subheading}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="add-to-cart">
        <button onClick={()=>handleAddToCart(id)}>Add item to cart</button>
      </div>

      <Contact />
      <GoogleMeet/>
      <Footer />
    </div>
  )
}

export default ProductInner