import React from "react";
import "./contact.css";
import "./homepage.css";  
function Contact() {
  function goToHome() {
    console.log("Go to homeee");
  }
  return (
    <div className="contact-main">
      <div className="contact-submain">
        {/* <div className="navbar">

          </div> */}
        <div className="heading-section">
          <h1 classname="heading-main-banner">Contact Us</h1>
          <p className="home-link" onClick={goToHome}>
            Home > 
          </p>
        </div>
        <div className="main-section">
          <div className="submain-section1">

            <div className="blue-div-main">
              <div className="blue-div">
                <div className="blue-div-submain">
                  
                  <div className="section2-2-small-title-main-div">
                    <div className="dot-1">
                      <p className="dot-1-p-contact">.</p>
                    </div>
                    <div className="section2-2-small-title-div">
                      <h6 className=" contactus-bulletpoint">CONTACT DETAILS</h6>
                    </div>
                  </div>
                  <div className="title-contact">
                    <h1>Contact Us Today</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-main-div">
              <div className="form-submain">
                <p>HI HELLO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
