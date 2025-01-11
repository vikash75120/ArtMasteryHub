import React from 'react';
import { Input, Button } from 'antd';
import '../styles/contactus.scss';

const Contact = () => {
  return (
    <div id='container'>
      <div id='box'>
        <h1 id='heading'>CONTACT US</h1>
        <div id='inside-box'>
          
            <form id='form'>
              <label>Name</label>
              <input placeholder="Your Name" id="name-input" className="input-field"/>
              <label>Email</label>
              <input  placeholder="Your Email" id="email-input" className="input-field"/>
              <label>Subject</label>
              <input placeholder="Subject Message" id="name-input" className="input-field"/>
              <label>Message</label>
              <Input.TextArea placeholder="Your Message" id="message-input" className="input-field"/>
              <br/>
              <div className="form-button">
              <button type="primary submit" className='submit-button'>SEND MESSAGE</button>
              </div>
            </form>
          
          <div id='image'>
            <img src="https://www.bodiesinmotion.photo/img/BreakDance_Flip.jpg" alt="contactUs-image"/>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Contact