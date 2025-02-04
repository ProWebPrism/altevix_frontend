import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import apiClient from '../../API/api';
import slider from '../../assets/images/slider1.jpg'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const response = await apiClient.get('/section/herosection');
        
        setSlides(response.data.carousels || []); // handle empty slides
      } catch (error) {
        console.error('Error fetching hero section data:', error);
        alert('Failed to fetch hero section data.');
      }
    };

    fetchHeroSection();
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'up') {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    } else {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      {slides.length > 0 ? (
        slides.map((slide, index) => {
          // Build the image URL dynamically
          const imageUrl = slide.image ? `http://localhost:5000${slide.image}` : '';

          return (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}>
              <img src={imageUrl} alt={slide.title} className={styles.slideImage} />
              <div className={styles.overlay} />
              <div className="wrapper">
                <div className={styles.content}>
                  <h1 className={styles.title}>{slide.title}</h1>
                  <p className={styles.subtitle}>{slide.description}</p>
                  <button className={styles.button}><Link to='/contact-us' className={styles.link}>Contact us</Link></button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}

      <div className={styles.pagination}>
        <div
          className={styles.paginationArrowUp}
          onClick={() => handleArrowClick('up')}
          role="button"
          aria-label="Previous slide"
        />
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationDot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
        <div
          className={styles.paginationArrowDown}
          onClick={() => handleArrowClick('down')}
          role="button"
          aria-label="Next slide"
        />
      </div>
    </div>
  );
}
