import React, { useState} from 'react';
// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { CiMenuBurger } from 'react-icons/ci';
import './navbar2.css';
import logo from "../assets/MOIT-01.png";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ()=>{
    const [showMediaIcons, setShowMediaIcons]=useState(false);
    const navigate = useNavigate();
    function goHome(){
        navigate('/');
    }
    return(
        <nav className="main-nav-2">
            <div className="logo-2">
            <img
            onClick={goHome}
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
                {/* <ul>
                    <li><a href="www.facebook.com"><FaFacebookSquare className="facebook"/></a></li>
                    <li><a href="www.instagram.com"><FaInstagramSquare className="instagram"/></a></li>
                    <li><a href="www.twitter.com"><FaTwitterSquare className="twitter"/></a></li>
                    </ul> */}
                    
                </div>
                    <div className="ham-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <CiMenuBurger />
                    </div>
                </div>
        </nav>
    )
}

export default Navbar