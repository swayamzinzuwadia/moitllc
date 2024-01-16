// WhatsAppIcon.jsx

import React, { useState } from 'react';
import './onclickform.css';
import { BsFillBalloonFill } from 'react-icons/bs';

const Onclick = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
      <div className={`contact-form-container ${showForm ? 'open' : ''}`}>
      <div className='contact-sub-main'>
      <div className="form-icon" onClick={handleClick}>
          <BsFillBalloonFill style={{ fontSize: '60px', color: '#25d366' }} />
      </div>
      <div className='contact-form-main'>
        <div className="contact-form">
        <div className='top'>
          
        </div>
        <h2 className='title'>Please Enter Your Details</h2>
        <form classname= 'my-form' onSubmit={onSubmitForm}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message:</label>
                      <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </form>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Onclick;

// <div className="form-icon" onClick={handleClick}>
//           <BsFillBalloonFill style={{ fontSize: '60px', color: '#25d366' }} />
//         </div>
//         <div className='contact-from-main'>
//         <div className="contact-form">
//           <h2 className='title'>Please Enter Your Details</h2>
//           <form classname= 'my-form' onSubmit={onSubmitForm}>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input type="text" id="name" name="name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message:</label>
//               <textarea id="message" name="message" rows="4" required></textarea>
//             </div>
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
