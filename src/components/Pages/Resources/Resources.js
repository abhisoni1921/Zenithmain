import React from 'react';

import  { useEffect } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import './Resources.css';

import { Lightbulb, PenTool, Brain, Activity, 
  BarChart2, DollarSign, Monitor, Camera, 
  Database, Code, Server, Cpu } from 'lucide-react';
  import { Play, Phone, Laptop, GraduationCap } from 'lucide-react';
  import { 
    FaLinkedin, 
    FaFacebook, 
    FaYoutube, 
    FaInstagram, 
    FaTwitter 
  } from 'react-icons/fa';


const Resources = () => {
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };
    

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    const sections = document.querySelectorAll(
      '.about-section, .vision-mission, .about-logo, .about-colors, .founders, .useful-links, .contact'
    );

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const categories = [
    { icon: <Lightbulb />, name: 'Business' },
    { icon: <PenTool />, name: 'Arts & Design' },
    { icon: <Brain />, name: 'Development' },
    { icon: <Activity />, name: 'Health & Fitness' },
    { icon: <BarChart2 />, name: 'Marketing' },
    { icon: <DollarSign />, name: 'Business & Finance' },
    { icon: <Monitor />, name: 'Computer Science' },
    { icon: <Camera />, name: 'Photography' },
    { icon: <Database />, name: 'Data Science' },
    { icon: <Code />, name: 'IT Startup Agency' },
    { icon: <Server />, name: 'Software Company' },
    { icon: <Cpu />, name: 'High-Tech' }
  
  ];
  useEffect(() => {
    // Add animation class after component mounts
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 200);
    });
  }, []);

  const abtCards = [
    {
      icon: "🎯",
      title: "Data Entry Professionals  ",
      description: "Ensuring precise and efficient management of educational data and resources."
    },
    {
      icon: "👁️",
      title: "Expert Interviewers ",
      description: "Conducting structured interviews to validate and refine high-quality content creation."
    },
    {
      icon: "🌟",
      title: "Instructional Designers",
      description: "Designs engaging learning materials, ensuring content is interactive, easy to understand, and aligned with modern educational methodologies."
    },
    {
      icon: "📈",
      title: "Content Quality Analysts",
      description: " Experts who meticulously review and refine content for clarity, accuracy, and engagement."
    },
    {
      icon: "🤝",
      title: "Industry Mentors ",
      description: "Bringing real-world insights to bridge the gap between academic learning and professional skills."
    },
    {
      icon: "🎯",
      title: "Subject Matter Experts (SMEs) ",
      description: "Specialists with deep knowledge in their domains, ensuring high-quality and accurate content."
    }
    ,
    {
      icon: "🤝",
      title: "Language Experts ",
      description: "Professionals who enhance language accuracy, fluency, and multilingual support for diverse learners."
    },
    {
      icon: "🎯",
      title: "Skilled Trainers ",
      description: "Experienced educators who deliver impactful training programs for student success."
    }
  ];



  return (
    // a
    <div  className="about-container">
      <div className="header-container">
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/Resources.webm" 
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
            background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6c5ce7, #ff6b6b);
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
          Resources
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
       
      </div>
    </div>


    
    <div className='abcd-container'>
    <div className="ab-container">
      <div className="content-wrapper">
        <div className="left-section animate-on-mount">
          <div className="lt-container">
            <img 
              src="/resources.png" 
              alt="Dashboard Preview" 
              className="lt-image"
            />
            
          </div>
        </div>
        
        <div className="right-section">
          <div className="about-us-title">

          <h1 className="about-us-title">
          Expertise That Drives Excellence

          </h1>
          </div>
          
        
          
         
          
          <p className="sub-text animate-on-mount">
          Behind every great learning experience is a team of dedicated professionals. Our resources include industry experts, skilled trainers, and content specialists who work together to create high-quality educational solutions. From crafting precise content to delivering impactful training, our team ensures that students and institutions receive the best support for academic and professional success.
          </p>
          
          
        </div>
      </div>
    </div>
    </div>
    
   
    <div className='abc-container'>
     <div className="ABT-container">
    <div className="ABT">
    <div className="abt-container">
      <div className="abt-header">
        <h1>Resources That Drive Learning Excellence
        </h1>
        
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
    </div> 
    </div>

     
   
   <footer className="footer-container">
      <div className="top-section">
        <div className="logo-section">
          <a href='/Home'><a href='/Home'><img src="/Zenith.png" alt="Zenith Logo" className="lt-logo" /></a></a>
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


export default Resources;