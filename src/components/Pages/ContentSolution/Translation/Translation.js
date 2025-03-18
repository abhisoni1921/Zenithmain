import React from 'react';
import { useRef } from 'react';
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Key } from 'lucide-react';
import MailIcon from '@mui/icons-material/Mail';
import { Lightbulb, PenTool, Brain, Activity, 
    BarChart2, DollarSign, Monitor, Camera, 
    Database, Code, Server, Cpu } from 'lucide-react';
import { 
  FaLanguage,
  FaGlobe,
  FaBookOpen,
  FaBook,
  FaFileAlt,
  FaFont,
  FaPenNib,
  FaScroll,
  FaFeather,
  FaPen,
  FaQuoteRight,
  FaAlignRight,
  FaBookReader,
  FaParagraph,
  FaAlignLeft
} from 'react-icons/fa';
import { 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';
import './Translation.css'
 

const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
};



const Translation = () => {
  const currentYear = new Date().getFullYear();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const SectionTitle = ({ children }) => {
    const titleRef = useIntersectionObserver();
    
    return (
      <div className="section-title-container">
        <h2 className="section-title" ref={titleRef}>
          {children}
        </h2>
      </div>
    );
  };


  const features = [
    {
      icon: "⚙️",
      title: "Expert Translators  ",
      description: "Collaborations with native-speaking professionals for accurate context."
    },
    {
      icon: "📱",
      title: "Multi-Stage Review ",
      description: "Content goes through translation, editing, and proofreading."
    },
    {
      icon: "💬",
      title: "Secure and Confidential ",
      description: "We prioritize data security with encrypted workflows, ensuring the safety and confidentiality of your content."
    },
    {
      icon: "👆",
      title: "Cultural Sensitivity and Relevance",
      description: "We adapt content to suit cultural nuances, ensuring learners from different backgrounds connect with the material."
    }
  ];

  const categories = [
    { icon: <FaLanguage size={20} />, name: 'Hindi' },
    { icon: <FaGlobe size={20} />, name: 'English' },
    { icon: <FaBookOpen size={20} />, name: 'Malayalam' },
    { icon: <FaBook size={20} />, name: 'Telugu' },
    { icon: <FaParagraph size={20} />, name: 'Kannada' },
    { icon: <FaFileAlt size={20} />, name: 'Assamese' },
    { icon: <FaFont size={20} />, name: 'Bengali' },
    { icon: <FaPenNib size={20} />, name: 'Gujarati' },
    { icon: <FaScroll size={20} />, name: 'Konkani' },
    { icon: <FaFeather size={20} />, name: 'Manipuri' },
    { icon: <FaBookReader size={20} />, name: 'Marathi' },
    { icon: <FaPen size={20} />, name: 'Odia' },
    { icon: <FaQuoteRight size={20} />, name: 'Punjabi' },
    { icon: <FaAlignRight size={20} />, name: 'Urdu' },
    { icon: <FaAlignLeft size={20} />, name: 'Tamil' }
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
          src="/LMS.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="overlay"></div>
      
      <div className="content">
        <div className="animated-text-container">
          <div className="animated-text">
            <span className="text-gradient">Translation</span>
            <span className="text-gradient">Services</span>
            <div className="subtitle-text">Breaking Language Barriers</div>
          </div>
          <div className="animated-underline"></div>
          <div className="floating-elements">
            <span>🌍</span>
            <span>💬</span>
            <span>📝</span>
            <span>🔄</span>
            <span>📚</span>
          </div>
          <div className="glowing-orbs">
            <div className="orb orb1"></div>
            <div className="orb orb2"></div>
            <div className="orb orb3"></div>
          </div>
          <style jsx>{`
            .animated-text-container {
              text-align: center;
              margin-bottom: 2rem;
              opacity: 0;
              animation: fadeIn 1s ease-out forwards;
              position: relative;
              padding: 2rem;
              border-radius: 15px;
              background: rgba(0, 0, 0, 0.2);
              backdrop-filter: blur(10px);
            }

            .animated-text {
              font-size: 4.5rem;
              font-weight: bold;
              line-height: 1.2;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.5rem;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }

            .subtitle-text {
              font-size: 1.5rem;
              color: #fff;
              margin-top: 1rem;
              opacity: 0;
              animation: slideIn 1s ease-out 1s forwards;
              text-shadow: 0 0 10px rgba(255,255,255,0.5);
            }

            .text-gradient {
              background: linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7D1, #9B5DE5);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              animation: shimmer 3s infinite linear;
              background-size: 300% 100%;
              transition: transform 0.3s ease;
              position: relative;
            }

            .text-gradient:hover {
              transform: scale(1.05);
              filter: brightness(1.2);
            }

            .text-gradient::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
              transform: translateX(-100%);
              animation: shine 3s infinite;
            }

            .animated-underline {
              width: 0;
              height: 4px;
              background: linear-gradient(90deg, #FF6B6B, #4ECDC4, #45B7D1, #9B5DE5);
              margin: 1rem auto 0;
              animation: expandLine 1.5s ease-out forwards;
              border-radius: 2px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            }

            .floating-elements {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              pointer-events: none;
            }

            .floating-elements span {
              position: absolute;
              font-size: 2.5rem;
              animation: float 3s infinite ease-in-out;
              opacity: 0.8;
              filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
            }

            .floating-elements span:nth-child(1) { left: 10%; animation-delay: 0s; }
            .floating-elements span:nth-child(2) { left: 30%; animation-delay: 0.5s; }
            .floating-elements span:nth-child(3) { left: 50%; animation-delay: 1s; }
            .floating-elements span:nth-child(4) { left: 70%; animation-delay: 1.5s; }
            .floating-elements span:nth-child(5) { left: 90%; animation-delay: 2s; }

            .glowing-orbs {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              overflow: hidden;
              z-index: -1;
            }

            .orb {
              position: absolute;
              border-radius: 50%;
              filter: blur(30px);
              opacity: 0.5;
              animation: orbFloat 8s infinite ease-in-out;
            }

            .orb1 {
              width: 150px;
              height: 150px;
              background: #FF6B6B;
              left: 10%;
              top: 20%;
            }

            .orb2 {
              width: 200px;
              height: 200px;
              background: #4ECDC4;
              right: 10%;
              top: 40%;
              animation-delay: -2s;
            }

            .orb3 {
              width: 120px;
              height: 120px;
              background: #9B5DE5;
              left: 50%;
              bottom: 20%;
              animation-delay: -4s;
            }

            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-30px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @keyframes shimmer {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            @keyframes shine {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }

            @keyframes expandLine {
              from { width: 0; opacity: 0; }
              to { width: 400px; opacity: 1; }
            }

            @keyframes float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }

            @keyframes orbFloat {
              0%, 100% { transform: translateY(0) scale(1); }
              50% { transform: translateY(-30px) scale(1.1); }
            }

            @keyframes slideIn {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }

            @media (max-width: 768px) {
              .animated-text {
                font-size: 3rem;
              }
              .subtitle-text {
                font-size: 1.2rem;
              }
              .animated-underline {
                width: 200px;
              }
            }
          `}</style>
        </div>

        
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
  
      </div>
    </div>

    
    <div className="aptitude-section">
      <div className="content">
        <h1>Bridging Language Gaps for Global Learning
        </h1>
        <p>
        Expand your reach with our comprehensive Translation Services. We ensure accurate and culturally relevant translations, helping you connect with diverse audiences effortlessly.
</p>
        <h2>What We Offer        </h2>
        <ul className="li-list">
          <li>Multilingual Content Development </li>
          <li>Document Translation </li>
          <li>Localized Adaptations </li>
          <li>Editing and proofreading </li>
          
        </ul>
      </div>
      <div className="image">
        <img src="/img7.jpg" alt="Relevant Image" />
      </div>
    </div>

    <div className='T-container'>
    <div className="course-categories">

      <div className="cour-title">
      <div className="header">
      <h1 >Empowering Every Industry with Tailored Learning Solutions</h1>
      </div>
      </div>
      
      <div className="categories-grid-t">
        {categories.map((category, index) => (
          <div key={index} className="category-card-t">
            <div className="icon-container">
              {category.icon}
            </div>
            <span>{category.name}</span>
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
export default Translation;