import React from "react";
import logo from "../assets/MOIT-01.png"
import "./footer.css"

function Footer() {
  return (
    <div className='footer-main'>
      <div className="image-div">
        <img src={logo} alt="moit" className='logo' />
      </div>
      <div className="para-div">
        <p>Copyright © 2023 Money Ocean Information Technology Solutions. All Rights Reserved </p>
      </div>
    </div>
  );
}

export default Footer;