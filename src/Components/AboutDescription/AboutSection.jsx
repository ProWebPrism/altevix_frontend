import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="wrapper">
        <div className="about-content">
          {/* Left Side: Brand Name */}
          <div className="left-side">
            <h1 className="brand-name">Altivex</h1>
          </div>

          {/* Right Side: Text and Button */}
          <div className="right-side">
            <p className="tagline">
              We are the world's leading company for elevator and escalator manufacturing, installation, and service.
            </p>
            <p className="description">
            We move 2.3 billion people a day and we maintain ~2.3 million customer units worldwide - the world’s largest portfolio. We can be found in many of the world’s most recognizable buildings as well as the busiest transportation hubs and retail centers. We are everywhere people are on the move.recognizable buildings as well as the busiest transportation hubs and retail centers. We are everywhere people are on the move.recognizable buildings as well as the busiest transportation hubs and retail centers. We are everywhere people are on the move.
            </p>
            <button className="about-btn">About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
