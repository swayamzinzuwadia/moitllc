// WhatsAppIcon.jsx

import React from 'react';
import './whatsapp.css';
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
    // Replace 'YOUR_WHATSAPP_WEB_URL' with the actual URL for WhatsApp Web
    window.location.href = 'https://web.whatsapp.com';
  };

  return (
    <div className="whatsapp-icon" onClick={handleWhatsAppClick}>
         <IoLogoWhatsapp style={{ fontSize: '60px', color: '#25d366' }}/>
    </div>
  );
};

export default WhatsAppIcon;
