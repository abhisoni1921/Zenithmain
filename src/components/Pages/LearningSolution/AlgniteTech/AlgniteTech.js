import React from 'react';
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Key } from 'lucide-react';
import MailIcon from '@mui/icons-material/Mail';
import './AlgniteTech.css'
 

const AlgniteTech = () => {
  const currentYear = new Date().getFullYear();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const features = [
    {
      // icon: <Pencil size={24} />,
      title: "Master Aptitude Skills with AI-Powered Insights",
      description: "Crack the toughest placement and competitive exams with ease. Our AIgnite Apti program leverages AI-powered analytics to enhance your problem-solving abilities and analytical thinking."
    },
    {
      icon: <Key size={24} />,
      title: "Key highlights",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit odio dolorem obcaecati assumenda voluptatem, quod illum ab blanditiis nostrum ex fugiat.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit odio dolorem obcaecati assumenda voluptatem, quod illum ab blanditiis nostrum ex fugiat."   
    }
  ];
  


  return (
    <div className="Learning-container">
      <div className="header-container">
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/TECH.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="overlay"></div>
      <div className="background-animation">
        {[...Array(50)].map((_, index) => (
          <div 
            key={index} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      <div className="content">

        <h1 className="title">
          Algnite Tech 
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
  
      </div>
    </div>

    
    <div className="aptitude-section">
      <div className="content">
        <h1>Upskill with AI-Enhanced Technical Training</h1>
        <p>
        Stay ahead in the tech world with industry-relevant skills. AIgnite Tech combines expert guidance with AI-driven coding assessments for a successful career.
        </p>
        <h2>Key highlights</h2>
        <ul>
          <li>Hands-on coding experience with the latest programming languages          </li>
          <li>AI-enabled code evaluation and performance analytics          </li>
          <li>Placement-oriented practice sessions          </li>
          <li>Curriculum-Based Training          </li>
        </ul>
      </div>
      <div className="image">
        <img src="./img7.jpg" alt="Relevant Image" />
      </div>
    </div>

    <div className="ct-features-container">
          {/* <motion.h1 
            className="ct-features-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Content <span>Feature</span>
          </motion.h1> */}
          <div className="header">
          <h1>Our Content Feature</h1>
          </div>
    
          <div className="ct-features-grid">
            {/* First Feature Card */}
            <motion.div
              className="ct-feature-card1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="ct-feature-content">
                <h2>Instant Code Execution Platform</h2>
                <p>Practice coding in an interactive environment with instant compiler feedback and AI-powered hints.
                Work on real-world coding challenges and refine your problem-solving skills.</p>
              </div>
              <div className="ct-feature-image">
                <img src="/img7.jpg" alt="Demo import interface" className="ct-main-image" />
                <div className="ct-feature-icon">
                  <svg viewBox="0 0 24 24" className="ct-icon">
                    <path d="M13 5l7 7-7 7M5 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </motion.div>
    
            {/* Second Feature Card */}
            <motion.div
              className="ct-feature-card1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="ct-feature-content">
                <h2>Extensive Code Review Process</h2>
                <p>Receive AI-driven feedback on code efficiency, structure, and readability to enhance your coding skills.
                Collaborate with peers and industry experts to gain deeper insights and best practices.
                </p>
              </div>
              <div className="ct-feature-image">
                <img src="/img8.jpg" alt="Real-time editing interface" className="ct-main-image" />
                <div className="ct-elementor-icon">
                  <svg viewBox="0 0 24 24" className="ct-icon">
                    <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </motion.div>
            {/* 3rd Feature Card */}
            <motion.div
              className="ct-feature-card1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="ct-feature-content">
                <h2>Performance Analytics and Insights</h2>
                <p>Get in-depth performance reports that highlight your strengths and areas to improve, providing actionable insights to optimize your preparation strategy and accelerate your coding growth.
                </p>
              </div>
              <div className="ct-feature-image">
                <img src="/img11.jpg" alt="Real-time editing interface" className="ct-main-image" />
                <div className="ct-elementor-icon">
                  <svg viewBox="0 0 24 24" className="ct-icon">
                    <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

    

        <div className="Footer-gap"></div>
        <footer className="footer-container">
      <div className="top-section">
        <div className="logo-section">
          <img src="/Zenith.png" alt="Zenith Logo" className="lt-logo" />
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>CollegeConnect</h3>
            <ul>
              <li>Integrated Degree Programs</li>
              <li>Employability Skilling Programs</li>
              <li>Courses - Core Engineering & IT</li>
              <li>IITM Parvartak Joint Certification Programs</li>
              <li>Certification Courses - Commerce & Science</li>
              <li>Specialization Stacks - Commerce & Science</li>
              <li>Assessment Solutions</li>
              <li>Immersion</li>
              <li>Academic Partners</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Workonnect</h3>
            <ul>
              <li>Before Joining Programme</li>
              <li>Hire Train Deploy Model</li>
              <li>Role/Product Based-Skilling</li>
              <li>Assessment Solutions</li>
              <li>Enterprise Partners</li>
            </ul>
            <h3>Other Initiatives</h3>
            <ul>
              <li>Emerging Tech</li>
              <li>Skill Exchange</li>
              <li>Engineers Ensemble</li>
              <li>Micro Learning</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Capabilities</li>
              <li>Core Solutions</li>
              <li>Leadership</li>
              <li>Mentors</li>
              <li>Experts</li>
              <li>Blogs</li>
              <li>EduTech Connect</li>
              <li>Newsroom</li>
              <li>Events</li>
              <li>Testimonials</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Address: 207, 1st floor, Sainik Vihar,</p>
            <p>Pitampura, Delhi, India - 110034</p>
            <p><MailIcon/><a href="mailto:contact@lntedutech.com">info@zenithindia.org</a></p>

            <h3>Support</h3>
            <p>Learning Management System:</p>
            <p><MailIcon/><a href="mailto:contact@lntedutech.com">info@zenithindia.org</a></p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <img src="" alt="CMMI Logo" className="cmmi-logo" />
        <p>© {currentYear} All rights reserved. zenith education sol. pvt. ltd.</p>
        <div className="bottom-links">
          <a href="#">Support</a>
          <span>|</span>
          <a href="#">Disclaimer</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
    </div>
  );
};
export default AlgniteTech;