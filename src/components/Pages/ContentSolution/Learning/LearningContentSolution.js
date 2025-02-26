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
  const FeatureCard = ({ icon, title, description, image, learnMoreLink, className }) => (
    <div className={`feature-card ${className}`}>
      <div className="feature-content">
        <div className="feature-header">
          {icon && <span className="feature-icon">{icon}</span>}
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
        <a href={learnMoreLink} className="learn-more">Learn more</a>
      </div>
      {image && <div className="feature-image">{image}</div>}
    </div>
  );

  return (
    <div className="Learning-container">
      <div className="header-container">
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/video6.mp4" 
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

        <h1 className="title">
          Learning Content
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
  
      </div>
    </div>

    <div className="header">
        <h1>Drive Learning with Interactive Content
        </h1>
        <p className="description">
        In today’s digital learning environment, engaging students requires more than just traditional content delivery. Our Interactive Content Solutions are designed to create immersive learning experiences that enhance understanding and retention. By leveraging cutting-edge technology, we provide dynamic and adaptive content that caters to every learner's needs.


        </p>
      </div>

      <div className="landing-page">
      <header>
        <h1 className="M-header">Curious About Effective Learning? </h1>
        
      </header>

      <div className="features-container">
        <FeatureCard
          icon="💎"
          title=" Adaptive Learning"
          description="Our Adaptive Learning platform uses AI to tailor content to each student’s learning pace and style. By analyzing performance data, it customizes lessons, quizzes, and practice exercises, ensuring an optimized learning path that maximizes understanding and minimizes frustration."
          image={<img src="/img4.jpg" alt="Dashboard preview" className="dashboard-preview" />}
          learnMoreLink="#"
          className="premium-design"
        />

        <FeatureCard
          icon="🖼️"
          title=" Virtual Instructor-Led Training"
          description="Experience the effectiveness of classroom learning with the convenience of virtual access through our Virtual Instructor-Led Training (VILT). We provide live sessions with expert instructors, interactive Q&A, and collaborative discussions, ensuring an engaging and connected learning environment."
          image={
            <div className="image-grid">
              <img src="/img11.jpg" alt="Person using phone" />
              <img src="/img9.jpg" alt="Person working" />
            </div>
          }
          learnMoreLink="#"
          className="premium-images"
        />

        <FeatureCard
          icon="🚀"
          title="Animated Video Learning"
          description="Simplify complex ideas with our Animated Video Learning modules. Using high-quality animations and storytelling techniques, we make abstract or difficult topics easier to understand. These visually appealing videos boost engagement and enhance memory retention."
          image={<img src="/img8.jpg" alt="Templates preview" className="templates-preview" />}
          learnMoreLink="#"
          className="rapid-build"
        />
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