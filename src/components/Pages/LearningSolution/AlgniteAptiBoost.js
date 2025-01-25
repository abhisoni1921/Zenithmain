import React from 'react';
import { useLocation } from 'react-router-dom';

const AlgniteAptiBoost = () => {
  const location = useLocation();
  const hash = location.hash;

  return (
    

    <div className="AlgniteAptiBoost">
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
    </div>
  );
};
export default AlgniteAptiBoost;