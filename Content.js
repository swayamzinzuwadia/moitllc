// Content.js
import React from 'react';
import './Content.css';
import CircularProgressBar from './circular-progress-bar';

const Content = () => {
  const progress1 = 90;
  const progress2 = 80;
  const progress3 = 87;
  return (
    <div className="content-container">
      <div className="image-section">
        <img
          src={process.env.PUBLIC_URL + '/about-us-1137x1536.png'}
          alt="Description"
          className='custom-image'
        /><p>
        <h2>Welcome to TAQNIYAH IT Solutions</h2> At Taqniyah IT Solutions, 
        we transcend technology to craft digital solutions that empower 
        businesses for success in the modern digital landscape. Headquartered 
        in the vibrant city of Dubai, we are a dynamic and forward-thinking IT 
        company specializing in a spectrum of services that encompass web development, 
        software development, mobile app development, digital marketing, quality
        assurance, and innovative Software as a Service (SaaS) offerings.
      </p>
      </div>
      {/* Three small cards */}
      <div className="card-container">
        <div className="card1">
        
        <h4>Innovative Excellence</h4> Our skilled team is fueled by a passion for innovation</div>
        <div className="card2"><h4>Customer First</h4>Our clients are at the heart of everything we do.</div>
        <div className='card3'><h4>Tailored Solutions</h4>Best solution drive real growth and success for client goals.</div>
      </div>

      {/* Space for more text */}
      <div className="additional-text">
      <img
          src={process.env.PUBLIC_URL + '/aboutus-2048x963.png'}
          alt="Description"
          className='next_image'/>
        <p>
        <h1>Work with a Dedicated
        IT Solutions Company</h1>
        We are committed to guiding enterprises, from startups to corporations, 
        towards a future defined by technological brilliance.</p>
      </div>

      <div className='progress-container'>
      <div className='progress-card p1'>
        <CircularProgressBar percentage={progress1} />
      </div>
      <div className='progress-card p2'>
        <CircularProgressBar percentage={progress2} />
      </div>
      <div className='progress-card p3'>
        <CircularProgressBar percentage={progress3} />
      </div>
    </div>
      
      {/* Container for social media links */}
      <div className="social-media-container">
        <div className='Mission'>
            <p><h1>Guiding Businesses Towards Digital Excellence</h1>At the core of Taqniyah IT Solutions lies an unwavering mission: 
            to be the bedrock upon which businesses build their digital success stories. We are committed to guiding enterprises, 
            from startups to corporations, towards a future defined by technological brilliance.</p>
            <p>
            By merging cutting-edge solutions with visionary strategies, we endeavor to empower our clients to conquer 
            their challenges and capitalize on their opportunities, all while adhering to the highest standards of quality and dedication.</p>
        </div>
        <div className='digital'>
        <p>
        <h1>Pioneering a Digital Revolution</h1>
        Our vision extends far beyond conventional IT solutions. We’re driven by the desire to mold a digital landscape where technology seamlessly intertwines with business aspirations. 
        Taqniyah IT Solutions envisions a world where innovation isn’t just a possibility but a way of life. We aspire to be trailblazers, redefining industries and pushing boundaries to set new benchmarks for digital excellence on a global scale.
        </p>
        <p>
        Join hands with Taqniyah IT Solutions and embark on a transformative digital journey that redefines success. Let’s shape the future together!</p><p>
        
        Contact us by click Free-A-Quote button to explore how our expertise can elevate your business to new heights.</p>
        </div>
      </div>
      <div className="last-section">
  <div className="social-media">
    <img
      src={process.env.PUBLIC_URL + '/TAQNIYAH.svg'}
      alt="Description"
      className='foot_img'
    />
    <h2>Social Media</h2>
    <p>Follow us on:</p>
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

      {/* Services Provided */}
      <div className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>Software Development</li>
          <li>Mobile App Development</li>
          {/* Add more services as needed */}
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
      
    </div>
  );
};

export default Content;
