import React from "react";
import logo from "../assets/Moit-logo.png"
import "./navbar.css"

function ContainerOutsideExample() {
  return (
    <div className='navbar-main'>
    <img src={logo} alt="growthHub-logo" className='logo' />
    <div className='rightInner-navbar'>
      <a href='#courses-container' className='navbar-links'>Courses</a>
      <a href='#testimonials' className='navbar-links'>Testimonials</a>
      <a href='#footer' className='navbar-links'>Contact</a>
    </div>
  </div>
  );
}

export default ContainerOutsideExample;