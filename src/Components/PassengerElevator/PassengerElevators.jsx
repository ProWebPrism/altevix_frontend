import { useState, useEffect } from 'react';
import './PassengerElevators.css';

export default function ElevatorSlider({ title, slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const slides = [
  //   { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20160822-u44UHutuvM9nBMssFGv6ClRemjXESW.png', caption: 'Altivex Elevator 1' },
  //   { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20160900-9m17Ek7w4nFWJm0zU4b0o2sCUx-E1Jml.png', caption: 'Altivex Elevator 2' },
  //   { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20160922-K0tA7ZLXftJvHkKAdctmX1sQwwccTkbJ.png', caption: 'Altivex Elevator 3' },
  //   { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20160922-K0tA7ZLXftJvHkKAdctmX1sQwwccTkbJ.png', caption: 'Altivex Elevator 4' },
  // ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Logic for selecting content for the 3 cards
  const getCardContent = (index) => {
    const slideIndex = (currentSlide + index) % slides.length;
    return slides[slideIndex];
  };

  return (
    <div className="slider-container">
      {/* Red Card */}
      <div className="first-slide">
        <h2>{title}</h2>
      </div>

      {/* Three Fixed Cards */}
      <div className="content-cards">
        {[0, 1, 2].map((index) => {
          const content = getCardContent(index);
          return (
            <div key={index} className="content-card">
              <img src={`http://localhost:5000/${content.image}`} alt={`Slide ${index + 1}`} className="card-image" />
              <div className="card-caption">{content.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
