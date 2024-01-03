import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faChalkboard, faCloud, faMagnifyingGlass, faLaptopCode, faMobile } from '@fortawesome/free-solid-svg-icons';
import "./Tabs.css";
import web from "../../assets/Web Development.png";
import software from "../../assets/software-develop.png";
import uiux from "../../assets/UiUx.png";
import qa from "../../assets/QA.png";
import digimarket from "../../assets/Digi Marketing.png";
import app from "../../assets/app-develop.png";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-superwrap">

    <div className='tabs-maindiv'>
        <div className='tabs-subdiv'>
        <button onClick={() => handleTabClick('Tab1')} className={`tab ${activeTab === 'Tab1' ? 'active' : ''}`}>
          <FontAwesomeIcon className='tab-icon' icon={faChartPie}/>
          <h6 className='tab-headers'>Web Development</h6>
          <div className={`onactive ${activeTab === 'Tab1' ? 'show' : ''}`}></div>
        </button>
        <button onClick={() => handleTabClick('Tab2')} className={`tab ${activeTab === 'Tab2' ? 'active' : ''}`}>
          <FontAwesomeIcon className='tab-icon' icon={faChalkboard}/>
          <h6 className='tab-headers'>Software Development</h6>
          <div className={`onactive ${activeTab === 'Tab2' ? 'show' : ''}`}></div>
        </button>
        <button onClick={() => handleTabClick('Tab3')} className={`tab ${activeTab === 'Tab3' ? 'active' : ''}`}>
          <FontAwesomeIcon className='tab-icon' shake icon={faMobile}/>
          <h6 className='tab-headers'>Mobile App Development</h6>
          <div className={`onactive ${activeTab === 'Tab3' ? 'show' : ''}`}></div>
        </button>
        <button onClick={() => handleTabClick('Tab4')} className={`tab ${activeTab === 'Tab4' ? 'active' : ''}`}>
          <FontAwesomeIcon className='tab-icon' icon={faMagnifyingGlass}/>
          <h6 className='tab-headers'>Digital Marketing</h6>
          <div className={`onactive ${activeTab === 'Tab4' ? 'show' : ''}`}></div>
        </button>
        <button onClick={() => handleTabClick('Tab5')} className={`tab ${activeTab === 'Tab5' ? 'active' : ''}`}>
          <FontAwesomeIcon className='tab-icon' icon={faLaptopCode}/>
          <h6 className='tab-headers'>Ui/UX Design</h6>
          <div className={`onactive ${activeTab === 'Tab5' ? 'show' : ''}`}></div>
        </button>
        <button onClick={() => handleTabClick('Tab6')} className={`tab ${activeTab === 'Tab6' ? 'active' : ''}`}>
          <FontAwesomeIcon className='tab-icon' icon={faCloud}/>
          <h6 className='tab-headers'>QA & Testing</h6>
          <div className={`onactive ${activeTab === 'Tab6' ? 'show' : ''}`}></div>
        </button>
      </div>
      <div className='section3-bgoverlay'>
        {activeTab === 'Tab1' && 
        <div className="tab1-main">

          <div className='tab1-submain'>
          
              <div className="tab1-content-div">
          
                  <div className="tab1-title-div">
                      <h3 className='tab1-title'>Web Alchemy: Crafting Digital Experiences Beyond Imagination</h3>
                  </div>
          
                  <div className="tab1-paragraph-div">
                    <p className="tab1-para">Our Web Development services transcend conventional boundaries, taking your online presence to new heights. We believe in the alchemy of the web, where creativity blends seamlessly with technology. From visually captivating designs to seamless functionality, we transmute ideas into digital reality, ensuring that your website becomes a compelling digital destination.</p>
                  </div>
          
              </div>
          
              <div className="tab1-image-div">
                <img src={web} className='tab1-image' alt="webdevelopment" />
              </div>
          
          </div>
        </div>}
        
        {activeTab === 'Tab2' && 
        <div className="tab2-main">

          <div className='tab2-submain'>
          
              <div className="tab2-content-div">
          
                  <div className="tab2-title-div">
                      <h3 className='tab2-title'>CodeCraft: Forging Solutions that Redefine Excellence</h3>
                  </div>
          
                  <div className="tab2-paragraph-div">
                    <p className="tab2-para">Software Development is our playground of innovation. Our team of coding virtuosos are not just developers; they are architects of digital transformation. We don’t just write code; we craft solutions that redefine industry standards. With us, your software becomes a beacon of efficiency, scalability, and innovation, giving you a competitive edge in the digital landscape.</p>
                  </div>
          
              </div>
          
              <div className="tab2-img-div">
                <img src={software} className='tab2-img' alt="webdevelopment" />
              </div>
          
          </div>
        </div>
        }
        {activeTab === 'Tab3' && 
        
        
        <div className="tab3-main">

          <div className='tab3-submain'>
          
              <div className="tab3-content-div">
          
                  <div className="tab1-title-div">
                      <h3 className='tab1-title'>Mobile Fusion: Where Apps Come to Life</h3>
                  </div>
          
                  <div className="tab3-paragraph-div">
                    <p className="tab3-para">Mobile App Development is our forte, and innovation is our driving force. In a world where mobile apps are the heartbeat of modern businesses, we stand as pioneers, blending art and technology to forge apps that inspire. Our Mobile App Development process is a fusion of creativity and functionality, resulting in apps that resonate with users, driving engagement and success.</p>
                  </div>
          
              </div>
          
              <div className="tab3-img-div">
                <img src={app} className='tab3-img' alt="app develop" />
              </div>
          
          </div>
        </div>
      }
        
        {activeTab === 'Tab4' && <div>Content for Tab 4</div>}
        {activeTab === 'Tab5' && <div>Content for Tab 5</div>}
        {activeTab === 'Tab6' && <div>Content for Tab 6</div>}
      </div>
    </div>
  </div>
  );
};

export default Tabs;
