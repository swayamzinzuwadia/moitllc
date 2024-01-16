// HomePage.js
import { React} from "react";
import "./homepage.css";
// import './tailwind.css';
import ContainerOutsideExample from "../components/navbar";
import Footer from "../components/footer";
import image1 from "../assets/homepage-1.png";
import section2_image from "../assets/home-section3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faChalkboard,
  faCloud,
  faMagnifyingGlass,
  faGears,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
// import "aos/dist/aos.css"; // Import the CSS file for AOS
// import AOS from "aos";
import CircularProgressBar from "../components/circular-progress-bar";
import Tabs from "../components/Tabs/Tabs";
import section4 from "../assets/section4.png";

const HomePage = () => {
  // useEffect(() => {
  //   // AOS.init({});
  // }, []);
  const progress = 87;
  const progress1 = 86;
  const progress2 = 94;
  const progress3 = 91;
  return (
    <>
      <div className="main-div">
        <section id="section1" className="section1 ">
          <div className="section1-main2-div">
            <ContainerOutsideExample />
            <div className="section1-main3-div ">
              <div className=" img-div ">
                <img src={image1} className="it-home-pic" alt="IT pic" />
              </div>

              <div className="text-section1">
                <p className=" p-section1-part1">
                  CHANGE YOUR VIEW OF IT SOLUTIONS
                </p>
                <div className="typewriter">
                  Unlocking Business Success with IT Solutions in Dubai
                </div>

                {/* <div className="unlocking-text-div">
                        <p className='unlocking-text'>Unlocking Business Success with IT Solutions in Dubai</p>
                      </div>

                      <p className='p-section1-part2'>Enhance your company’s efficiency and growth with top-notch IT solutions in Dubai.</p> */}
              </div>
            </div>
          </div>
        </section>

        <div className="background2">
          <section id="section2" className="section2">
            <div className="section2-main-div">
              <div className="small-tittle-div">
                <ul>
                  <li>
                    <h6 className="small-title-p">
                      <span>BUILD YOUR SMALL BUSINESS WITH US</span>
                    </h6>
                  </li>
                </ul>
              </div>

              <h2 className="it-solutions">
                Why Choose Money Ocean Information Technology
                <br />
                As your best IT Solution Partner
              </h2>

              <div className="card-div">
                <div
                  className="card-div-row"
                  
                >
                  <div className="card">
                    <FontAwesomeIcon
                      className="section2-card-icon"
                      icon={faChartPie}
                    />
                    <h3 className="card-headers">Expertise</h3>
                    <p className="card-paragraphs">
                      One size does not fit all in the world of IT solutions,
                      and that's where Money Ocean Information Technology excels
                    </p>
                  </div>
                  <div className="card">
                    <FontAwesomeIcon
                      className="section2-card-icon"
                      icon={faChalkboard}
                    />
                    <h3 className="card-headers">Solution</h3>
                    <p className="card-paragraphs">
                      One size does not fit all in the world of IT solutions,
                      and that's where Money Ocean Information Technology excels.
                    </p>
                  </div>
                  <div className="card">
                    <FontAwesomeIcon
                      className="section2-card-icon"
                      icon={faCloud}
                    />
                    <h3 className="card-headers">Customer Approach</h3>
                    <p className="card-paragraphs">
                      Choosing Money Ocean Information Technology means choosing a partner that puts your
                      vision at the forefront.
                    </p>
                  </div>
                </div>
                <div
                  className="card-div-row"
                  // data-aos="fade-right"
                  // data-aos-duration="1000"
                >
                  <div className="card">
                    <FontAwesomeIcon
                      className="section2-card-icon"
                      icon={faMagnifyingGlass}
                    />
                    <h3 className="card-headers">Quality Assurance</h3>
                    <p className="card-paragraphs">
                      Quality is non-negotiable when it comes to IT solutions,
                      and we understand that better than anyone.
                    </p>
                  </div>
                  <div className="card">
                    <FontAwesomeIcon
                      className="section2-card-icon"
                      icon={faGears}
                    />
                    <h3 className="card-headers">Innovation</h3>
                    <p className="card-paragraphs">
                      We thrive on staying ahead of the curve by continuously
                      updating our knowledge of the latest industry trends and
                      technologies.
                    </p>
                  </div>
                  <div className="card">
                    <FontAwesomeIcon
                      className="section2-card-icon"
                      icon={faLaptopCode}
                    />
                    <h3 className="card-headers">Timely Delivery</h3>
                    <p className="card-paragraphs">
                      With us, you can confidently plan your business
                      strategies, knowing that your IT solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="section2-2" className="section2-2">
            <div className="section2-2-main">
              <div className="section2-2-submain">
                <div
                  className="section2-2-content-div"
                  // data-aos="fade-right"
                  // data-aos-duration="1000"
                >
                  <div className="section2-2-small-title-main-div">
                    <div className="dot-1">
                      <p className="dot-1-p">.</p>
                    </div>
                    <div className="section2-2-small-title-div">
                      <h6 className="section2-2-small-title">our mission</h6>
                    </div>
                  </div>
                  <div className="section2-2-title-div">
                    <h3 className="section2-2-title">
                      Delivering Exceptional IT Solutions in Dubai and Beyond
                    </h3>
                  </div>
                  <div className="section2-2-para-div">
                    <p className="section2-2-para1">
                      At Money Ocean Information Technology IT Solutions, we are your trusted partner in
                      providing cutting-edge IT solutions tailored to meet the
                      unique needs of businesses in Dubai and beyond.
                    </p>
                    <p className="section2-2-para2">
                      As a premier IT solution company, we specialize in a wide
                      range of services, including web development, software
                      creation, mobile app design, digital marketing, and more.
                      Our dedicated team of experts is committed to delivering
                      top-tier solutions that drive your business forward.
                      Explore the world of technology with Money Ocean Information Technology IT Solutions.
                    </p>
                  </div>
                </div>
                <div
                  className="section2-2-image-div"
                  // data-aos="fade-left"
                  // data-aos-duration="1000"
                >
                  <img
                    src={section2_image}
                    className="section2-2-image"
                    alt="teaching"
                  />
                </div>
              </div>
              <div className="section2-2-submain2">
                <div
                  className="progress"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  <div className="outer-path">
                    <CircularProgressBar percentage={progress} />
                  </div>
                  <h3 className="progress-subheaders">IT Consultancy</h3>
                </div>
                <div
                  className="progress1 progressbar2"
                  // data-aos="fade-down"
                  // data-aos-duration="1000"
                >
                  <div className="outer-path">
                    <CircularProgressBar percentage={progress1} />
                  </div>
                  <h3 className="progress-subheaders">
                    Custom Software
                    <br /> Development
                  </h3>
                </div>
                <div
                  className="progress"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  <div className="outer-path">
                    <CircularProgressBar percentage={progress2} />
                  </div>
                  <h3 className="progress-subheaders">Testing</h3>
                </div>
                <div
                  className="progress1"
                  // data-aos="fade-down"
                  // data-aos-duration="1000"
                >
                  <div className="outer-path">
                    <CircularProgressBar percentage={progress3} />
                  </div>
                  <h3 className="progress-subheaders">Marketing</h3>
                </div>
              </div>
            </div>
          </section>
        </div>

          <section id="3" className="section3">
            <div className="section3">
              <div className="section3-main">
                <div className="section3-submain">
                  <div className="section3-headers">
                    <div className="section2-2-small-title-main-div">
                      <div className="dot-1">
                        <p className="dot-1-p">.</p>
                      </div>
                      <div className="section3-small-title-div">
                        <h6 className="section3-small-title">
                          our services
                        </h6>
                      </div>
                    </div>
                    <div className="section3-title-div">
                      <h3 className="section3-title">
                        Take a Look at Our Best IT Solution Services
                      </h3>
                    </div>
                  </div>
                  {/* <div className="section3-bgoverlay"> */}
                  <div className="tabs">
                    <Tabs />
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </section>

          <section id="section4">
              <div className="section4-bgoverlay">
            <div className="section4-main">
                <div className="section4-submain">
                  <div className="section4-image-div">
                    <img
                      src={section4}
                      className="section4-img"
                      alt="section4"
                    />
                  </div>
                  <div className="section4-content-div">
                    <div className="section2-2-small-title-main-div">
                      <div className="dot-1">
                        <p className="dot-1-p">.</p>
                      </div>
                      <div className="section2-2-small-title-div">
                        <h6 className="section3-small-title">
                          perks
                        </h6>
                      </div>
                    </div>
                    <div className="section4-title-div">
                      <h4 className="section2-2-title">
                        Benefits of Having Best IT Solutions
                      </h4>
                      <p className=" section4-para">Money Ocean Information Technology stands out as an IT partner with a track record of excellence. With over a decade of experience, their team of highly trained professionals is equipped to handle diverse IT challenges. Money Ocean Information Technology’s dedication to customer satisfaction is evident in their client success stories. They hold industry awards, certifications, and specializations that underscore their expertise. Money Ocean Information Technology’s holistic approach ensures that your IT needs are not just met, but exceeded.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section id="footer">
            <div className="footer">
              <Footer/>
              {/* <p className="footer-text">Copyright © 2023 Money Ocean Information Technology.LLC IT Solutions . All Rights Reserved.</p>*/}
            </div>
          </section>


      </div>
    </>
  );
};

export default HomePage;
