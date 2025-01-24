import React from 'react';

import  { useEffect } from 'react';

import './AboutZESPL.css';





const AboutZESPL = () => {
  
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
  
  return (
    // a
    <div  className="about-container">
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-image-container">
          <img 
            src="/Aboutus.gif" 
            alt="Developer working on laptop" 
            className="hero-image"
          />
        </div>
        
        <div className="hero-text">

          
          <h1 className="hero-title">
            About Zenith India
          </h1>
          
          <p className="hero-description">
            Reliable Developer Upskilling Platform to speed up the learning curve of entry-level developers.
          </p>
          
          <button className="view-solutions-btn">
            View Solutions
          </button>
        </div>
      </div>
    </div>
   
      
      <section className="about-section">
        <div><h2>About <span></span>Zenith India</h2>
        
        <p>Zenith thrives through excellence by providing excellent services in the Education sphere. Our journey began in the year 2011 and since then we have seen ourselves making a significant mark in the aptitude training industry and content development, thereby justifying our company name "Zenith" - the highest point.</p>
        
        </div>
      </section>

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


export default AboutZESPL;