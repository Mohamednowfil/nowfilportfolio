import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-photo">
          <img src={`${process.env.PUBLIC_URL}/nowfil.jpeg`} alt="Mohamed Nowfil" />
        </div>
        <div className="about-content">
          <h3>MERN Stack Developer</h3>
          <p>
            Hello! I am <a style={{color: "#ffcc00"}}>Mohamed Nowfil</a>, a passionate MERN Stack developer
            with experience in building web applications. I specialize in using
            MongoDB, Express.js, React, and Node.js to create dynamic and
            responsive websites. I am always eager to learn new technologies and
            improve my skills.
          </p>
          <div className="contact-info">
            <p>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:nowfillbk@gmail.com">nowfillbk@gmail.com</a>
            </p>
            <p>
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:+918438825873">+91 8438825873</a>
            </p>
          </div>
          <a href={`${process.env.PUBLIC_URL}/nowfildev.pdf`} download="Nowfil_Resume" className="resume-button">
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
}

export default About;
