import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faChalkboard,
  faCloud,
  faMagnifyingGlass,
  faLaptopCode,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import "./Tabs.css";
import web from "../../assets/Web Development.png";
import software from "../../assets/software-develop.png";
import uiux from "../../assets/UiUx.png";
import qa from "../../assets/QA.png";
import digimarket from "../../assets/Digi Marketing.png";
import app from "../../assets/app-develop.png";
// import "aos/dist/aos.css"; // Import the CSS file for AOS
// import AOS from "aos";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-superwrap">
      <div className="tabs-maindiv">
        <div className="tabs-subdiv">
          <button
            onClick={() => handleTabClick("Tab1")}
            className={`tab ${activeTab === "Tab1" ? "active" : ""}`}
          >
            <FontAwesomeIcon className="tab-icon" icon={faChartPie} />
            <h6 className="tab-headers">Web Development</h6>
            <div
              className={`onactive ${activeTab === "Tab1" ? "show" : ""}`}
            ></div>
          </button>
          <button
            onClick={() => handleTabClick("Tab2")}
            className={`tab ${activeTab === "Tab2" ? "active" : ""}`}
          >
            <FontAwesomeIcon className="tab-icon" icon={faChalkboard} />
            <h6 className="tab-headers">Software Development</h6>
            <div
              className={`onactive ${activeTab === "Tab2" ? "show" : ""}`}
            ></div>
          </button>
          <button
            onClick={() => handleTabClick("Tab3")}
            className={`tab ${activeTab === "Tab3" ? "active" : ""}`}
          >
            <FontAwesomeIcon className="tab-icon" icon={faMobile} />
            <h6 className="tab-headers">Mobile App Development</h6>
            <div
              className={`onactive ${activeTab === "Tab3" ? "show" : ""}`}
            ></div>
          </button>
          <button
            onClick={() => handleTabClick("Tab4")}
            className={`tab ${activeTab === "Tab4" ? "active" : ""}`}
          >
            <FontAwesomeIcon className="tab-icon" icon={faMagnifyingGlass} />
            <h6 className="tab-headers">Digital Marketing</h6>
            <div
              className={`onactive ${activeTab === "Tab4" ? "show" : ""}`}
            ></div>
          </button>
          <button
            onClick={() => handleTabClick("Tab5")}
            className={`tab ${activeTab === "Tab5" ? "active" : ""}`}
          >
            <FontAwesomeIcon className="tab-icon" icon={faLaptopCode} />
            <h6 className="tab-headers">Ui/UX Design</h6>
            <div
              className={`onactive ${activeTab === "Tab5" ? "show" : ""}`}
            ></div>
          </button>
          <button
            onClick={() => handleTabClick("Tab6")}
            className={`tab ${activeTab === "Tab6" ? "active" : ""}`}
          >
            <FontAwesomeIcon className="tab-icon" icon={faCloud} />
            <h6 className="tab-headers">QA & Testing</h6>
            <div
              className={`onactive ${activeTab === "Tab6" ? "show" : ""}`}
            ></div>
          </button>
        </div>
        <div className="section3-bgoverlay">
          <div className="activetabs">
            {activeTab === "Tab1" && (
              <div className="tab2-main">
                <div className="tab2-submain">
                  <div className="tab2-content-div">
                    <div
                      className="tab2-title-div"
                      //data-aos="fade-right"
                   // data-aos-duration="1000"
                    >
                      <h3 className="tab2-title">
                        Web Alchemy: Crafting Digital Experiences Beyond
                        Imagination
                      </h3>
                    </div>

                    <div
                      className="tab2-paragraph-div"
                      //data-aos="fade-right"
                   // data-aos-duration="1000"
                    >
                      <p className="tab2-para">
                        Our Web Development services transcend conventional
                        boundaries, taking your online presence to new heights.
                        We believe in the alchemy of the web, where creativity
                        blends seamlessly with technology. From visually
                        captivating designs to seamless functionality, we
                        transmute ideas into digital reality, ensuring that your
                        website becomes a compelling digital destination.
                      </p>
                    </div>
                  </div>

                  <div
                    className="tab2-img-div"
                    //data-aos="fade-left"
                   // data-aos-duration="1000"
                  >
                    <img
                      src={web}
                      className="tab2-image"
                      alt="webdevelopment"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Tab2" && (
              <div className="tab2-main">
                <div className="tab2-submain">
                  <div className="tab2-content-div">
                    <div
                      className="tab2-title-div"
                      //data-aos="fade-right"
                   // data-aos-duration="1000"
                    >
                      <h3 className="tab2-title">
                        CodeCraft: Forging Solutions that Redefine Excellence
                      </h3>
                    </div>

                    <div
                      className="tab2-paragraph-div"
                      //data-aos="fade-right"
                   // data-aos-duration="1000"
                    >
                      <p className="tab2-para">
                        Software Development is our playground of innovation.
                        Our team of coding virtuosos are not just developers;
                        they are architects of digital transformation. We don’t
                        just write code; we craft solutions that redefine
                        industry standards. With us, your software becomes a
                        beacon of efficiency, scalability, and innovation,
                        giving you a competitive edge in the digital landscape.
                      </p>
                    </div>
                  </div>

                  <div
                    className="tab2-img-div"
                    //data-aos="fade-left"
                   // data-aos-duration="1000"
                  >
                    <img
                      src={software}
                      className="tab2-img"
                      alt="webdevelopment"
                    />
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Tab3" && (
              <div className="tab2-main">
                <div className="tab2-submain">
                  <div className="tab2-content-div">
                    <div
                      className="tab2-title-div"
                      //data-aos="fade-right"
                   // data-aos-duration="1000"
                    >
                      <h3 className="tab2-title">
                        Mobile Fusion: Where Apps Come to Life
                      </h3>
                    </div>

                    <div
                      className="tab2-paragraph-div"
                      //data-aos="fade-right"
                   // data-aos-duration="1000"
                    >
                      <p className="tab2-para">
                        Mobile App Development is our forte, and innovation is
                        our driving force. In a world where mobile apps are the
                        heartbeat of modern businesses, we stand as pioneers,
                        blending art and technology to forge apps that inspire.
                        Our Mobile App Development process is a fusion of
                        creativity and functionality, resulting in apps that
                        resonate with users, driving engagement and success.
                      </p>
                    </div>
                  </div>

                  <div
                    className="tab2-img-div"
                    //data-aos="fade-left"
                   // data-aos-duration="1000"
                  >
                    <img src={app} className="tab2-img" alt="app develop" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Tab4" && (
              <div>
                <div className="tab2-main">
                  <div className="tab2-submain">
                    <div className="tab2-content-div">
                      <div
                        className="tab2-title-div"
                        //data-aos="fade-right"
                        //data-aos-duration="1000"
                      >
                        <h3 className="tab2-title">
                          Digital Dynamo: Navigating the Digital Ecosystem
                        </h3>
                      </div>

                      <div
                        className="tab2-paragraph-div"
                        //data-aos="fade-right"
                        //data-aos-duration="1000"
                      >
                        <p className="tab2-para">
                          Digital Marketing is our compass in the vast digital
                          ecosystem. We understand that success in the digital
                          age requires more than just a strong online presence.
                          Our Digital Marketing experts wield algorithms and
                          creativity to amplify your brand’s voice, expand your
                          reach, and create meaningful connections with your
                          target audience.
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab2-img-div"
                      //data-aos="fade-left"
                   // data-aos-duration="1000"
                    >
                      <img
                        src={digimarket}
                        className="tab2-img"
                        alt="app develop"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Tab5" && (
              <div>
                <div className="tab2-main">
                  <div className="tab2-submain">
                    <div className="tab2-content-div">
                      <div
                        className="tab2-title-div"
                        //data-aos="fade-right"
                        //data-aos-duration="1000"
                      >
                        <h3 className="tab2-title">
                          Design Reverie: Enchanting User Experiences
                        </h3>
                      </div>

                      <div
                        className="tab2-paragraph-div"
                        //data-aos="fade-right"
                        //data-aos-duration="1000"
                      >
                        <p className="tab2-para">
                          In the realm of UX/UI Design, we are dreamweavers. Our
                          designs are more than just visual; they are
                          experiences that captivate and resonate. We understand
                          that user-centric design is the key to successful
                          digital interactions. Our UX/UI Design experts craft
                          interfaces that are intuitive, visually stunning, and
                          deeply engaging, creating a lasting bond between users
                          and your brand.
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab2-img-div"
                      //data-aos="fade-left"
                   // data-aos-duration="1000"
                    >
                      <img src={uiux} className="tab2-img" alt="app develop" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Tab6" && (
              <div>
                <div className="tab2-main">
                  <div className="tab2-submain">
                    <div className="tab2-content-div">
                      <div
                        className="tab2-title-div"
                        //data-aos="fade-right"
                        //data-aos-duration="1000"
                      >
                        <h3 className="tab2-title">
                          Meticulous Maestros: Symphony of Quality and
                          Reliability
                        </h3>
                      </div>

                      <div
                        className="tab2-paragraph-div"
                        //data-aos="fade-right"
                        //data-aos-duration="1000"
                      >
                        <p className="tab2-para">
                          Quality Assurance and Testing are the cornerstones of
                          our commitment to excellence. We don’t settle for
                          anything less than perfection. Our meticulous approach
                          to QA and Testing ensures that every digital solution
                          we deliver meets the highest standards of quality and
                          reliability. Your users deserve the best, and we make
                          sure they get it.
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab2-img-div"
                      //data-aos="fade-left"
                   // data-aos-duration="1000"
                    >
                      <img src={qa} className="tab2-img" alt="app develop" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
