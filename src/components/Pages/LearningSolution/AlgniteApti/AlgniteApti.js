import React from 'react';
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Key } from 'lucide-react';
import MailIcon from '@mui/icons-material/Mail';
import { 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';
import './AlgniteApti.css'
 

const AlgniteApti = () => {
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
          src="/APTI.webm" 
          type="video/webm" 
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
          Algnite Apti 
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
  
      </div>
    </div>

    
    <div className="aptitude-section">
      <div className="content">
        <h1>Master Aptitude Skills with AI-Powered Insights</h1>
        <p>
          Crack the toughest placement and competitive exams with ease. Our Algnite Apti program leverages AI-powered analytics to enhance your problem-solving abilities and analytical thinking.
        </p>
        <h2>Key highlights</h2>
        <ul>
          <li>Comprehensive coverage of Quantitative, Logical, and Verbal Aptitude</li>
          <li>AI-driven performance tracking and personalized learning paths</li>
          <li>Practice with real placement papers and adaptive mock tests</li>
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
                <h2>Smart Practice with Adaptive Tests                </h2>
                <p>Experience AI-driven adaptive tests that adjust to your skill level, ensuring effective and personalized practice. These tests analyze your performance in real time, identifying strengths and areas for improvement. 
                </p>
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
                <h2>Company-Focused Preparation</h2>
                <p>Access a vast repository of questions covering all aptitude topics relevant to specific companies. Stay ahead with regularly updated content designed to match evolving industry standards.
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
            <a href="#"><i className="fab fa-linkedin"><FaLinkedin /></i></a>
            <a href="#"><i className="fab fa-facebook"><FaFacebook /></i></a>
            <a href="#"><i className="fab fa-youtube"><FaYoutube /></i></a>
            <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
            <a href="#"><i className="fab fa-twitter"><FaTwitter /></i></a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>Content Solutions</h3>
            <ul>
            <li><a href='/LearningContentSolution'>Learning Content Solution</a></li>
              <li>Adaptive Learning</li>
              <li>Virtual Instructor-Led Learning</li>
              <li>Animated Learning</li>
              <li>Gamification</li>
              <li>K12 Learning</li>
              <li>Micro Learning</li>
              <li>Assessment Content Solutions</li>
              <li><a href='/Translation'>Translation Services</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Learning</h3>
            <ul>
              <li><a href='/AlgniteApti'>Algnite Apti</a></li>
              <li><a href='/AlgniteTech'>Algnite Tech</a></li>
              <li><a href='/AlgniteCommune'>Algnite Commune</a></li>
              <li><a href='/AlgniteLab'>Algnite Lab</a></li>
              <li><a href='/AlgniteLMS'>Algnite LMS</a></li>
            </ul>
            <h3>Assessment</h3>
            <ul>
            <li><a href='/AlgniteAptiAssess'>Algnite Apti Assess</a></li>
            <li><a href='/AlgniteTechAssess'>Algnite Tech Assess</a></li>
            <li><a href='/AlgniteMindAssess'>Algnite Mind Assess</a></li>
            <li><a href='/AlgniteHIRE'>Algnite HIRE</a></li>             
            <li><a href='/AlgniteAssess360'>Algnite Assess360</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Discover Us</h3>
            <ul>
              <li>About ZESPL</li>
              <li>Leadership</li>

            </ul>
            <h3>Resources</h3>
            <ul>
              <li>Subject-Matter Expert</li>
              <li>Translators</li>
              <li>Editors</li>
              <li>Copywriters</li>
              <li>Digital Design Providers</li>
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
        {/* <img src="" alt="CMMI Logo" className="cmmi-logo" /> */}
        <p>© {currentYear} All rights reserved. Zenith Education Sol. Pvt. Ltd.</p>
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
export default AlgniteApti;