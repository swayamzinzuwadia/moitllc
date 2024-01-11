import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from 'react-icons/md'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { MdPhoneCallback } from 'react-icons/md'

import './homepage.css'
import { Form } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'

const info = [
  {
    image: '<MdMarkEmailRead />',
    title: 'OUR MAIlBOX :',
    content: 'info@taqniyahittsolutions.com',
  },
]

function Contact() {
  function goToHome() {
    console.log('Go to homeee')
  }
  return (
    <div className="contact-main">
      <div className="contact-submain">
        {/* <div className="navbar">

          </div> */}
        <div className="heading-section">
          <p classname="heading-main-banner font-bold">Contact Us</p>
          <p className="home-link" onClick={goToHome}>
            Home &gt; Contact Us
          </p>
        </div>
        <div className="main-section mt-10 h-fit">
          <div className="submain-section1">
            <div className="blue-div-main h-fit">
              <div className="blue-div w-full rounded-2xl h-full p-5 ">
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
                  <div className="mt-5 text-white w-80 ">
                    For inquiries, questions, or collaborations, we welcome you
                    to reach out to our dedicated team at TAQNIYAH IT Solutions.
                    Connect with us through the provided contact form or
                    directly via email, and let’s embark on a journey of
                    technological excellence together.
                  </div>
                  <div className="flex m-5 mt-12">
                    <div className="mr-2">
                      <MdMarkEmailRead color="#16d0f5" size={40} />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-white p-2">OUR MAILBOX:</div>
                      <div className="text-white ml-2">
                        <p>info@taqniyahitsolutions.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex m-5 mt-10">
                    <div className="mr-2">
                      <FaMapMarkedAlt color="#16d0f5" size={40} />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-white p-2">OUR ADDRESS:</div>
                      <div className="text-white ml-2">
                        <p>
                          Unit 1202, Office 28, 12th Floor, Rolex Twin Towers
                          (Commercial), Deira, Dubai
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex m-5 mt-10
									"
                  >
                    <div className="mr-2">
                      <MdPhoneCallback color="#16d0f5" size={40} />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-white p-2">OUR PHONE:</div>
                      <div className="text-white ml-2">
                        <p>+971 543260188</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-main-div">
              <div className="form-submain w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Map />
    </div>
  )
}

export default Contact
