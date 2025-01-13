

/*    /*import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function scrollToSection(event, sectionId) {
  event.preventDefault();
  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start"      
  });
}

function Header({ toggleMenu, menuOpen, darkMode, toggleDarkMode }) {
  return (
    <header>
      <nav>
        
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaMoon /> : <FaSun />} 
        </button>
        
       
        <div className="logo">
          <a href="#about">MERN Portfolio</a>
        </div>

        
        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        
        <ul className={menuOpen ? "active" : ""}>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; */


    /*import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function scrollToSection(event, sectionId) {
  event.preventDefault();
  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start"      
  });
}

function Header({ toggleMenu, menuOpen, darkMode, toggleDarkMode }) {
  return (
    <header>
      <nav>
        
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaMoon /> : <FaSun />} 
        </button>
        
       
        <div className="logo">
          <a href="#about">MERN Portfolio</a>
        </div>

        
        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        
        <ul className={menuOpen ? "active" : ""}>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; */

import React from "react";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa"; // Import icons

function scrollToSection(event, sectionId) {
  event.preventDefault();
  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function Header({ toggleMenu, menuOpen, darkMode, toggleDarkMode }) {
  return (
    <header>
      <nav>
        {/* Dark Mode Toggle */}
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>

        {/* Logo */}
        <div className="logo">
          <a href="#about">MERN Portfolio</a>
        </div>

        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="close-icon" />
          ) : (
            <>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </>
          )}
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "active" : ""}>
          <li><a href="#about" onClick={(e) => scrollToSection(e, "#about")}>About</a></li>
          <li><a href="#education" onClick={(e) => scrollToSection(e, "#education")}>Education</a></li>
          <li><a href="#skills" onClick={(e) => scrollToSection(e, "#skills")}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => scrollToSection(e, "#projects")}>Projects</a></li>
          <li><a href="#certifications" onClick={(e) => scrollToSection(e, "#certifications")}>Certifications</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
