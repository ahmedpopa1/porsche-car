import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container"></div>
          <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Qualtiy</span>
            <span>Help</span>
            <span>Share</span>
            <span>Carrers</span>
            <span>Work</span>
          </div>
          <div className="footer-section-columns">
            <span>244-5333-7783</span>
            <span>hello@car.com</span>
            <span>press@racing.com</span>
            <span>contact@drive.com</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
