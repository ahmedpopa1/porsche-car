import React from "react";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import './style.css';

const About = () => {
  const comingsoon =()=>{
    alert("coming soon")
  }
  return (
    <div className="about">
      <div className="about-section-container">
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading"></p>
          <h1 className="primary-heading">Cars Booking And Salling</h1>
          <p className="primary-textt">
            To popular belief, Lorem Ipsum is not simply random text. It has
            roots in a piece of classical literature. Lorem Ipsum is not simply
            random text. It has roots in a piece of classical literature
          </p>
          <p className="primary-textt">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button" onClick={comingsoon}>
              <BsFillPlayCircleFill /> Watch Video!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
