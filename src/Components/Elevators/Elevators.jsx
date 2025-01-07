import React from "react";
import "./Elevators.css";
import elevator from '../../assets/images/elevators.jpg'

const OurElevators = () => {
  const elevators = [
    {
      title: "Passenger Elevators",
      description:
        "As a leading elevator company, we've engineered our passenger elevators for various building applications, including residential, commercial, and public transit.",
      image: elevator, 
    },
    {
      title: "Car Lift",
      description:
        "Our car lifts are designed to meet diverse parking needs, offering exceptional efficiency and reliability for commercial and residential use.",
      image: elevator,
    },
    {
      title: "Single-family Homes",
      description:
        "Elevators for single-family homes, combining style and practicality for a convenient living experience.",
      image: elevator,
    },
    {
      title: "Stair Lift",
      description:
        "Our stair lifts ensure accessibility and safety, engineered for homes and public spaces alike.",
      image: elevator,
    },
  ];

  return (
    <section className="our-elevators">
      <div className="wrapper">
        <h2 className="section-title">
          OUR <span className="highlight">ELEVATORS</span> 
        </h2>
        <p className="section-description">
          Always innovating, our wide range of elevators covers the most diverse needs, so that our clients can adapt to an increasingly changing and competitive world.
        </p>

        <div className="elevator-grid">
          {elevators.map((elevator, index) => (
            <div className="elevator-card" key={index}>
              <img
                src={elevator.image}
                alt={elevator.title}
                className="elevator-image"
              />
              <h3 className="elevator-title">{elevator.title}</h3>
              <p className="elevator-description">{elevator.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurElevators;
