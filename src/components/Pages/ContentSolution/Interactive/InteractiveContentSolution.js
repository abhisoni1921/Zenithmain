import React from 'react';
import  { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Star } from 'lucide-react';
import { Pencil, Key } from 'lucide-react';
import {  Phone, Laptop, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import './InteractiveContentSolution.css'

const InteractiveContentSolution = () => {
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
  const features = [
    {
      icon: <Pencil size={24} />,
      title: "Carefully Crafted Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit odio dolorem obcaecati assumenda voluptatem, quod illum ab blanditiis nostrum ex fugiat."
    },
    {
      icon: <Key size={24} />,
      title: "Free Updates & Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit odio dolorem obcaecati assumenda voluptatem, quod illum ab blanditiis nostrum ex fugiat."
    }
  ];
  const statsData = [
    {
      value: '80k+',
      label: 'Theme Sales'
    },
    {
      value: '4.92',
      label: 'Customer Rating',
      showStars: true
    },
    {
      value: '400+',
      label: 'Page Templates'
    },
    {
      value: '85+',
      label: 'Prebuilt Websites'
    },
    {
      value: '',
      label: 'Elementor-Enabled',
      icon: 'E'
    }
  ];

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index}
        className="star-icon"
        size={16}
        fill="#FFD700"
        color="#FFD700"
      />
    ));
  };
  const pluginsData = [
    {
      name: 'Tutor LMS',
      logo: '/tutor-lms-logo.png',
      status: 'Released',
      className: 'bg-blue-600'
    },
    {
      name: 'LearnPress',
      logo: '/learnpress-logo.png',
      status: 'Released',
      className: 'bg-purple-600'
    },
    {
      name: 'LearnDash',
      logo: '/learndash-logo.png',
      status: 'Launching Soon',
      className: 'bg-blue-400'
    },
    {
      name: 'MasterStudy',
      logo: '/masterstudy-logo.png',
      status: 'Launching Soon',
      className: 'bg-blue-500'
    },
    {
      name: 'Sensei',
      logo: '/sensei-logo.png',
      status: 'Coming Soon',
      className: 'bg-emerald-500'
    },
    {
      name: 'LifterLMS',
      logo: '/lifterlms-logo.png',
      status: 'Coming Soon',
      className: 'bg-blue-500'
    }
  ];

  return (
    <div className='Interactive-Container'>
          <div className="Interactive-hero-container">
      <div className="Interactive-hero-content">
        <div className="Interactive-hero-image-container">
          <img 
            src="/img6.jpg" 
            alt="Developer working on laptop" 
            className="Interactive-hero-image"
          />
        </div>
        
        <div className="Interactive-hero-text">

          
          <h1 className="Interactive-hero-title">
          Interactive Content Solutions!
          </h1>
          
          <p className="Interactive-hero-description">
            
          </p>
          

        </div>
      </div>
    </div>

    <div className="landing-container">
      <div className={`content-section ${animate ? 'fade-in' : ''}`}>
        <div className="welcome-badge">
          <span className="lightning">⚡</span>
          Welcome to Interactive Content Solutions!
        </div>

        <h1 className="main-heading">
        Animated Video Learning
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
    <div className="Adaptive-container">
      <h1 className="main-heading">Virtual Instructor Led Training</h1>
      
      <div className="Adaptive-content">
        <div className="Adaptive-image">
          <img 
            src="./img7.jpg"
            alt="Responsive devices showing website"
            className="Adaptive-image"
          />
        </div>
        
        <div className="Adaptive-features-list">
          {features.map((feature, index) => (
            <div key={index} className="Adaptive-feature-item">
              <div className="Adaptive-feature-icon">
                {feature.icon}
              </div>
              <div className="Adaptive-Adaptive-feature-text">
                <h3 className="Adaptive-feature-title">{feature.title}</h3>
                <p className="Adaptive-Adaptive-feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
          
          <button className="Adaptive-view-features-button">
          Virtual Instructor Led Training
          </button>
        </div>
      </div>
    </div>
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
        
        <div className="A-support-card">
          <Phone className="A-phone-icon" />
          <div className="A-support-text">
            <div>ONLINE SUPPORT</div>
            <div className="A-phone-number">+258 152 3659</div>
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
        <div className="A-header-badge">
          <div className="A-badge">
            <div className="A-badge-icon">⚡</div>
            Get More About Us
          </div>
        </div>

        <h1>Adaptive learning</h1>

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

        <button className="A-cta-button">Start Free Trial</button>
      </div>
      <div
      ></div>
    </div>
    <div className="game-container">
      <div className="game-content">
        
        <div className="game-left">
          <div className="ninja-icon">
            <img 
              src="/img4.jpg" 
              alt="Ninja mascot" 
              className="ninja-image"
            />
          </div>
          <div className="product-display">
            <img 
              src="/img8.jpg" 
              alt="WooCommerce store preview" 
              className="laptop-mockup"
            />
          </div>
          <div className="solar-panel">
            <img 
              src="/img1.jpg" 
              alt="Solar panel" 
              className="panel-image"
            />
          </div>
        </div>
        
        <div className="game-right">
          <div className="woo-logo">
            <img 
              src="/img2.jpg" 
              alt="WooCommerce logo" 
              className="woo-image"
            />
          </div>
          <div className="game-text">
            <h2 className="game-small-heading">GET YOUR OWN ONLINE STORE</h2>
            <h1 >Gamification</h1>
            <p className="A-description">
              Build your online store with WooCommerce — the most popular WordPress plugin that lets you create a digital shop for free!
            </p>
            <button className="game-cta">View Now</button>
          </div>
        </div>
      </div>
    </div>
    <div className="LMS-container">
      <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm mb-4"
        >
          SEAMLESSLY INTEGRATES
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          // className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
        >
          <h1>Works with Your
          <br />
          Favorite LMS </h1>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Create, management, and sale of online courses. Whether using
          Tutor LMS, LearnDash, or any other, our theme fully supports
          their features to help you build a robust educational site.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {pluginsData.map((plugin, index) => (
          <motion.div
            key={plugin.name}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`w-24 h-24 rounded-full flex items-center justify-center ${plugin.className} mb-4`}>
              <img
                src={plugin.logo}
                alt={`${plugin.name} logo`}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{plugin.name}</h3>
            <span className={`text-sm px-3 py-1 rounded-full ${
              plugin.status === 'Released' 
                ? 'bg-purple-100 text-purple-600'
                : plugin.status === 'Launching Soon'
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {plugin.status}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </div>
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-item">
          {stat.icon ? (
            <div className="elementor-icon">{stat.icon}</div>
          ) : (
            <div className="stat-value">
              {stat.value}
              {stat.showStars && <div className="stars">{renderStars()}</div>}
            </div>
          )}
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>


    </div>
    
  );
};
export default InteractiveContentSolution;