import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from 'react-icons/md'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { MdPhoneCallback } from 'react-icons/md'

import './homepage.css'
// import { Form } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import Navbar2 from '../components/navbar2';
import Footer3 from '../components/footer3';
import MapComponent from '../components/Map'
import { useNavigate } from 'react-router'

// const info = [
//   {
//     image: '<MdMarkEmailRead />',
//     title: 'OUR MAIlBOX :',
//     content: 'info@taqniyahittsolutions.com',
//   },
// ]

function Contact() {
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }
  return (
    <div className="contact-main">
        <div className="navbar w-full">
              <Navbar2/>
          </div>
        <div className="heading-section-2">
          <p className="heading-2">Contact Us</p>
          <p className="home-link-2" onClick={goToHome}>
            <a href='/' onClick={goToHome} className='home-text-2'>Home</a> &gt; Contact Us
          </p>
        </div>
      <div className="contact-submain">
        <div className="main-section mt-10 h-fit">
          <div className="submain-section1">
            <div className="blue-div-main h-fit">
              <div className="blue-div w-full rounded-2xl p-5 ">
                <div className="blue-div-submain">
                  <div className="section2-2-small-title-main-div">
                    <div className="dot-1">
                      <p className="dot-1-p-contact">.</p>
                    </div>
                    <div className="section2-2-small-title-div">
                      <h6 className=" contactus-bulletpoint">
                        CONTACT DETAILS
                      </h6>
                    </div>
                  </div>
                  <div className="title-contact">
                    <h1 className="font-bold mt-2 ml-2">Contact Us Today</h1>
                  </div>
                  <div className="mt-5 paragraph-div text-white w-80 ">
                    <p className=' text-sm max-w-56'>
                      For inquiries, questions, or collaborations, we welcome you
                      to reach out to our dedicated team at Mone Ocean Information Technology Solutions.
                      Connect with us through the provided contact form or
                      directly via email, and let’s embark on a journey of
                      technological excellence together.
                    </p>
                  </div>
                  <div className="flex m-5 mt-12">
                    <div className="mr-2">
                      <MdMarkEmailRead color="#16d0f5" size={28} />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-headers p-{0.3rem}">OUR MAILBOX:</div>
                      <div className="text-white ml-2">
                        <p>info@moitllc.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex m-5 mt-5">
                    <div className="mr-2">
                      <FaMapMarkedAlt color="#16d0f5" size={28} />
                    </div>
                    <div className="flex flex-col">
                      <div className=" text-headers p-{0.3rem}">OUR ADDRESS:</div>
                      <div className="text-white ml-2">
                        <p>
                        407 , Business village Block B, Nr. Deira clock tower, Deira
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex m-5 mt-5
									"
                  >
                    <div className="mr-2">
                      <MdPhoneCallback color="#16d0f5" size={28} />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-headers p-{0.3rem}">OUR PHONE:</div>
                      <div className="text-white ml-2">
                        <p>+971 543260188</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-main-div">
              <div className="form-submain w-full items-center flex justify-center h-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="map-main">
          <div className="map-submain">
            <MapComponent/>
          </div>
        </div>
        <hr className='hr-contact'/>
        <div className='footer-main-contact'>
            {/* <p className="footer-text">Copyright © 2023 Money Ocean Information Technology.LLC IT Solutions . All Rights Reserved.</p> */}
          <div className="footer-submain-contact">
            <Footer3/>

          </div>
        
        
        </div>
      </div>
      {/* <Map /> */}
    </div>
  )
}

export default Contact
