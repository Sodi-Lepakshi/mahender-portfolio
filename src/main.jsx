import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const Portfolio = () => {
  useEffect(() => {
    const revealElements = () => {
      document.querySelectorAll(".reveal").forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.style.transitionDelay = `${index * 0.15}s`;
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", revealElements);
    revealElements();
    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <h1 className="title">Mahender Esampelly</h1>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">Hello, I'm <span className="highlight">Mahender</span></h2>
          <p className="hero-subtitle typing">Digital Marketing Expert</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn hire-btn">Get in Touch</a>
            <a href="#projects" className="btn projects-btn">Explore Projects</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about reveal">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <img
            src="profile-img.png"
            alt="Mahender Esampelly"
            className="profile-img"
          />
          <p className="section-text">
            I'm a passionate <span className="highlight">Digital Marketing professional</span> 
            dedicated to driving business growth through innovative strategies. 
            With expertise in <span className="highlight">social media management</span>, 
            <span className="highlight"> analytics</span>, and 
            <span className="highlight"> content creation</span>, I deliver impactful 
            results while constantly evolving my skills to stay ahead in the 
            dynamic digital landscape.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section reveal">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card"><i className="fas fa-chart-line"></i> Google Ads & Analytics</div>
          <div className="skill-card"><i className="fab fa-instagram"></i> Social Media Marketing</div>
          <div className="skill-card"><i className="fas fa-paint-brush"></i> Canva Design</div>
          <div className="skill-card"><i className="fas fa-file-excel"></i> Microsoft Office Suite</div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section reveal">
        <h2 className="section-title">Education</h2>
        <ul className="education-list">
          <li><i className="fas fa-graduation-cap"></i> 2021 - S.S.C - Sri Rama High School</li>
          <li><i className="fas fa-graduation-cap"></i> 2023 - Intermediate (CEC) - Tapasya Jr College</li>
          <li><i className="fas fa-graduation-cap"></i> 2025 - B.Com (Computer Applications) - Tapasya Degree College</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="section reveal">
        <h2 className="section-title">Projects</h2>
        <div className="project-card">
          <p>Discover my work in digital marketing:</p>
          <a
            href="https://drive.google.com/drive/folders/1YPEVZjDTjQIwzPOHxVYchPeKgz6TIy1Q"
            className="project-btn"
            target="_blank"
            rel="noreferrer"
          >
            📂 Project Portfolio
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section reveal">
        <h2 className="section-title">Contact</h2>
        <div className="contact-info">
          <p><i className="fas fa-phone"></i> +91 9573323074</p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:emahil999@gmail.com" className="link">mahenderesampellyy@gmail.com</a></p>
          <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/mahender-esampelly-4a357526b" className="link" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-line"></div>
        <p>© 2025 Mahender Esampelly | All Rights Reserved</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio />);
