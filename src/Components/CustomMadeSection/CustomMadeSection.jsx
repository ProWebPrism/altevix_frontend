import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiClient from '../../API/api'
import custom from '../../assets/images/custom.jpg'
import './CustomMadeSection.css'

const CustomMadeSection = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const navigate = useNavigate()
  
    useEffect(() => {
          const fetchCustom = async () => {
              try {
                  const response = await apiClient.get('/section/custom')
                  if(response) {
                      setDescription(response.data.description)
                      setImage(response.data.image)
                  }
              } catch (error) {
                  console.error(error);
                  
              }
          }
          fetchCustom()
      },[])
    return (
        <div className='custom-made-section'>
            <div className="wrapper">
                <div className="section-content">
                <div className="left-side">
                    <img src={`http://localhost:5000/${image}`} alt="" />
                </div>
                <div className="right-side">
                    <h3>SOLUTIONS <span className='highlight'>CUSTOM MADE</span></h3>
                    <p>{description}</p>
                    <button className='about-btn-customemade' onClick={() => navigate('/about-us')}>About us</button>
                </div>

                </div>


            </div>
        </div>
    )
}

export default CustomMadeSection