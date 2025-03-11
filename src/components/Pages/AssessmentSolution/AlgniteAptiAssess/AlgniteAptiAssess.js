import React from 'react';
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Key } from 'lucide-react';
import MailIcon from '@mui/icons-material/Mail';
import './AlgniteAptiAssess.css'
import { 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';
 

const AlgniteAptiAssess = () => {
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
      title: "Adaptive Test Engine",
      description: "Increases accuracy by challenging high-performers while supporting those who need more foundational questions."
    },
    {
      icon: "📱",
      title: "Comprehensive Performance Reports",
      description: "Enables data-driven decisions for recruitment and training."
    },
    {
      icon: "💬",
      title: "Multi-Device Compatibility",
      description: "Increases participation and convenience for candidates worldwide."
    },
    {
      icon: "👆",
      title: "Attention to Detail",
      description: "Developed in accordance with current patterns to give real-time analysis."
    }
  ];

  const abtCards = [
    {
      
      title: "Logical Reasoning",
      description: "This section measures critical thinking, problem-solving, and the ability to interpret complex information."
    },
    {
      
      title: "Spatial Reasoning",
      description: "Examine visualization, pattern recognition, and spatial orientation through figure-related questions."
    },
    {
      
      title: "Numerical Aptitude",
      description: "This section gauges speed, accuracy, and the ability to work with numerical data."
    },
    {
      
      title: "Verbal Ability",
      description: "Test communication proficiency through grammar, vocabulary, reading comprehension, and sentence correction exercises."
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
          src="/AptiAssess.webm" 
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
        Algnite Apti Assess
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
            <h1 className="neopat-title">About Algnite Apti Assess</h1>
          </div>
          <div className="neo-dis">

          <p className="neopat-description">
          Assess cognitive abilities with precision using AIgnite Apti Assess. 
          Our AI-powered platform evaluates logical reasoning, numerical aptitude, 
          and verbal ability skills to identify top talent. Tailored to meet recruitment 
          and academic needs, AIgnite Apti Assess ensures accurate and unbiased results. 
          With customizable assessments and detailed analytics, it empowers organizations and 
          educators to make data-driven decisions with confidence.
          </p>
          
          <div className='assess-btn'>
          <button 
              className="learn-more-btn animate-on-mount visible"
            >
              view more
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
      <h1 >Features for Accurate Aptitude Evaluation      </h1>
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
          <a href='/Home'><img src="/Zenith.png" alt="Zenith Logo" className="lt-logo" /></a>
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
export default AlgniteAptiAssess;