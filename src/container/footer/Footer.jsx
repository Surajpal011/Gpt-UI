import React from 'react';
import './footer.css';
import gpt3logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer sction__padding' >
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="" />
          <p> PT. NO. 42, OM SAI SEVA SOCIETY, DUTTAWADI, NAGPUR </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>LINKS</h4>
          <p>OVERALL</p>
          <p>SOCIAL MEDIA</p>
          <p>COUNTERS</p>
          <p>CONTACT</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>COMPANY</h4>
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
          <p>CONTACT</p>
          
        </div>
        <div className="gpt3__footer-links_div">
          <h4>GET IN TOUCH</h4>
          <p>DUTTAWADI,NAGPUR</p>
          <p>9999999999</p>
          <p>suraj@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2024 GPT-3. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer