import React from 'react'
import arrow from '../../assets/images/arrow.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BrowseSection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import ElevatorDisplay from '../Elevator2/Elevator2';


const BrowsSection = () => {
  return (
    <div className='browse-section'>
        <div className="wrapper">
          <div className="browse-content">
            <div className="top-section">
            <h3>BROWSE OUR <span>PRODUCTS</span></h3>
            <Link to='/products'>
              Learn more 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="arrow-icon"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>

            </div>
            <ElevatorDisplay/>

          </div>
        </div>
        </div>
  )
}

export default BrowsSection