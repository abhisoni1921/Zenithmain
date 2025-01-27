import React from 'react';
import { useLocation } from 'react-router-dom';
import './AlgniteLab.css'

const AlgniteLab = () => {
  const location = useLocation();
  const hash = location.hash;

  return (
    <div className="Lab-container">
      <div className="Lab-hero-container">
      <div className="Lab-hero-content">
        <div className="Lab-hero-image-container">
          <img 
            src="/Aboutus.gif" 
            alt="Developer working on laptop" 
            className="hero-image "
            
          />
        </div>
        
        <div className="Lab-hero-text">

          
          <h1 className="Lab-hero-title">
            AIgnite Lab
          </h1>
          
          <p className="Lab-hero-description">
            Reliable Developer Upskilling Platform to speed up the learning curve of entry-level developers.
          </p>
          
          <button className="Lab-view-solutions-btn">
            View Solutions
          </button>
        </div>
      </div>
    </div>
      
    </div>
  );
};
export default AlgniteLab;