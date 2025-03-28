import React from 'react';

import  { useEffect } from 'react';

import './DiscoverUs.css';
import { Divider } from '@mui/material';



 

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
  const timelineData = [
    {
      year: "2015",
      title: "The Beginning of Our Journey",
      description: "Launched our platform with programming languages, workshops, and soft skill training"
    },
    {
      year: "2018",
      title: "Expansion into Advanced Courses",
      description: "Introduced advanced courses like full-stack development and web development to meet industry needs."
    },
    {
      year: "2022",
      title: "AI Integration and Client Growth",
      description: "Implemented AI into our platform and secured our first circle of clients: Sri Krishna and MCET"
    },
    {
      year: "2024",
      title: "Leading the EdTech Revolution",
      description: "Continuing our leadership in the EdTech space with cutting-edge AI-powered learning tools and top-tier instructors"
    }
  ];
  
  
  return (
    // a
    <div  className="about-container">
    <div className="Discover-hero-container">
      <div className="Discover-hero-content">
        <div className="Discover-hero-image-container">
          <img 
            src="/Aboutus.gif" 
            alt="Developer working on laptop" 
            className="Discover-hero-image"
          />
        </div>
        
        <div className="Discover-hero-text">

          
          <h3 className="Discover-hero-title">
            <ul>Who We Are?</ul>
            <Divider/>

          </h3>
          

          

        </div>
      </div>
    </div>
    

    

   
      
      <section className="about-section">
        <div><h2>About ZESPL</h2>
        
        <p>Zenith thrives through excellence by providing excellent services in the Education sphere. Our journey began in the year 2011 and since then we have seen ourselves making a significant mark in the aptitude training industry and content development, thereby justifying our company name "Zenith" - the highest point.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
{/* <div className="image-section">
      <div className="image-grid">
        <img src="/img1.jpg" alt="Office workspace" className="grid-item" />
        <img src="/img2.jpg" alt="Team meeting" className="grid-item" />
        <img src="/img3.jpg" alt="Education session" className="grid-item" />
      </div>
    </div> */}
        </div>
        

      </section>
      {/* <div className="academy-container">
      <div className="academy-content">
        <h1 className="academy-title">Learn how to work smarter</h1>
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
    </div> */}
    

      <section className="vision-mission">
        <div className="vision">
          <h3>Our Vision</h3>
          <ul>
            <li>To make positive changes with our world-class training and make individuals ready for the industry.</li>
            <li>To be the best in the online testing industry.</li>
            <li>To be India's best in the field of content development and management.</li>
          </ul>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <ul>
            <li>To improve the employability quotient of Indian youth by providing the finest of training.</li>
            <li>Help clients make more informed decisions in the testing arena.</li>
            <li>Use our vast knowledge to help clients in item development as per their needs.</li>
          </ul>
        </div>
      </section>

      <section className="about-logo">
        <h3>Our Logo</h3>
        <p>Our logo is made up of two open boxes signifying how we create new dimensions for our clients and the individuals we train. It also forms the letter ‘Z’, synonymous with our name Zenith.</p>
      </section>

      <section className="about-colors">
        <h3>Our Colours</h3>
        <p>Our colours reflect our values and beliefs. Each colour has its own unique importance:</p>
        <ul>
          <li><strong>Green:</strong> Growth</li>
          <li><strong>Yellow:</strong> Clarity, Optimism</li>
          <li><strong>Blue:</strong> Trust, Dependability</li>
          <li><strong>Purple:</strong> Creativity, Imagination</li>
        </ul>
      </section>

      <section className="founders">
        <h3>Our Founders</h3>
        <div className="founder">
          <h4>Sunil Palia</h4>
          <p><strong>Qualifications:</strong> B.Sc. (Mathematics), MCA</p>
          <p>He is a veteran in training and teaching with a decade-long experience, training around 10,000 students with over 500 hours of training experience. He has authored many books on aptitude and excels in creating focused training programs.</p>
        </div>
        <div className="founder">
          <h4>Jitesh Vohra</h4>
          <p><strong>Qualifications:</strong> B.E., MBA (Marketing)</p>
          <p>With 2 years of corporate experience and 12 years in training, he has trained over 6,000 students with more than 400 hours of training. He specializes in corporate training and content development.</p>
        </div>
      </section>

      <section className="useful-links">
        <h3>Useful Links</h3>
        <ul>
          <li>Exam Consulting</li>
          <li>Bilingual Test Item Development</li>
          <li>Test Item Review</li>
          <li>Item Development Style Guide Creation</li>
          <li>Careers</li>
        </ul>
      </section>
      <div className="timeline-container">
      <div className="timeline-header">
        <h1 className="timeline-title">
          Our <span className="timeline-badge">Timeline</span>
        </h1>
      </div>

      <div className="timeline-content">
        <div className="timeline-line"></div>
        
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-avatar">
                  <svg 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                    />
                  </svg>
                </div>
                <h3 className="timeline-card-title">{item.title}</h3>
              </div>
              <p className="timeline-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

      <section className="contact">
        <h3>Contact Us</h3>
        <address>
          Address: 207, 1st Floor, Sainik Vihar, Pitampura, Delhi, India - 110034<br />
          Phone: +91-11-42542992<br />
          Email: <a href="mailto:info@zenithindia.org">info@zenithindia.org</a>
        </address>
      </section>

      <footer>
        <p>Copyright © 2018 Zenith India - All rights reserved.</p>
      </footer>
    </div>
  );
};


export default DiscoverUs;