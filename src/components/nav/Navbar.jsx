/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "./../../Assets/logo.png";
import './style.css';
import SearchFilter from "../Search/SearchFilter";
import AddToCart from "./../AddToCart/AddToCart"
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav>
      
      <div className="nav-logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="sear">
      <SearchFilter/>
      </div>
      <div className={`navbar-links-container ${menu ? "active" : ""}`}>
        <a href="">
          {" "}
          <Link to="/">Home</Link>
        </a>
        <a href="">
          {" "}
          <Link to="/signup">Sign Up</Link>
        </a>
        <a href="">
          {" "}
          <Link to="/signin">Log in</Link>
        </a>
        <a href="">
          {" "}
          <Link to="/addtocart">
          <BsCart2 className="navbar-cart-icon cart" />
          </Link>
        </a>
        <a href="">
        <Link to="/itemlist"><button className="primary-button">Book now</button></Link>
        </a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={handleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
