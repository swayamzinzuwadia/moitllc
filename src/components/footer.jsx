import React from "react";
import logo from "../assets/Moit-logo.png"
import "./footer.css"

function Footer() {
  return (
    <div className='footer-main'>
      <div className="image-div">
        <img src={logo} alt="moit" className='logo' />
      </div>
    </div>
  );
}

export default Footer;