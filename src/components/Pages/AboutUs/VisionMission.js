import React from 'react';
// import { useLocation } from 'react-router-dom';


 



 const VisionMission = () => {
  // const location = useLocation();
  

  return (
    <div className="VisionMission-container">
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-image-container">
          <img 
            src="/Animation.gif" 
            alt="Developer working on laptop" 
            className="hero-image"
          />
        </div>
        
        <div className="hero-text">
          <div className="logo-container">
            <span className="logo-text">neo</span>
            <span className="logo-badge">coder</span>
          </div>
          
          <h1 className="hero-title">
            Onboard Freshers at Scale & Train them to be
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
export default VisionMission;