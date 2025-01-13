
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons

function Socials() {
  return (
    <div className="socials-container">
      <h3>Get in Touch</h3>
      <div className="socials-links">
        <a href="https://www.linkedin.com/in/mohamednowfil/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/Mohamednowfil" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="mailto:nowfillbk@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a href="tel:+918438825873">
          <FaPhoneAlt /> +91 8438825873
        </a>
      </div>
    </div>
  );
}

export default Socials;
