import React from "react";
import logo from "../assets/Moit-logo.png"
import "./navbar.css"

function ContainerOutsideExample() {
  return (
    <div className='navbar-main'>
      <div className="image-div">
        <img src={logo} alt="moit" className='logo' />
      </div>
      {/* <div className="nav-content">
        <div className='rightInner-navbar'>
          <a href='#courses-container' className='navbar-links'>About Us</a>
          <a href='#testimonials' className='navbar-links'>Portfolio</a>
          <a href='#footer' className='navbar-links'>Contact Us</a>
        </div>
      </div>
      <div className="nav-icon-bars">

      </div> */}
    </div>
  );
}

export default ContainerOutsideExample;