import React from 'react';
import  { useState,useRef, useEffect } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { Star } from 'lucide-react';
import { Play } from 'lucide-react';
import './LearningContentSolution.css'
import { Phone, Target, Target as TargetIcon, Clipboard } from 'lucide-react';
import { motion } from 'framer-motion';

const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
};

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
  const currentYear = new Date().getFullYear();
  const statsData = [
    {
      value: '10+Years ',
      label: 'Industry Experience'
    },
    {
      value: '1 Million+ ',
      label: 'Learning items Developed'
      
    },
    {
      value: '10k+',
      label: 'Students trained'
    },
    {
      value: '100+',
      label: 'Clients Served'
    },
    {
      value: '50+',
      label: 'Team of Experts',
      icon: 'T'
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

  const useIntersectionObserver = (options = {}) => {
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      }, options);
  
      const currentElement = elementRef.current;
      if (currentElement) {
        observer.observe(currentElement);
      }
  
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [options]);
  
    return elementRef;
  };

  const SectionTitle = ({ children }) => {
    const titleRef = useIntersectionObserver();
    
    return (
      <div className="section-title-container">
        <h2 className="section-title" ref={titleRef}>
          {children}
        </h2>
      </div>
    );
  };

  

  




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

<div className='tss'>
    <section className="training-services-section" ref={useIntersectionObserver()}>
  <SectionTitle>Powerful Features Driving Educational Excellence
  </SectionTitle>
  <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Robust Data Security 
        </div>
        <p class="ag-courses-item_dis" >We prioritize the confidentiality of your educational data with advanced security measures, safeguarding intellectual property and sensitive information.        </p>

        {/* <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div> */}
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Scalable and Flexible Solutions
        </div>
        <p class="ag-courses-item_dis" >Whether you need large-scale academic content or niche test prep materials, our solutions are designed to grow with your needs.        </p>

        {/* <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div> */}
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Advanced Question Authoring Tool
        </div>
        <p class="ag-courses-item_dis" >Easily create, edit, and organize questions with our user-friendly authoring tool. Collaborate in real-time and maintain quality with built-in review workflows.        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Expert-Curated and Relevant 

        </div>
        
        <p class="ag-courses-item_dis" >Developed by industry experts, our content is always up-to-date with the latest educational trends and exam patterns.
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Quality Assurance and Accuracy 

        </div>
        <p class="ag-courses-item_dis" >Every question and learning module goes through rigorous quality checks to maintain high standards of accuracy and relevance.
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Multi-Platform Compatibility 

        </div>
        <p class="ag-courses-item_dis" > Seamlessly integrate our content across various learning management systems, ensuring a smooth and consistent learning experience.

        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Multi-Language Translation

        </div>
        <p class="ag-courses-item_dis" >Reach a broader audience with our multilingual support, ensuring accurate and context-sensitive translations for diverse learners.
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title">
        Seamless Integration
        </div>
        <p class="ag-courses-item_dis" >Our learning solutions easily integrate with existing learning systems, ensuring a smooth transition and uninterrupted learning experience
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Student-Centric Approach

        </div>
        <p class="ag-courses-item_dis" >We design content that adapts to different learning styles, ensuring each student grasps concepts at their own pace.</p>
      </a>
    </div>

  </div>
</div>
</section>
</div>


    
<footer className="footer-container">
      <div className="top-section">
        <div className="logo-section">
          <img src="/Zenith.png" alt="Zenith Logo" className="lt-logo" />
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>CollegeConnect</h3>
            <ul>
              <li>Integrated Degree Programs</li>
              <li>Employability Skilling Programs</li>
              <li>Courses - Core Engineering & IT</li>
              <li>IITM Parvartak Joint Certification Programs</li>
              <li>Certification Courses - Commerce & Science</li>
              <li>Specialization Stacks - Commerce & Science</li>
              <li>Assessment Solutions</li>
              <li>Immersion</li>
              <li>Academic Partners</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Workonnect</h3>
            <ul>
              <li>Before Joining Programme</li>
              <li>Hire Train Deploy Model</li>
              <li>Role/Product Based-Skilling</li>
              <li>Assessment Solutions</li>
              <li>Enterprise Partners</li>
            </ul>
            <h3>Other Initiatives</h3>
            <ul>
              <li>Emerging Tech</li>
              <li>Skill Exchange</li>
              <li>Engineers Ensemble</li>
              <li>Micro Learning</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Capabilities</li>
              <li>Core Solutions</li>
              <li>Leadership</li>
              <li>Mentors</li>
              <li>Experts</li>
              <li>Blogs</li>
              <li>EduTech Connect</li>
              <li>Newsroom</li>
              <li>Events</li>
              <li>Testimonials</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Address: 207, 1st floor, Sainik Vihar,</p>
            <p>Pitampura, Delhi, India - 110034</p>
            <p><MailIcon/><a href="mailto:contact@lntedutech.com">info@zenithindia.org</a></p>

            <h3>Support</h3>
            <p>Learning Management System:</p>
            <p><MailIcon/><a href="mailto:contact@lntedutech.com">info@zenithindia.org</a></p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <img src="" alt="CMMI Logo" className="cmmi-logo" />
        <p>© {currentYear} All rights reserved. zenith education sol. pvt. ltd.</p>
        <div className="bottom-links">
          <a href="#">Support</a>
          <span>|</span>
          <a href="#">Disclaimer</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
    

    </div>
  );
};
export default LearningContentSolution;