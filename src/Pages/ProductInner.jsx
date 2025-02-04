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
import RealtedProductBox from '../Components/RealtedProductBox/RealtedProductBox'
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const { id } = useParams()

  const fetchAuthUrl = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/google/auth-url"); // Update this URL if backend runs elsewhere
        const data = await response.json();
        window.location.href = data.authUrl; // Redirects user to Google OAuth
    } catch (error) {
        console.error("Error fetching auth URL:", error);
    }
};
const handleScheduleMeeting = async () => {
  try {
      const eventDetails = {
          summary: "Meeting Scheduled via Altivex",
          startTime: selectedDate.toISOString(),
          endTime: new Date(selectedDate.getTime() + 60 * 60 * 1000).toISOString(), // Add 1 hour
      };

      const response = await fetch("http://localhost:5000/api/google/create-event", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              // Add authentication headers if needed, e.g., tokens
          },
          body: JSON.stringify(eventDetails),
      });

      const result = await response.json();

      if (response.ok) {
          alert("Meeting scheduled successfully!");
          console.log("Event created:", result.event);
      } else {
          alert("Failed to schedule the meeting.");
          console.error("Error:", result);
      }
  } catch (error) {
      console.error("Error scheduling meeting:", error);
  } finally {
      setModalIsOpen(false);
  }
};

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
      <div className="product-inner-des wrapper">
        <div className="">
          <h3>{productName}</h3>
          <p>{description}</p>
        </div>
        <div className="add-to-cart">
        <button onClick={fetchAuthUrl}>Schedule meeting</button>
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
      <RealtedProductBox category={category}/>


      <Contact />
      <GoogleMeet/>
      <Footer />
                  <Modal
                          isOpen={modalIsOpen}
                          onRequestClose={() => setModalIsOpen(false)}
                          className="modal"
                          overlayClassName="modal-overlay"
                        >
                          <h2 className="modal-title">Schedule a Meeting for order</h2>
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            showTimeSelect
                            dateFormat="Pp"
                            className="date-picker"
                          />
                          <div className="modal-actions">
                            <button onClick={handleScheduleMeeting} className="modal-button">
                              Schedule Meeting
                            </button>
                            <button onClick={() => setModalIsOpen(false)} className="modal-close-button">
                              Close
                            </button>
                          </div>
                        </Modal>
    </div>
  )
}

export default ProductInner