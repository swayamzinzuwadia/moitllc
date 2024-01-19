// import React, { useState} from 'react';
// // import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
// import { CiMenuBurger } from 'react-icons/ci';
// import './navbar.css';
// import logo from "../assets/Moit-logo.png";
// import { Link } from 'react-router-dom';

// const Navbar = ()=>{
//     const [showMediaIcons, setShowMediaIcons]=useState(false);
//     return(
//         <nav className="main-nav">
//             <div className="logo-navbar">
//             <img
//             src={logo}
//             alt="Description"
//             className='head_img'
//             />
//             </div>

//             <div className={` ${showMediaIcons ? "mobile-menu-link open" : "menu"}`}>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to={'/about-us'}>About Us</Link>
//                     </li>
//                     <li>
//                         <Link to={"/contact-us"}>Contact Us</Link>
//                     </li>
//                 </ul>
//             </div>
        
//             <div className="social-media">
//                 <div className="social-media-dekstop">
//                 {/* <ul>
//                     <li><a href="www.facebook.com"><FaFacebookSquare className="facebook"/></a></li>
//                     <li><a href="www.instagram.com"><FaInstagramSquare className="instagram"/></a></li>
//                     <li><a href="www.twitter.com"><FaTwitterSquare className="twitter"/></a></li>
//                     </ul> */}
                    
//                 </div>
//                     <div className="ham-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//                         <CiMenuBurger />
//                     </div>
//                 </div>
//         </nav>
//     )
// }

// export default Navbar;


// Navbar.jsx

import React, { useState, useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import './navbar.css';
import logo from "../assets/Moit-logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let prevScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // Scrolling down
        setScrolled(true);
      } else {
        // Scrolling up or stopped scrolling
        setScrolled(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  function goHome(){
        navigate("/");
  }

  return (
    <nav className={`main-nav-2 ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo" onClick={goHome}>
          
        <img
          src={logo}
          alt="Description"
          className='head_img'
        />
      </div>

      <div className={` ${showMediaIcons ? "mobile-menu-link-2 open" : "menu-2"}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={'/about-us'}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <div className="social-media-dekstop">
          {/* Add your social media icons here */}
        </div>
        <div className="ham-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <CiMenuBurger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
