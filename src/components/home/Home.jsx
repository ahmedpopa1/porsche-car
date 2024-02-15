import React from "react";
import { FiArrowRight } from "react-icons/fi";
import './style.css';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">Porsche Is Life...</h1>
          <p className="primary-text">
            Porsche's are the greatest production sports car in the world,
            Because of their manufacturing and production methods, High
            performance and sleek design.
          </p>
          <button className="secondary-button">
            Ride Now! <FiArrowRight /> Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
