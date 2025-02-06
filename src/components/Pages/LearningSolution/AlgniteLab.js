import React from 'react';
import { useLocation } from 'react-router-dom';
import './AlgniteLab.css'

const AlgniteLab = () => {
  const location = useLocation();
  const hash = location.hash;

  return (
    <div className="Lab-container">

    <div className="header-container">
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/video3.mp4" 
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
        <div className="version-badge">
          Version 4.2 just landed!
        </div>
        <h1 className="title">
          Stratus is a better way<br />
          to build websites
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
        <button className="cta-button">
          Get started
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
    <div className="Lab-hero-container">
      <div className="Lab-hero-content">

        
 
      </div>
    </div>
    </div>
  );
};
export default AlgniteLab;