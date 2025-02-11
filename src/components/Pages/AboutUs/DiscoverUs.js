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
  
  return (
    // a
    <div  className="about-container">
    <div className="Dis-hero-container">
      <div className="Dis-hero-content">
        <div className="Dis-hero-image-container">
          <img 
            src="/Aboutus.gif" 
            alt="Developer working on laptop" 
            className="Dis-hero-image"
          />
        </div>
        
        <div className="Dis-hero-text">

          
          <h1 className="Dis-hero-title">
          Get to Know Us!
          </h1>
          
          <p className="Dis-hero-description">
            Reliable Developer Upskilling Platform to speed up the learning curve of entry-level developers.
          </p>
          

        </div>
      </div>
    </div>

    

   
      
    <section className="about-section">
        <div><h1 className="academy-title">About ZESPL</h1>
        
        <p>Zenith thrives through excellence by providing excellent services in the Education sphere. Our journey began in the year 2011 and since then we have seen ourselves making a significant mark in the aptitude training industry and content development, thereby justifying our company name "Zenith" - the highest point.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

        </div>
        

      </section>
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