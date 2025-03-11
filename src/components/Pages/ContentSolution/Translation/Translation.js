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
    { icon: <Lightbulb />, name: 'Hindi' },
    { icon: <PenTool />, name: 'English' },
    { icon: <Brain />, name: 'Malayalam' },
    { icon: <Activity />, name: 'Telugu' },
    { icon: <BarChart2 />, name: 'Kannada' },
    { icon: <DollarSign />, name: 'Assamese' },
    { icon: <Monitor />, name: 'Bengali' },
    { icon: <Camera />, name: 'Gujarati' },
    { icon: <Database />, name: 'Konkani' },
    { icon: <Code />, name: 'Manipuri' },
    { icon: <Server />, name: 'Marathi' },
    { icon: <Cpu />, name: 'Odia' },
    { icon: <Server />, name: 'Panjabi' },
    { icon: <Cpu />, name: 'Urdu' },
    { icon: <Cpu />, name: 'Tamil' }
    
  
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
          Translation Services
        </h1>
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
        <img src="./img7.jpg" alt="Relevant Image" />
      </div>
    </div>


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