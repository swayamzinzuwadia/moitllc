import React, { useState, useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import './navbar2.css';
import logo from "../assets/MOIT-01.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);


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
      setAtTop(currentScrollY === 0);

    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''} ${atTop ? 'atTop' : 'not-atTop'}`}>
      <div className="logo">
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