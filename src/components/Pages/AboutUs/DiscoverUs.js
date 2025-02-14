import React from 'react';

import  { useEffect } from 'react';

import './DiscoverUs.css';

import { Lightbulb, PenTool, Brain, Activity, 
  BarChart2, DollarSign, Monitor, Camera, 
  Database, Code, Server, Cpu } from 'lucide-react';
  import { Play, Phone, Laptop, GraduationCap } from 'lucide-react';



const DiscoverUs = () => {
  
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
          src="/video7.mp4" 
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

      <div className="academy-container">
      <div className="academy-content">
        <h1 className="academy-title">Our Vision how to work smarter</h1>
        <p className="academy-description">
          Asana Academy is here to guide you through all the basics and more
          —so you and your team can work better together.
        </p>
        <button className="get-started-button">Get started</button>
      </div>
      <div className="academy-image">
        <div className="circle-graphic">
          <div className="inner-circle"></div>
          <div className="lines"></div>
        </div>
      </div>
    </div>
   
    <div className="D-hero-container">
      <div className="D-left-section">
        <div className="D-video-card">
          <div className="D-video-thumbnail">
            <div className="D-play-button">
              <Play fill="white" size={24} />
            </div>
            <img 
              src="/img9.jpg" 
              alt="Students learning"
              className="D-thumbnail-image"
            />
          </div>
        </div>
        
        <div className="D-support-card">
          <Phone className="D-phone-icon" />
          <div className="D-support-text">
            <div>ONLINE SUPPORT</div>
            <div className="D-phone-number">+258 152 3659</div>
          </div>
        </div>
        
        <div className="D-students-image">
          <img 
            src="/img10.jpg" 
            alt="Students collaborating"
            className="D-collaboration-image"
          />
        </div>
      </div>

      <div className="D-right-section">
        <div className="D-header-badge">
          <div className="D-badge">
            <div className="D-badge-icon">⚡</div>
            Get More About Us
          </div>
        </div>

        <h1>Leadership </h1>

        <p className="D-description">
          Compellingly procrastinate equity invested markets with efficient process improvements, 
          actualize mission-critical partnerships with integrated portals. Authoritatively optimize 
          low-risk high-yield metrics and plug-and-play potentialities.
        </p>

        <div className="D-stats-container">
          <div className="D-stat-card">
            <Laptop className="D-stat-icon" />
            <div className="D-stat-content">
              <div className="D-stat-number">9.5K+</div>
              <div className="D-stat-label">Total active students taking gifted courses</div>
            </div>
          </div>

          <div className="D-stat-card">
            <GraduationCap className="D-stat-icon" />
            <div className="D-stat-content">
              <div className="D-stat-number">6.7K+</div>
              <div className="D-stat-label">Total active students taking gifted courses</div>
            </div>
          </div>
        </div>

        <button className="D-cta-button">Start Free Trial</button>
      </div>
    </div>
    
      
    </div>
  );
};


export default DiscoverUs;