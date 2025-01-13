import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Background Animation */}
      <BackgroundAnimation darkMode={darkMode} />

      {/* Main Content */}
      <div className="content">
        <Header
          toggleMenu={toggleMenu}
          menuOpen={menuOpen}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="socials">
          <Socials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
