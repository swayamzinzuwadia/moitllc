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
        <div className='number-box'>01</div>
          <h5 className='service-box-title'>Innovative Excellence</h5> <p className='text-lg'><br></br>Our skilled team is fueled by a passion
          for innovation</p>
        </div>
        
        <div className="card2">
        <div className='number-box-2'>02</div>
          <h5 className='service-box-title'>Customer First</h5> <p className='text-lg'><br></br>Our clients are at the heart of everything we
          do.</p>
        </div>
        <div className="card3">
        <div className='number-box-3'>03</div>
          <h5 className='service-box-title'>Tailored Solutions</h5> <p className='text-lg'><br></br>Best solution drive real growth and success
          for client goals.</p>
          </div>
      </div>

      {/* Space for more text */}
      <div className="additional-text-main">
      <div className="additional-text-submain">

      <div className="additional-text">
        <p className='text-2xl paragraph-additional-text'>
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

    <div className='progress-main'>
      <div className='progress-sub-main'>
      <div className='progress-container'>
      <div className='title1'><p>Technical Powers</p></div>
        <progress className='p1' value={90} max={100} />
        <div className='progress-value'>{90}%</div>
      </div>
      <div className='progress-container'>
      <div className='title2'><p>End to end services</p></div>
        <progress className='p2' value={60} max={100} />
        <div className='progress-value'>{60}%</div>
      </div>
      <div className='progress-container'>
      <div className='title1'><p>Result oriented strategies</p></div>
      <progress className='p3' value={75} max={100} />
      <div className='progress-value'>{75}%</div>
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
      <div className='orange-card'>
      <div className='card-body'>
        <div className='card-part1'><li>Active Clients</li><p>330+</p></div>
        <div className='card-part2'><li>Projects Done</li><p>850+</p></div>
        <div className='card-part3'><li>Team Advisors</li><p>25+</p></div>
        <div className='card-part4'><li>Glorious Years</li><p>10+</p></div>
      </div>
      </div>
      {/* Container for social media links */}
      <div className="social-media-container">
        <div className="Mission">
        <div className="section2-2-small-title-div">
                <h6 className=" contactus-bulletpoint">
                  <li>Our Mission</li>
                </h6>
              </div>
          <p className='leading-5 line-height: 1.25rem; '>
            <h1 className='text-2xl font-bold '>Guiding Businesses Towards Digital Excellence</h1><br></br>
            <div className='text text-xl '>At the core of
            Money Ocean Information Technology Solutions lies an unwavering
            mission: to be the bedrock upon which businesses build their digital
            success stories We are committed to guiding enterprises, from
            startups to corporations, towards a future defined by technological
            brilliance.</div>
          </p>
          <p className='text-xl'>
            By merging cutting-edge solutions with visionary strategies, we
            endeavor to empower our clients to conquer their challenges and
            capitalize on their opportunities, all while adhering to the highest
            standards of quality and dedication.
            <br></br>
          </p>
        </div>
        <div className="digital className='leading-9 line-height: 2.25rem;'">
        <div className="section2-2-small-title-div">
                <h6 className=" contactus-bulletpoint">
                <br></br><br></br><br></br>
                  <li>Our Vision</li>
                </h6>
              </div>
          <p className='leading-9 line-height: 2.25rem;' >
            <h1 className='text-2xl font-bold leading-5 pioneering-text'><br></br>Pioneering a Digital Revolution</h1>
            <div className='text-xl'>
              <br></br>
            Our vision extends far beyond conventional IT solutions. We’re
            driven by the desire to mold a digital landscape where technology
            seamlessly intertwines with business aspirations. Money Ocean
            Information Technology Solutions envisions a world where innovation
            isn’t just a possibility but a way of life. We aspire to be
            trailblazers, redefining industries and pushing boundaries to set
            new benchmarks for digital excellence on a global scale.<br></br><br></br>
            </div>
          </p>
          <p  className='text-xl'>
            Join hands with Money Ocean Information Technology Solutions and
            embark on a transformative digital journey that redefines success.
            Let’s shape the future together!<br></br><br></br>
          </p>
          <p className='text-xl'>
            Contact us by click Free-A-Quote button to explore how our expertise
            can elevate your business to new heights.<br></br><bR></bR>
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
         <p>Copyright © 2023 Money Ocean Information Technology.LLC IT Solutions . All Rights Reserved.</p> 
      </div>
    </div>
  )
}

export default Content
