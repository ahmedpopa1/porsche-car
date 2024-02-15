import React from "react";
import lol1 from "./../../Assets/lol1.png";
import lol2 from "./../../Assets/lol2.png";
import lol3 from "./../../Assets/lol3.png";
import './style.css'

const Work = () => {
  const workInfoData = [
    {
      image: lol1,
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: lol2,
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: lol3,
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading"></p>
          <h1 className="primary-heading">How It Works</h1>
          <p className="primary-textt">
             Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Work;
