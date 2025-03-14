import React from 'react';

import  { useEffect } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import './DiscoverUs.css';

import { Lightbulb, PenTool, Brain, Activity, 
  BarChart2, DollarSign, Monitor, Camera, 
  Database, Code, Server, Cpu } from 'lucide-react';
  import { Play, Phone, Laptop, GraduationCap } from 'lucide-react';



const DiscoverUs = () => {
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
      title: "Our Mission",
      description: "To deliver innovative solutions that transform businesses and enrich customer experiences through cutting-edge technology."
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description: "To become the global leader in digital transformation, setting new standards for excellence and innovation."
    },
    {
      icon: "🌟",
      title: "Core Values",
      description: "Excellence, Integrity, Innovation, and Customer-First approach drive everything we do."
    },
    {
      icon: "📈",
      title: "Our Growth",
      description: "Starting from humble beginnings, we've grown into a dynamic organization serving clients worldwide."
    },
    {
      icon: "🤝",
      title: "Our Team",
      description: "A diverse group of passionate professionals working together to bring creative solutions to complex challenges."
    },
    {
      icon: "🎯",
      title: "Our Impact",
      description: "Making a difference through sustainable practices, community engagement, and transformative solutions."
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
          src="/video7.webm" 
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
          Get to know us
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
       
      </div>
    </div>


    

    <div className="ab-container">
      <div className="content-wrapper">
        <div className="left-section animate-on-mount">
          <div className="lt-container">
            <img 
              src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?t=st=1739438706~exp=1739442306~hmac=428245df16c5ff70f60f234743acfe903e07a39e88fac771e3e5de46c1411425&w=740" 
              alt="Dashboard Preview" 
              className="lt-image"
            />
            <div className="decorative-shape"></div>
            <div className="decorative-glasses"></div>
          </div>
        </div>
        
        <div className="right-section">
          <h1 className="title animate-on-mount">
            <span className="ab">ABOUT</span>
            <span className="us">US</span>
          </h1>
          
        
          
         
          
          <p className="sub-text animate-on-mount">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore
          </p>
          
          <button className="learn-more-btn animate-on-mount">
            Learn more
          </button>
        </div>
      </div>
    </div>
      
    <div className="ABT">
    <div className="abt-container">
      <div className="abt-header">
        <h1>Leadership Ideas Into Digital Reality</h1>
        
      </div>
      <div className="abt-grid">
        {abtCards.map((card, index) => (
          <div key={index} className="abt-card">
            <div className="abt-header-group">
              <div className="abt-icon">{card.icon}</div>
              <h3 className="abt-title">{card.title}</h3>
            </div>
            <p className="abt-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

     
   <div className="bag">
    <div className="A-hero-container">
          <div className="A-left-section">
            <div className="A-video-card">
              <div className="A-video-thumbnail">
                <div className="A-play-button">
                  <Play fill="white" size={24} />
                </div>
                <img 
                  src="/img6.jpg" 
                  alt="Students learning"
                  className="A-thumbnail-image"
                />
              </div>
            </div>
            
            
            
            <div className="A-students-image">
              <img 
                src="/img5.jpg" 
                alt="Students collaborating"
                className="A-collaboration-image"
              />
            </div>
          </div>
    
          <div className="A-right-section">
             
    
          <h1 className="title animate-on-mount">
            <span className="ab">Leadership</span>
            <span className="us">Skills</span>
          </h1>
    
            <p className="A-description">
              Compellingly procrastinate equity invested markets with efficient process improvements, 
              actualize mission-critical partnerships with integrated portals. Authoritatively optimize 
              low-risk high-yield metrics and plug-and-play potentialities.
            </p>
    
            <div className="A-stats-container">
              <div className="A-stat-card">
                <Laptop className="A-stat-icon" />
                <div className="A-stat-content">
                  <div className="A-stat-number">9.5K+</div>
                  <div className="A-stat-label">Total active students taking gifted courses</div>
                </div>
              </div>
    
              <div className="A-stat-card">
                <GraduationCap className="A-stat-icon" />
                <div className="A-stat-content">
                  <div className="A-stat-number">6.7K+</div>
                  <div className="A-stat-label">Total active students taking gifted courses</div>
                </div>
              </div>
            </div>
    
            <button className="learn-more-btn animate-on-mount">
            View More
          </button>
          </div>
          <div
          ></div>
        </div>
        </div>
    <footer className="footer-container">
      <div className="top-section">
        <div className="logo-section">
          <a href='/Home'><img src="/Zenith.png" alt="Zenith Logo" className="lt-logo" /></a>
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


export default DiscoverUs;