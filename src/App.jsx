import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaExternalLinkAlt, FaDownload } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Tikkada.</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
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
          <h1>Tikkada Appala Raju</h1>
          <h2>Full Stack Developer | Web Developer | AI Enthusiast</h2>
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

        <div className="grid-2-col" id="about">
          <section className="card">
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
            <h3>Skills</h3>
            <div className="skills">
              <span>Data Structures & Algorithms</span>
              <span>Problem Solving</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>MySQL</span>
              <span>REST APIs</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>AWS</span>
              <span>Postman</span>
              <span>GitHub</span>
            </div>
          </section>
        </div>

        <section className="card" id="projects">
          <h3>Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h4>
                TrustPay – Gig Worker Support Platform
                <a href="https://trust-pay-ulem.vercel.app/" target="_blank" rel="noopener noreferrer" className="external-link">
                  <FaExternalLinkAlt />
                </a>
              </h4>
              <p>
                Architected and deployed a highly scalable backend platform designed to provide financial 
                security for gig workers. Engineered robust APIs for automated premium contributions 
                and rapid emergency payouts.
              </p>
              <p className="tech-stack"><strong>Tech:</strong> Java, Spring Boot, MySQL, REST APIs</p>
            </div>

            <div className="project-card">
              <h4>Automated Dairy Farm Management System</h4>
              <p>
                Engineered a comprehensive smart management dashboard for dairy farms. Implemented 
                features for real-time inventory tracking, secure payment processing, and efficient 
                farmer record digitization.
              </p>
              <p className="tech-stack"><strong>Tech:</strong> React, Spring Boot, MySQL</p>
            </div>
          </div>
        </section>

        <div className="grid-2-col">
          <section className="card">
            <h3>Education</h3>
            <p>
              <strong>B.Tech in Computer Science Engineering</strong><br />
              Koneru Lakshmaiah Educational Foundation<br />
              CGPA: 8.9
            </p>
          </section>

          <section className="card">
            <h3>Leadership</h3>
            <p>
              <strong>NSS Coordinator at KL University:</strong> Orchestrated large-scale student activities, 
              community outreach programs, and university-wide events, demonstrating strong organizational 
              and cross-functional team management skills.
            </p>
          </section>
        </div>

        <section className="card">
          <h3>Certifications</h3>
          <ul>
            <li>Oracle Cloud Infrastructure 2025 AI Foundations Associate</li>
            <li>Aviatrix Certified Engineer – Multicloud Network Associate</li>
            <li>Essentials Automation Professional</li>
          </ul>
        </section>

        <section className="card contact" id="contact">
          <h3>Contact</h3>
          <p><FaEnvelope /> <a href="mailto:2300030684cseh2@gmail.com" className="contact-link">2300030684cseh2@gmail.com</a></p>
          <p><FaPhone /> <a href="tel:+917032379454" className="contact-link">+91 7032379454</a></p>
          <p><FaGithub /> <a href="https://github.com/2300030684" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/2300030684</a></p>
          <p><FaLinkedin /> <a href="https://www.linkedin.com/in/appalarajutikkada-a7726131a/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/appalarajutikkada-a7726131a</a></p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
