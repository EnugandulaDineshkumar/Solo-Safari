import React from 'react';
import "./Inspired.css";
import bikeflag from "../../photes/Navbar logo.png";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi';

const Inspired = () => {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com", color: "#E1306C" },
    { icon: <TfiTwitter />, url: "https://www.twitter.com", color: "#1DA1F2" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com", color: "#1877F2" },
    { icon: <FaYoutube />, url: "https://www.youtube.com", color: "#FF0000" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com", color: "#0077B5" },
  ];

  return (
    <div className="inspired-container">
      <p className="inspired-question">Get Inspired</p>
      <img src={bikeflag} alt="flag" className="flag" />
       <p className="subtitle">— Start your ride —</p>
      
      <p className="inspired-text">
        Join our community on social media to fuel your passion for biking.
      </p>
      <div className="inspired-icons">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--hover-color": social.color }}
            className="icon-link"
          >
            {React.cloneElement(social.icon, { size: 30 })}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Inspired;
