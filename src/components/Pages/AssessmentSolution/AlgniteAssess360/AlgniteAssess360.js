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
import './AlgniteAssess360.css'
 

const AlgniteAssess360 = () => {
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
      title: "Multi-Source Feedback Collection ",
      description: "Gather feedback from multiple sources for well-rounded evaluations"
    },
    {
      icon: "📱",
      title: "Confidential and Anonymous Inputs ",
      description: "Ensure honest feedback with secure and anonymous input channels."
    },
    {
      icon: "💬",
      title: "Confidential and Anonymous Inputs ",
      description: "Ensure honest feedback with secure and anonymous input channels."
    },
    {
      icon: "👆",
      title: "Customizable Assessment Frameworks",
      description: "Design flexible evaluation criteria tailored to different roles and organizational needs."
    }
  ];

  const abtCards = [
    {
      
      title: "Peer Feedback",
      description: "Collect constructive feedback from colleagues for balanced evaluations."
    },
    {
      
      title: "Manager Reviews",
      description: "Gain leadership insights on employee performance and growth potential."
    },
    {
      
      title: "Customer Feedback",
      description: "Include external client feedback for roles involving direct customer interactions."
    },
    {
      
      title: "Self-Assessments",
      description: "Empower individuals to reflect on their strengths and areas of improvement."
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
          src="/AssessContent.webm" 
          type="video/webm" 
        />
      </video>
      <div className="overlay"></div>
      
      {/* Animated shapes */}
      <div className="animated-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>

      <div className="content">
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

          @keyframes morphShape {
            0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
            50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
            100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          }

          .animated-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
          }

          .shape {
            position: absolute;
            opacity: 0.15;
            pointer-events: none;
            animation: morphShape 8s ease-in-out infinite;
          }

          .shape1 {
            width: 120px;
            height: 120px;
            background: linear-gradient(45deg, #FF6B6B, #FF8E53);
            top: 20%;
            left: 10%;
          }

          .shape2 {
            width: 150px;
            height: 150px;
            background: linear-gradient(45deg, #4E65FF, #92EFFD);
            top: 40%;
            right: 15%;
          }

          .shape3 {
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #A17FE0, #5D26C1);
            bottom: 20%;
            left: 20%;
          }

          .shape4 {
            width: 130px;
            height: 130px;
            background: linear-gradient(45deg, #59C173, #5D26C1);
            bottom: 30%;
            right: 20%;
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
            position: relative;
            z-index: 2;
            left: 0rem;
          }

          .title:hover {
            transform: scale(1.05);
          }

          .divider {
            width: 200px;
            height: 4px;
            background: linear-gradient(90deg, #000000, #4E65FF, #A17FE0);
            margin: 20px auto;
            border-radius: 2px;
          }

          .subtitle {
            font-size: 1.2rem;
            color: #f8fafe;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
            animation: slideInFromBottom 1.5s ease-out 0.3s forwards;
            opacity: 0;
            position: relative;
            z-index: 2;
          }

          @media (max-width: 768px) {
            .title {
              font-size: 2.5rem !important;
            }
            .subtitle {
              font-size: 1rem;
              padding: 0 20px;
            }
            .divider {
              width: 150px;
            }
          }
        `}
      </style>
        <h1 className="title">
          Algnite Assess360
        </h1>
        <div className="divider"></div>
        <p className="subtitle">
          Transform your performance evaluation process with our comprehensive 360-degree feedback system.
          Leverage AI-powered insights to drive meaningful employee development and organizational growth.
        </p>
      </div>
    </div>

    <div className={`neopat-container ${isVisible ? 'visible' : ''}`}>
      <div className="neopat-content">
        <div className="neopat-text-container">
          <div className="neopat-logo">
            <div className="neopat-speech-bubble"></div>
            <h1 className="neopat-title">About Algnite Assess360</h1>
          </div>
          <div className="neo-dis">

          <p className="neopat-description">
          Achieve a comprehensive evaluation approach with AIgnite Assess360. 
          By gathering feedback from peers, managers, and self-assessments, 
          it provides a 360-degree view of an individual’s performance and potential. 
          This AI-powered tool identifies strengths and areas for growth with precision, 
          integrates seamlessly into existing HR systems, and delivers actionable insights 
          to foster employee development. Elevate talent management with a holistic, data-driven perspective.
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
          <img src="/assess360.png" alt="Relevant Image" />
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
      <h1 >360-Degree Assessment Features for Holistic Evaluation
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
export default AlgniteAssess360;