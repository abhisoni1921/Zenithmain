import React from 'react';
import  { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import './LearningContentSolution.css'

const LearningContentSolution = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const enrollmentProfiles = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg'
  ];

  return (
    <div className="Learning-container">
      <div className="Learning-hero-container">
      <div className="Learning-hero-content">
        <div className="Learning-hero-image-container">
          <img 
            src="/pink.gif" 
            alt="Developer working on laptop" 
            className="Learning-hero-image "
            
          />
        </div>
        
        <div className="Learning-hero-text">

          
          <h1 className="Learning-hero-title">
            Learning Content Solution!
          </h1>
          

          

        </div>
      </div>
    </div>

    <div className="landing-container">
      <div className={`content-section ${animate ? 'fade-in' : ''}`}>
        <div className="welcome-badge">
          <span className="lightning">⚡</span>
          Welcome to Learning Content Solutions!
        </div>

        <h1 className="main-heading">
        Academic content creation
        </h1>
        

        <div className="action-buttons">
          <button className="get-started-btn">
            Get Started
          </button>
          
          <button 
            className="video-btn"
            onClick={() => setIsVideoModalOpen(true)}
          >
            <Play className="play-icon" size={20} />
            Watch the video
          </button>
        </div>

        <div className="enrollment-section">
          <div className="profile-stack">
            {enrollmentProfiles.map((profile, index) => (
              <img
                key={index}
                src={profile}
                alt={`Student ${index + 1}`}
                className="profile-image"
                style={{ marginLeft: index > 0 ? '-10px' : '0' }}
              />
            ))}
          </div>
          <span className="enrollment-text">
            <strong>10k</strong> Enrolment
          </span>
          
        </div>

        <h2 className="courses-heading">
          Explore <span className="highlight">1350+</span> Courses within Subject
        </h2>
        <span><p>to assist learners in 
simply grasping the idea. Figures are created through laborious 
tasks. The drawings alter gradually with each successive 
drawing, creating a sense of motion when viewed in succession. </p></span>
      </div>
      

      <div className={`image-section ${animate ? 'slide-in' : ''}`}>
        <div className="stats-card">
          <span className="stats-number">256+</span>
          <span className="stats-label">CRASHED COURSES</span>
        </div>
        <img
          src="/dark.gif"
          alt="Student studying"
          className="main-image"
        />
        <div className="decorative-dots"></div>
      </div>

      {isVideoModalOpen && (
        <div className="video-modal" onClick={() => setIsVideoModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-btn"
              onClick={() => setIsVideoModalOpen(false)}
            >
              ×
            </button>
            <div className="video-placeholder">
              Video player placeholder
            </div>
          </div>
        </div>
      )}
    </div>
      
    </div>
  );
};
export default LearningContentSolution;