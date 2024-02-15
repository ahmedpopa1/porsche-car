import React, { useRef, useState, useEffect } from "react";
import lool1 from "./../../Assets/lool1.jpg";
import lool2 from "./../../Assets/lool2.jpg";
import lool3 from "./../../Assets/lool3.jpg";
import lool4 from "./../../Assets/lool4.jpg";
import rightArrow from "./right.png";
import leftArrow from "./left.png";
import './style.css';

const Slider = () => {
  const imageContainerRef = useRef(null);
  const images = [lool1, lool2, lool3, lool4];
  const [visibleIndexes, setVisibleIndexes] = useState([0]);

  useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft = 0;
    }
  }, [visibleIndexes]);

  const handlePrev = () => {
    let prevIndex = visibleIndexes[0] - 1;
    if (prevIndex < 0) {
      prevIndex = images.length - 1;
    }
    setVisibleIndexes([prevIndex]);
  };

  const handleNext = () => {
    let nextIndex = visibleIndexes[0] + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }
    setVisibleIndexes([nextIndex]);
  };

  return (
    <div className="slider-container">
      <div className="content">
        <div className="prev" onClick={handlePrev}>
          <img className="arrow" src={leftArrow} alt="Previous" />
        </div>
        <div className="slide-panel" ref={imageContainerRef}>
          {images.map((image, index) => (
            <img
              className="photo"
              key={index}
              src={image}
              alt={`Slide ${index}`}
              style={{
                display: visibleIndexes.includes(index) ? "block" : "none",
              }}
            />
          ))}
        </div>
        <div className="next" onClick={handleNext}>
          <img className="arrow" src={rightArrow} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
