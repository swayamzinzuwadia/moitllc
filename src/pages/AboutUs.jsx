/* eslint-disable react/jsx-no-target-blank */
// Content.js
import React from 'react';
import './Content.css';
// import CircularProgressBar from '../components/circular-progress-bar'
import img from '../assets/HEADER2.png'
import img2 from '../assets/about-us.png'
// import Header2 from '../components/Header2';
import "../pages/contact.css";
import Navbar2 from '../components/navbar2';
import logo from "../assets/Moit-logo.png";
import WhatsAppIcon from './whatsapp';
import Onclick from './onclickform';

const Content = () => {
  function goToHome() {
    console.log('Go to homeee')
  }
  // const progress1 = 90
  // const progress2 = 80
  // const progress3 = 87
  return (
    <div className="content-container ">
      <Navbar2/>
      <div className="content-head">
      <div className="heading-section">
          <p classname="heading-main-banner main-font">About Us</p>
          <p className="home-link" onClick={goToHome}>
            Home &gt; About Us
          </p>
        </div>
      </div>
      <div className="image-section-main">

      <div className="image-section">
        <img
          src={img}
          alt="Description"
          className="custom-image"
          />
        <p className='paragraph-imgsec'>
          <p className=' font-bold welcome-text'>Welcome to Money Ocean Information Technology Solutions</p> <br></br>
          <div className='welcome-subtext' >At
          Money Ocean Information Technology Solutions, we transcend technology
          to craft digital solutions that empower businesses for success in the
          modern digital landscape. Headquartered in the vibrant city of Dubai,
          we are a dynamic and forward-thinking IT company specializing in a
          spectrum of services that encompass web development, software
          development, mobile app development, digital marketing, quality
          assurance, and innovative Software as a Service (SaaS) offerings.
          </div>
        </p>
        
      </div>
      </div>
      {/* Three small cards */}
      <div className="card-container">
        <div className="card1">
          <h4>Innovative Excellence</h4> Our skilled team is fueled by a passion
          for innovation
        </div>
        <div className="card2">
          <h4>Customer First</h4>Our clients are at the heart of everything we
          do.
        </div>
        <div className="card3">
          <h4>Tailored Solutions</h4>Best solution drive real growth and success
          for client goals.
        </div>
      </div>

      {/* Space for more text */}
      <div className="additional-text-main">
      <div className="additional-text-submain">

      <div className="additional-text">
        <p className='text-2xl-paragraph-additional-text'>
            <div className="section2-2-small-title-main-div">
              <div className="dot-1">
                <p className="dot-1-p-contact">.</p>
              </div>
              <div className="section2-2-small-title-div">
                <h6 className=" contactus-bulletpoint">
                  Why Choose Us
                </h6>
              </div>
            </div>
          <h1 className='text-2xl font-bold '>Work with a Dedicated IT Solutions Company</h1>
          We are committed to guiding enterprises, from startups to
          corporations, towards a future defined by technological brilliance.
        </p>
        <img
          src={img2}
          alt="Description"
          className="next_image"
          />
      </div>
      </div>
    </div>

      {/* <div className="progress-container">
        <div className="progress-card p1">
          <CircularProgressBar percentage={progress1} />
        </div>
        <div className="progress-card p2">
          <CircularProgressBar percentage={progress2} />
        </div>
        <div className="progress-card p3">
          <CircularProgressBar percentage={progress3} />
        </div>
      </div> */}

      {/* Container for social media links */}
      <div className="social-media-container">
        <div className="Mission">
          <p className='leading-5 line-height: 1.25rem; '>
            <h1 className='text-2xl font-bold '>Guiding Businesses Towards Digital Excellence</h1><br></br>
            <div className='text text-xl '>At the core of
            Money Ocean Information Technology Solutions lies an unwavering
            mission: to be the bedrock upon which businesses build their digital
            success stories<br></br><br></br>We are committed to guiding enterprises, from
            startups to corporations, towards a future defined by technological
            brilliance.</div>
          </p>
          <p className='text-xl'><br></br>
            By merging cutting-edge solutions with visionary strategies, we
            endeavor to empower our clients to conquer their challenges and
            capitalize on their opportunities, all while adhering to the highest
            standards of quality and dedication.
            <br></br>
          </p>
        </div>
        <div className="digital className='leading-9 line-height: 2.25rem;'">
          <p className='leading-9 line-height: 2.25rem;' >
            <h1 className='text-2xl font-bold leading-5 pioneering-text'><br></br>Pioneering a Digital Revolution</h1>
            <div className='text-xl'>
              <br></br>
            Our vision extends far beyond conventional IT solutions. We’re
            driven by the desire to mold a digital landscape where technology
            seamlessly intertwines with business aspirations.<br></br><br></br> Money Ocean
            Information Technology Solutions envisions a world where innovation
            isn’t just a possibility but a way of life.<br></br><br></br> We aspire to be
            trailblazers, redefining industries and pushing boundaries to set
            new benchmarks for digital excellence on a global scale.<br></br>
            <br></br>
            </div>
          </p>
          <p  className='text-xl'>
            Join hands with Money Ocean Information Technology Solutions and
            embark on a transformative digital journey that redefines success.
            Let’s shape the future together!
          </p>
          <p className='text-xl'>
            Contact us by click Free-A-Quote button to explore how our expertise
            can elevate your business to new heights.
          </p>
        </div>
      </div>
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
            <a href="https://www.facebook.com" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
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
        <WhatsAppIcon/>
      </div>
      <div className='on-Click'>
         <Onclick/>
      </div>
      <div className='copyright'>
         <p>Copyright © 2024 M.O.I.T.L.L.C. . All Rights Reserved.</p> 
      </div>
    </div>
  )
}

export default Content
