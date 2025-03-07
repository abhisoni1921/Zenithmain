import React from 'react';
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Key } from 'lucide-react';
import MailIcon from '@mui/icons-material/Mail';
import './AlgniteMindAssess.css'
 

const AlgniteMindAssess = () => {
  const currentYear = new Date().getFullYear();
  
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay before starting animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);


  const features = [
    {
      icon: "⚙️",
      title: "Unbiased Evaluation",
      description: "Conduct assessments that are culturally neutral and free from foreign biases."
    },
    {
      icon: "📱",
      title: "Tailored Assessments",
      description: "Customize assessments to align with specific job roles and organizational needs."
    },
    {
      icon: "💬",
      title: "Scalable for Bulk Hiring",
      description: "Efficiently manage high-volume recruitment with assessments designed to handle large candidate pools."
    },
    {
      icon: "👆",
      title: "Clear and Actionable Insights",
      description: "Receive easy-to-understand reports that provide meaningful insights into a candidate's personality and behavioral traits."
    }
  ];


  const abtCards = [
    {
      
      title: "General Personality Assessment",
      description: "Measures the Big Five personality traits, including emotional stability, openness to experience, extraversion, agreeableness, and conscientiousness."
    },
    {
      
      title: "Situational Judgment Tests (SJT) ",
      description: " Evaluates decision-making and problem-solving skills by presenting hypothetical scenarios."
    },
    {
      
      title: "Work Style Assessment",
      description: "Assesses work preferences, such as teamwork, leadership, and adaptability."
    },
    {
      
      title: "Basic Skills Tests",
      description: "Measures skills such as communication skills, problem-solving abilities, and time management."
    },
    
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
          src="/Mind.webm" 
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
        Algnite Mind Assess
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
  
      </div>
    </div>

    <div className={`neopat-container ${isVisible ? 'visible' : ''}`}>
      <div className="neopat-content">
        <div className="neopat-text-container">
          <div className="neopat-logo">
            <div className="neopat-speech-bubble"></div>
            <h1 className="neopat-title">About Algnite Mind Assess</h1>
          </div>
          <div className="neo-dis">

          <p className="neopat-description">
          Understand candidates beyond technical skills with AIgnite Personality Access.
           Our AI-driven platform assesses behavioral traits and emotional intelligence 
           to ensure the right cultural fit and team dynamics. By leveraging advanced 
           algorithms, it provides deep insights into interpersonal strengths and 
           adaptability. This holistic approach helps build high-performing teams 
           aligned with organizational values.
          </p>
          
          <div className='assess-btn'>
          <button 
              className="learn-more-btn animate-on-mount visible"
            >
              Learn more
            </button>
            </div>
          </div>
        </div>
        
        <div className="neopat-image-container">
          <div className="neopat-image">
          <img src="https://iamneo.ai/wp-content/uploads/2023/06/neo_coder_about-1.png" alt="Relevant Image" />
          </div>
        </div>
      </div>
    </div>


    <div className="ABT">
    <div className="abt-container">
      <div className="abt-header">
        <h1>What We Cover?</h1>
        
      </div>
      <div className="abt-grid">
        {abtCards.map((card, index) => (
          <div key={index} className="abt-card">
            <div className="abt-header-group">
              
              <h3 className="abt-title">{card.title}</h3>
            </div>
            <p className="abt-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

<div className="F-con">
    <div className="F-Title">
<div className="header">
      <h1 >Comprehensive Features for Holistic Personality Analysis
      </h1>
      </div>
      </div>
    <div className="f-container">
      {features.map((feature, index) => (
        <div key={index} className="f-card">
          <div className="f-icon">{feature.icon}</div>
          <h3 className="f-title">{feature.title}</h3>
          <p className="f-description">{feature.description}</p>
        </div>
      ))}
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
export default AlgniteMindAssess;