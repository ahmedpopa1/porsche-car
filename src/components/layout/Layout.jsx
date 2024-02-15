import React from "react";
import Home from "./../home/Home";
import About from "./../about/About";
import Work from "./../work/Work";
import Footer from "./../footer/Footer";
import Slider from "./../slider/Slider";
import Nav from "./../nav/Navbar";

function Layout() {
  return (
    <>
    <Nav/>
      <Home />
      <About />
      <Slider />
      <Work />
      <Footer/>
    </>
  );
}

export default Layout;
