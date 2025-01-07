import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import banner from '../../assets/images/banner.png'

const slides = [
  {
    title: "Altivex-Elavte Your Business",
    subtitle: "Adaptability, experience, service and technology",
    backgroundImage: banner,
  },
  {
    title: "Transform Your Operations",
    subtitle: "Innovative solutions for modern businesses",
    backgroundImage: banner,
  },
  {
    title: "Scale With Confidence",
    subtitle: "Enterprise-grade technology solutions",
    backgroundImage: banner,
  },
  {
    title: "Future-Proof Solutions",
    subtitle: "Stay ahead of the competition",
    backgroundImage: banner,
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        >
          <div className={styles.overlay} />
          <div className="wrapper">
          <div className={styles.content}>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            <button className={styles.button}>Contact us</button>
          </div>

          </div>

        </div>
      ))}

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