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
          icon="💎"
          title=" Virtual Instructor-Led Training"
          description="Experience the effectiveness of classroom learning with the convenience of virtual access through our Virtual Instructor-Led Training (VILT). We provide live sessions with expert instructors, interactive Q&A, and collaborative discussions, ensuring an engaging and connected learning environment."
          image={<img src="/img4.jpg" alt="Dashboard preview" className="dashboard-preview" />}
          learnMoreLink="#"
          className="premium-design"
        />

        

        <FeatureCard
          icon="🚀"
          title="Animated Video Learning"
          description="Simplify complex ideas with our Animated Video Learning modules. Using high-quality animations and storytelling techniques, we make abstract or difficult topics easier to understand. These visually appealing videos boost engagement and enhance memory retention."
          image={<img src="/img8.jpg" alt="Templates preview" className="templates-preview" />}
          learnMoreLink="#"
          className="rapid-build"
        />
          <FeatureCard
          icon="💎"
          title=" Gamification"
          description="Turn learning into an adventure with our Gamification solutions. We use game mechanics like points, badges, leaderboards, and challenges to make learning fun and motivating. This approach not only enhances student engagement but also improves knowledge retention by encouraging active participation."
          image={<img src="/img4.jpg" alt="Dashboard preview" className="dashboard-preview" />}
          learnMoreLink="#"
          className="premium-design"
        />
          <FeatureCard
          icon="💎"
          title=" K12 Learning"
          description="Empowering young minds with tailored educational content for every grade level. Our K-12 solutions align with curriculum standards, ensuring comprehensive learning through engaging and age-appropriate material. We offer various services like  Curriculum development, Assessment development, Workbook development, Teacher lesson plan  etc."
          image={<img src="/img4.jpg" alt="Dashboard preview" className="dashboard-preview" />}
          learnMoreLink="#"
          className="premium-design"
        />
          <FeatureCard
          icon="💎"
          title=" Micro Learning"
          description="Deliver knowledge in short, focused segments with our micro-learning modules. Perfect for modern learners, these modules provide quick, accessible learning experiences anytime, anywhere."
          image={<img src="/img4.jpg" alt="Dashboard preview" className="dashboard-preview" />}
          learnMoreLink="#"
          className="premium-design"
        />
      </div>
    </div>

    

    

    </div>
  );
};
export default LearningContentSolution;