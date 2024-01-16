import React from "react";
import logo from "../assets/MOIT-01.png"
import "./footer.css"

function Footer() {
  return (
    <div className='footer-main'>
      <div className="last-section">
      <div className='about-moit'>
      <div className='moit-img'>
        <img
        src={logo}
        alt="Description"
        className='moit_img'
        />
      </div>
        <p className='moit-para'>
        At M.O.IT.we transcend technology to craft digital solutions that empower
        businesses for success in the modern digital landscape.
        </p>
      </div>
        <div className="social-media-about">
        <p className='para'>Follow us on:</p>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Phone: +1 123-456-7890</p>
          <p>Email: info@taqniyah.com</p>
          {/* Add more contact information as needed */}
        </div>

        {/* Address */}
        <div className="address">
          <h2>Our Address</h2>
          <p>123 Main Street, Cityville, Country</p>
        </div>
      </div>
      <div className='whatsapp'>
        {/* <WhatsAppIcon/> */}
      </div>
      <div className='on-Click'>
         {/* <Onclick/> */}
      </div>
      <div className='copyright'>
         <p>Copyright © 2024 M.O.I.T.L.L.C. . All Rights Reserved.</p> 
      </div>
    </div>
  );
}

export default Footer;