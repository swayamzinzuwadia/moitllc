import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { CiMenuBurger } from 'react-icons/ci';
import './navbar.css';

const Navbar = ()=>{
    const [showMediaIcons, setShowMediaIcons]=useState(false);
    return(
        <nav className="main-nav">
            <div className="logo">
            <img
            src={process.env.PUBLIC_URL + '/TAQNIYAH_logo.svg'}
            alt="Description"
            className='head_img'
            />
            </div>

            <div className={showMediaIcons?" mobile-menu-link ":"menu"}>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div className="social-media">
                <div className="social-media-dekstop">
                <ul>
                    <li><a href="www.facebook.com"><FaFacebookSquare className="facebook"/></a></li>
                    <li><a href="www.instagram.com"><FaInstagramSquare className="instagram"/></a></li>
                    <li><a href="www.twitter.com"><FaTwitterSquare className="twitter"/></a></li>
                    </ul>
                    
                </div>
                    <div className="ham-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <CiMenuBurger />
                    </div>
                </div>
        </nav>
    )
}

export default Navbar