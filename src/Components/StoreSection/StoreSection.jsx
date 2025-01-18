import React, { useState, useEffect} from 'react'
import './StoreSection.css'
import apiClient from '../../API/api';

const StoreSection = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [subheading, setSubheading] = useState('')
  
    useEffect(() => {
          const fetchCustom = async () => {
              try {
                  const response = await apiClient.get('/section/store')
                  if(response) {
                      setSubheading(response.data.subheading)
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
        <div className='store-section'>
            {image && <img src={`http://localhost:5000/${image}`} alt="Store Background" className="store-background" />}
            <div className="wrapper">
                <div className="inner-card">
                    <h3>
                    VISIT OUR STORE <br /> ON-LINE OF  <span className='highlight'>COMPONENTS</span>
                    </h3>
                    <p className='description-title'>{subheading}</p>
                    <p className='description'>{description}</p>
                    
                    <button>Go to store</button>
                    
                    </div>
            </div>
        </div>
    )
}

export default StoreSection