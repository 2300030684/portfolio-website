import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaExternalLinkAlt, FaDownload, FaCode, FaPaperPlane } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Tikkada.</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tikkada Appala Raju. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="container" id="home">
        <header className="hero">
          <div className="profile-img-container">
            <img src="/profile.jpg" alt="Tikkada Appala Raju" className="profile-img" />
          </div>
          <div className="availability-badge">
            <span className="pulse-dot"></span>
            Available for Opportunities
          </div>
          <h1>Tikkada Appala Raju</h1>
          <h2 className="typing-container">
            <span className="typing-text">Full Stack Developer | AI Enthusiast</span>
          </h2>
          <p>
            Results-driven Computer Science Engineering student specializing in Java Full Stack
            Development. Adept at architecting scalable web applications and integrating modern 
            technologies to solve complex technical challenges.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://drive.google.com/file/d/1vRsG0QFz4ZA0oLOUDzoi9LViNIaxcoq4/view?usp=drive_link" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt className="btn-icon" /> Resume</a>
          </div>
        </header>

        <section className="card" id="about">
          <h3>About Me</h3>
          <p>
            As a final-year B.Tech CSE candidate at Koneru Lakshmaiah Educational Foundation,
            I possess a strong foundation in software engineering principles, database management, 
            and Data Structures & Algorithms (DSA). I am highly passionate about designing robust, full-stack solutions 
            and consistently apply rigorous analytical problem-solving to bridge the gap between complex backend logic 
            and seamless user experiences.
          </p>
        </section>

        <section className="card" id="skills">
          <h3>Categorized Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Core CS & Logic</h4>
              <div className="skills">
                <span>Data Structures & Algorithms</span>
                <span>Problem Solving</span>
                <span>Object-Oriented Programming</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="skills">
                <span>Java</span>
                <span>JavaScript</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Frontend</h4>
              <div className="skills">
                <span>React</span>
                <span>HTML5</span>
                <span>CSS3</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Backend & DB</h4>
              <div className="skills">
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Tools & Cloud</h4>
              <div className="skills">
                <span>AWS</span>
                <span>Postman</span>
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card" id="cp">
          <h3>Competitive Programming</h3>
          <div className="cp-grid">
            <a href="#" target="_blank" rel="noopener noreferrer" className="cp-card">
              <FaCode className="cp-icon" />
              <h4>LeetCode</h4>
              <p>View Profile &rarr;</p>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="cp-card">
              <FaCode className="cp-icon" />
              <h4>HackerRank</h4>
              <p>View Profile &rarr;</p>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="cp-card">
              <FaCode className="cp-icon" />
              <h4>CodeChef</h4>
              <p>View Profile &rarr;</p>
            </a>
          </div>
        </section>

        <section className="card" id="projects">
          <h3>Featured Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h4>
                TrustPay – Gig Worker Platform
                <a href="https://trust-pay-ulem.vercel.app/" target="_blank" rel="noopener noreferrer" className="external-link">
                  <FaExternalLinkAlt />
                </a>
              </h4>
              <p>
                Architected and deployed a highly scalable backend platform designed to provide financial 
                security for gig workers. Engineered robust APIs for automated premium contributions 
                and rapid emergency payouts.
              </p>
              <div className="tech-stack-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="project-card">
              <h4>Automated Dairy Farm System</h4>
              <p>
                Engineered a comprehensive smart management dashboard for dairy farms. Implemented 
                features for real-time inventory tracking, secure payment processing, and efficient 
                farmer record digitization.
              </p>
              <div className="tech-stack-tags">
                <span>React</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card" id="timeline">
          <h3>Journey & Milestones</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>B.Tech in Computer Science Engineering</h4>
                <h5>Koneru Lakshmaiah Educational Foundation (CGPA: 8.9)</h5>
                <p>Focused on advanced software engineering, data structures, and database systems.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>NSS Coordinator</h4>
                <h5>KL University</h5>
                <p>Orchestrated large-scale student activities, community outreach programs, and university-wide events, demonstrating strong organizational and cross-functional team management skills.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Oracle Cloud Infrastructure 2025 AI Foundations Associate</h4>
                <h5>Certification</h5>
                <p>Gained fundamental knowledge of AI concepts and Oracle Cloud AI services.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Aviatrix Certified Engineer</h4>
                <h5>Multicloud Network Associate</h5>
                <p>Certified in multicloud networking architecture and cloud-native networking constructs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card" id="contact">
          <h3>Get In Touch</h3>
          <div className="contact-container">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p>Feel free to reach out for collaborations or just a friendly chat.</p>
              <div className="contact-links">
                <p><FaEnvelope /> <a href="mailto:2300030684cseh2@gmail.com" className="contact-link">2300030684cseh2@gmail.com</a></p>
                <p><FaPhone /> <a href="tel:+917032379454" className="contact-link">+91 7032379454</a></p>
                <p><FaGithub /> <a href="https://github.com/2300030684" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/2300030684</a></p>
                <p><FaLinkedin /> <a href="https://www.linkedin.com/in/appalarajutikkada-a7726131a/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/appalarajutikkada-a7726131a</a></p>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
              <h4>Send a Message</h4>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit"><FaPaperPlane /> Send Message</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
