import React from 'react';
import  { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import './LearningContentSolution.css'
import { Phone, Target, Target as TargetIcon, Clipboard } from 'lucide-react';
import { motion } from 'framer-motion';

const LearningContentSolution = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const enrollmentProfiles = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg'
  ];
  const features = [
    {
      icon: "⚙️",
      title: "Fast Performance",
      description: "Optimized for a smaller build size, faster dev compilation and dozens of other improvements."
    },
    {
      icon: "📱",
      title: "Perfect Responsive",
      description: "Our Theme is full perfect for all device. You can visit our Theme all device easily."
    },
    {
      icon: "💬",
      title: "Fast & Friendly Support",
      description: "We are provide 24 hours support for all clients.You can purchase without hesitation."
    },
    {
      icon: "👆",
      title: "Easy to Use",
      description: "Create your own custom Theme or section by copying, pasting, and assembling."
    }
  ];
  const services = [
    {
      icon: <Phone />,
      title: "Test Prep Material",
      subtitle: "Let's start right from the beginning by outlining the core model of your business, and any pain points.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus suscipit justo, non malesuada est euismod a. Etiam elementum vitae libero vel gravida.",
      buttonColor: "blue"
    },
    {
      icon: <Target />,
      title: "Textbook Solutions",
      subtitle: "So you need to hit a wider more targeted audience? Let's explore how to do that and develop a plan of action.",
      description: "Ut lacitis laoreet maximus, integer cursus quam eleifend, tristique enim sit amet, porttitor eros. Integer fringilla erat tortor.",
      buttonColor: "green"
    },
    {
      icon: <TargetIcon />,
      title: "Custom exam content",
      subtitle: "It's time to look at the pain points of your business and craft a method of relieving those issues efficiently.",
      description: "Nunc pellentesque orci vel dapibus tincidunt. Nam in urna orci. Curabitur nibh est, elementum quis dignissim vehicula.",
      buttonColor: "green"
    } 
  ];const pluginsData = [
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
        

        {/* <div className="action-buttons">
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
        </div> */}

        {/* <div className="enrollment-section">
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
          
        </div> */}

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
          src="/img11.jpg"
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
    <div className="consulting-container">
      <div className="C-services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="C-service-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="C-icon-wrapper">
              {service.icon}
            </div>
            <h1 className="C-title">{service.title}</h1>
            <p className="C-subtitle">{service.subtitle}</p>
            <p className="C-description">{service.description}</p>
            <button 
              className={`C-consultation-button ${service.buttonColor}`}
            >
              view more
            </button>
          </div>
        ))}
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
    <div className="f-container">
      {features.map((feature, index) => (
        <div key={index} className="f-card">
          <div className="f-icon">{feature.icon}</div>
          <h3 className="f-title">{feature.title}</h3>
          <p className="f-description">{feature.description}</p>
        </div>
      ))}
    </div>

    </div>
  );
};
export default LearningContentSolution;