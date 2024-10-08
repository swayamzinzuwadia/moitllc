import React from 'react';
import './Content.css';
import img from '../assets/HEADER2.png'
import img2 from '../assets/about-us.png'
import "../pages/contact.css";
import Navbar2 from '../components/navbar2';
// import logo from "../assets/Moit-logo.png";
import WhatsAppIcon from '../dhruv/whatsapp';
import Onclick from '../dhruv/onclickform';
import Footer3 from '../components/footer3';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }

  return (
    <div className='imp'>
      
      <Navbar2/>
    <div className="content-container ">
      <div className="content-head">
      <div className="heading-section">
          <p className="heading">About Us</p>
          <p className="home-link" onClick={goToHome}>
            <a href='/' onClick={goToHome} className='home-text'>Home</a> &gt; Contact Us
          </p>
        </div>
      </div>
      <div className='imp-sub'>
      <div className="image-section-main">

      <div className="image-section">
        <img
          src={img}
          alt="Description"
          className="custom-image"
          />
        <p className='paragraph-imgsec'>
              <div className="section2-2-small-title-div">
                <h6 className=" contactus-bulletpoint">
                <br></br><br></br>
                  <li>Who We Are</li>
                </h6>
              </div>
          <p className=' text-4xl font-bold'>Welcome to Money Ocean Information Technology Solutions</p> <br></br>
          <div className='welcome-subtext mission-para' >At
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
        <div className='text-2xl paragraph-additional-text'>
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
          <p className='mission-para mt-4'>
            We are committed to guiding enterprises, from startups to
            corporations, towards a future defined by technological brilliance.
          </p>
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
        </div>
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
          <p className='leading-5 Misssion-sub'>
            <h1 className='text-4xl font-bold '>Guiding Businesses Towards Digital Excellence</h1><br></br>
            <div className='text mission-para'>At the core of
            Money Ocean Information Technology Solutions lies an unwavering
            mission: to be the bedrock upon which businesses build their digital
            success stories We are committed to guiding enterprises, from
            startups to corporations, towards a future defined by technological
            brilliance.
            By merging cutting-edge solutions with visionary strategies, we
            endeavor to empower our clients to conquer their challenges and
            capitalize on their opportunities, all while adhering to the highest
            standards of quality and dedication.
            <br></br>
            </div>
          </p>
        </div>
        <div className="digital">
        <div className="section2-2-small-title-div">
                <h6 className=" contactus-bulletpoint">
                <br></br><br></br>
                  <li>Our Vision</li>
                </h6>
              </div>
          <p className='digital-2' >
            <h1 className='text-4xl font-bold leading-9 pioneering-text'><br></br>Pioneering a Digital Revolution</h1>
            <div className='mission-para mt-4'>
            Our vision extends far beyond conventional IT solutions. We are
            driven by the desire to mold a digital landscape where technology
            seamlessly intertwines with business aspirations. Money Ocean
            Information Technology Solutions envisions a world where innovation
            isn’t just a possibility but a way of life. We aspire to be
            trailblazers, redefining industries and pushing boundaries to set
            new benchmarks for digital excellence on a global scale.<br></br>
            <br></br>
            Join hands with Money Ocean Information Technology Solutions and
            embark on a transformative digital journey that redefines success.
            Let’s shape the future together!<br></br><br></br>
            </div>
            <p className='mission-para'>
              Contact us by click Free-A-Quote button to explore how our expertise
              can elevate your business to new heights.<br></br><br></br>
            </p>
            </p>
        </div>
      </div>
      </div>
      
      <div className='whatsapp'>
        <WhatsAppIcon/>
      </div>
      <div className='on-Click'>
         <Onclick/>
      </div>
      
    </div>
    
      <div className='footer2'>
        <Footer3/>
        
      </div>
    </div>
  )
}

export default AboutUs;