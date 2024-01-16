import React from 'react';
import logo from '../assets/Moit-logo.png'
const Footer2 = () => {
  return (
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
          At M.O.IT, we transcend technology to craft digital solutions that empower
          businesses for success in the modern digital landscape.
        </p>
      </div>
      <div className="social-media-about">
        <p className='para'>Follow us on:</p>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
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
  );
}

export default Footer2;
