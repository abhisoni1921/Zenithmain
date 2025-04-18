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
      <style>
        {`
          @keyframes gradientText {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%; 
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes slideInFromBottom {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .title {
            font-size: 4rem !important;
            font-weight: 700;
            background: linear-gradient(
              90deg,
              #0d47a1,
              #4a90e2,
              #03a2ca,
              #0d47a1
            );
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradientText 6s ease infinite,
                       slideInFromBottom 1.5s ease-out forwards;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            letter-spacing: 2px;
            text-align: center;
            margin-bottom: 1rem;
            padding: 0.5rem;
            transition: transform 0.3s ease;
          }

          .title:hover {
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .title {
              font-size: 2.5rem !important;
            }
          }
        `}
      </style>
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
          
          {/* <div className='assess-btn'>
          <button 
              className="learn-more-btn animate-on-mount visible"
            >
              view more
            </button>
            </div> */}
          </div>
        </div>
        
        <div className="neopat-image-container">
          <div className="neopat-image">
          <img src="/apti assesss1.png" alt="Relevant Image" />
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
          <a href='/Home'><a href='/Home'><img src="/Znew.png" alt="Zenith Logo" className="lt-logo" /></a></a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/zenith-consultants-india/"><i className="fab fa-linkedin"><FaLinkedin /></i></a>
            <a href="#"><i className="fab fa-facebook"><FaFacebook /></i></a>
            {/* <a href="#"><i className="fab fa-youtube"><FaYoutube /></i></a> */}
            <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
            {/* <a href="#"><i className="fab fa-twitter"><FaTwitter /></i></a> */}
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>Content </h3>
            <ul>
            <li><a href='/LearningContentSolution'>Learning Content</a></li>
              
              
              <li>Assessment Content </li>
              <li><a href='/Translation'>Translation Services</a></li>
            </ul>
            <h3 ><a href='/DiscoverUs' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Discover Us</a></h3>

            <h3 ><a href='/Resources' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Resources</a></h3>

            
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
          
          </div>
          <div className="footer-section">
            
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
            <h3>Contact</h3>
            <p>Address: H-81 Sector 63 </p>
            <p>Noida, Uttar Pradesh, India - 201301</p>
            <p><MailIcon/><a href="mailto:contact@lntedutech.com">info@zenithindia.org</a></p>

            <h3 ><a href='/Career' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Careers</a></h3>

            <h3 ><a href='/Contact' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Submit a Query</a></h3>
            
            {/* <p><MailIcon/><a href="mailto:contact@lntedutech.com">info@zenithindia.org</a></p> */}
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