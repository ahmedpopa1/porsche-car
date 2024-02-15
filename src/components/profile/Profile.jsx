/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import start from "./start.png";
import './style.css';
import Navbar from "../nav/Navbar";

const Profile = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState(() => {
    const storedImages = localStorage.getItem("userImages");
    return storedImages ? JSON.parse(storedImages) : [start];
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
      const newPreviews = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviews(newPreviews);
    }
  };

  useEffect(() => {
    localStorage.setItem("userImages", JSON.stringify(previews));
  }, [previews]);

  const renderImages = () => {
    return previews.map((pic, index) => {
      return <img  key={index} src={pic} alt="" />;
    });
  };

  return (
    <>
    <Navbar/>
      <main className="container1">
        <label className="contimg" htmlFor="imageUpload">
          {renderImages()}
          <input
            id="imageUpload"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            multiple
            onChange={handleFileChange}
          />
        </label>
      </main>
      <div className="prof">
        <div className="top"></div>
        <div className="desc">
          <span className="wel">Welcome dear!</span> This is your personalized
          profile, tailored to showcase your preferences, interests, and
          information. Welcome to your space!
        </div>
        <div className="proftitle">User Name:</div>
        <br />
        <div className="proftitle">Phone Number:</div>
        <br />
        <div className="proftitle"></div>
        <hr className="lol" />
        <div className="klam">
          Explore our latest car website update, introducing innovative
          navigation tools, enhanced vehicle comparison options, and an
          immersive virtual showroom experience for an unparalleled browsing
          journey! What are you waiting for?! Let's go
        </div>
      </div>
    </>
  );
};

export default Profile;
