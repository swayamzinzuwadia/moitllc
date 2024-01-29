import React from 'react';
import logo from '../assets/Moit-logo.png'
import './footer3.css';
const Footer3=()=>{
    return(
        <div className='footer3-main'>
           <div className="svg-shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="elementor-shape-fill footer-shape" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                    c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                    c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
            </div> 
            
            <div className='footer-sub-main'>
                <div className='about-moit'> 
                    <div className='moit-img'>
                        <img
                            src={logo}
                            alt="Description"
                            className='moit_img'
                        />
                    </div>
                    <p className='moit-para mt-4'>
                    At M.O.I.T, we transcend technology to craft digital solutions that empower
                    businesses for success in the modern digital landscape.
                    </p>
                </div>
                <div className="social-media-about-2">
                    <p className='para font-bold mt-6'>Follow us on:</p>
                        <ul className='mt-2'>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                Twitter
                            </a>
                             </li>
                             <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                Instagram
                                </a>
                           </li>
                        </ul>
                </div>

                {/* Contact Information */}
                <div className="contact-info-2">
                    <h2 className='font-bold mt-6'>Contact Us</h2>
                    <p className='mt-2'>Phone: +1 123-456-7890</p>
                    <p>Email: info@taqniyah.com</p>
                    {/* Add more contact information as needed */}
                </div>

                {/* Address */}
                <div className="address-2">
                    <h2 className='font-bold mt-6'>Our Address</h2>
                    <p className='mt-2'>407 , Business village Block B, Nr. Deira clock tower, Deira</p>
                </div>
            </div>
            <div className='Copyright'>
                <p>Copyright © 2023 Money Ocean Information Technology.LLC IT Solutions . All Rights Reserved.</p> 
            </div>
        </div>
    )
}

export default Footer3;