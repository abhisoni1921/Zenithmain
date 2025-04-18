import React  from 'react';
import './Content.css'
import { useEffect , useRef } from 'react';
import  { useState  } from 'react';
import { motion } from 'framer-motion';
import MailIcon from '@mui/icons-material/Mail';
import { 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';
import { Pencil, Key } from 'lucide-react';





const Content = () => {
  const [activeTab, setActiveTab] = useState('Learning');
  
  const tabContent = {
    Learning: {
      title: "Learning",
      description: "Industry-leading learning platform for technical skill development with support for 40+ programming languages and customizable learning paths Interactive technical assessments for hands-on evaluation in real-world environments with cloud-based infrastructure and project simulations.",
      features: [
        { title: "AI-Driven Candidate Matching", icon: "brain" },
        { title: "Automated Shortlisting", icon: "list" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Integrated Video Interviews", icon: "video" }
      ]
    },
    Assessment: {
      title: "Assessment",
      description: "Interactive technical assessments for hands-on evaluation in real-world environments with cloud-based infrastructure and project simulations Interactive technical assessments for hands-on evaluation in real-world environments with cloud-based infrastructure and project simulations.",
      features: [
        { title: "Skill-Based Assessments", icon: "target" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Customizable Recruitment Pipelines", icon: "settings" }
      ]
    },
    Content: {
      title: "Content",
      description: "Comprehensive content platform with rich media resources, customizable materials, and deep analytics for technical and non-technical roles Interactive technical assessments for hands-on evaluation in real-world environments with cloud-based infrastructure and project simulations.",
      features: [
        { title: "Real-time Performance Analytics", icon: "chart" },
        { title: "Multi-format Question Banks", icon: "database" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Secure AI Proctoring Tools", icon: "shield" },
        { title: "Advanced Fraud Detection", icon: "alert" }
      ]
    }
  };
  
  const currentContent = tabContent[activeTab];

  const heading = "Featured Products";
  const description = "At Amypo, we focus on overcoming business challenges rather than pushing pre-set products. With our suite of custom solutions for educational and corporate needs, we offer AI-driven platforms that effortlessly mesh with your operational structure.";

  const currentYear = new Date().getFullYear();
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
        const originalCards = [
            {
              imageUrl: "/img1.jpg",
              title: "Mountain Adventure",
              description: "Explore the majestic peaks and valleys",
              link: "#",
              viewMore: "https://example.com/mountains"
            },
            {
              imageUrl: "/img2.jpg",
              title: "Ocean Escape",
              description: "Discover hidden beaches and coral reefs",
              link: "#",
              viewMore: "https://example.com/ocean"
            },
            {
              imageUrl: "/img3.jpg",
              title: "Urban Explorer",
              description: "Navigate through city landscapes",
              link: "#",
              viewMore: "https://example.com/urban"
            }
          ];
        
          const originalLength = originalCards.length;
          const extendedCards = [
            originalCards[originalLength - 1],
            ...originalCards,
            originalCards[0]
          ];
        
          const [currentIndex, setCurrentIndex] = useState(2);
          const [transitionEnabled, setTransitionEnabled] = useState(true);
        
          useEffect(() => {
            if (currentIndex === 1) {
              setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(originalLength + 1);
              }, 500);
            } else if (currentIndex === originalLength + 2) {
              setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(2);
              }, 500);
            }
          }, [currentIndex, originalLength]);
        
          const handleNext = () => {
            if (currentIndex >= originalLength + 2) return;
            setTransitionEnabled(true);
            setCurrentIndex(prev => prev + 1);
          };
        
          const handlePrev = () => {
            if (currentIndex <= 1) return;
            setTransitionEnabled(true);
            setCurrentIndex(prev => prev - 1);
          };
          useEffect(() => {
            // Add 'visible' class after component mounts for entrance animation
            const timer = setTimeout(() => {
              document.querySelector('.CT-container').classList.add('visible');
            }, 100);
        
            return () => clearTimeout(timer);
          }, []);
          const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
          const laptopRef = useRef(null);
        
          useEffect(() => {
            // Add 'visible' class after component mounts for entrance animation
            const timer = setTimeout(() => {
              document.querySelector('.CT-container').classList.add('visible');
            }, 100);
        
            return () => clearTimeout(timer);
          }, []);
        
          useEffect(() => {
            const handleMouseMove = (e) => {
              if (laptopRef.current) {
                const laptopRect = laptopRef.current.getBoundingClientRect();
                const laptopCenterX = laptopRect.left + laptopRect.width / 2;
                const laptopCenterY = laptopRect.top + laptopRect.height / 2;
        
                // Calculate distance between mouse and laptop center
                const distanceX = e.clientX - laptopCenterX;
                const distanceY = e.clientY - laptopCenterY;
                
                // Calculate the total distance using Pythagorean theorem
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                
                // Maximum range of effect (in pixels)
                const maxRange = 500;
                
                if (distance < maxRange) {
                  // Calculate movement intensity based on distance
                  const intensity = (1 - distance / maxRange) * 50; // max 30px movement
                  
                  // Calculate movement direction
                  const moveX = (distanceX / distance) * -intensity;
                  const moveY = (distanceY / distance) * -intensity;
                  
                  setMousePosition({ x: moveX, y: moveY });
                } else {
                  setMousePosition({ x: 0, y: 0 });
                }
              }
            };
        
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
          }, []);

  

        

          const brands = [
            { name: 'IC Solutions', logo: 'https://s3-us-west-2.amazonaws.com/naspovaluepoint/1652128715_ICSolutions%20Logo.jpg' },
            { name: 'Exotec', logo: 'https://mma.prnewswire.com/media/2072473/Exotec_Logo_2023_Logo.jpg?w=600' },
            { name: 'Proview', logo: 'https://www.vhv.rs/dpng/d/88-881545_proview-logo-hd-png-download.png' },
            { name: 'Uniqa', logo: 'https://www.uniqagroup.com/grp/newsroom/UNIQA_mainlogo_blue_V1_4c.png' },
            { name: 'Clutch', logo: 'https://www.teralogistics.com/wp-content/uploads/2024/02/Movex-Logo-gmail.png' },
            { name: 'Gartner', logo: 'https://companieslogo.com/img/orig/IT_BIG-36956903.png?t=1597269509' },
            { name: 'Movex', logo: 'https://logosrated.net/wp-content/uploads/2016/08/Proview-Technology-Logo-1-247x179.jpg' }
          ];  
          
          const logos = [
            { 
              name: 'Cloudways',
              url: 'https://www.zarla.com/images/amazon-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2',
              className: 'w-32'
            },
            { 
              name: 'HubSpot',
              url: 'https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2',
              className: 'w-32'
            },
            { 
              name: 'Envato',
              url: 'https://www.zarla.com/images/hyundai-logo-2400x2400-20220516.png?crop=1:1,smart&width=150&dpr=2',
              className: 'w-32'
            },
            { 
              name: 'Awwwards',
              url: 'https://www.zarla.com/images/facebook-logo-2400x2400-20220518.png?crop=1:1,smart&width=150&dpr=2',
              className: 'w-32'
            },
            { 
              name: 'Hongkiat',
              url: 'https://www.zarla.com/images/google-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2',
              className: 'w-32'
            },
            { 
              name: 'Tem',
              url: 'https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2',
              className: 'w-24'
            },
            { 
              name: 'Hongkiat',
              url: 'https://www.zarla.com/images/microsoft-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2',
              className: 'w-32'
            },
            { 
              name: 'Hongkiat',
              url: 'https://www.zarla.com/images/toyota-logo-2400x2400-20220519-1.png?crop=1:1,smart&width=150&dpr=2',
              className: 'w-32'
            },
            { 
              name: 'Hongkiat',
              url: 'https://www.zarla.com/images/nestle-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2',
              className: 'w-32'
            }
            
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


  return (
    <div className="-container">

    <div className="header-container">
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/video6.webm" 
          type="video/webm" 
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
          Content
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
  
      </div>
    </div>
    
    <div className="CT-container">
      <div className="CT-content">
        <div className="illustration-container">
          <div className="purple-blob"></div>
          <div 
            className="laptop-container"
            ref={laptopRef}
            style={{
              transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            <div className="laptop">
              <p className="laptop-text">Content</p>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h1 className="CT-title">
            The Prodigious eLearning Courses for you
          </h1>
          <p className="CT-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in ipsum
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <button className="discover-button">
            Discover new Courses
          </button>
        </div>
      </div>
    </div>
    <div className="ct-features-container">
      <motion.h1 
        className="ct-features-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Content <span>Feature</span>
      </motion.h1>

      <div className="ct-features-grid">
        {/* First Feature Card */}
        <motion.div
          className="ct-feature-card1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="ct-feature-content">
            <h2>One Click Demo Import</h2>
            <p>Instantly install demos, plugins, a child theme with Techco Import's few clicks.Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="ct-feature-image">
            <img src="/img7.jpg" alt="Demo import interface" className="ct-main-image" />
            <div className="ct-feature-icon">
              <svg viewBox="0 0 24 24" className="ct-icon">
                <path d="M13 5l7 7-7 7M5 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Second Feature Card */}
        <motion.div
          className="ct-feature-card1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="ct-feature-content">
            <h2>Front-end Real-time Editing</h2>
            <p>Techco beautiful pages effortlessly with drag & drop builders and over 60 custom widgets Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="ct-feature-image">
            <img src="/img8.jpg" alt="Real-time editing interface" className="ct-main-image" />
            <div className="ct-elementor-icon">
              <svg viewBox="0 0 24 24" className="ct-icon">
                <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </motion.div>
        {/* 3rd Feature Card */}
        <motion.div
          className="ct-feature-card1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="ct-feature-content">
            <h2>Back-end Real-time Editing</h2>
            <p>Techco beautiful pages effortlessly with drag & drop builders and over 60 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="ct-feature-image">
            <img src="/img11.jpg" alt="Real-time editing interface" className="ct-main-image" />
            <div className="ct-elementor-icon">
              <svg viewBox="0 0 24 24" className="ct-icon">
                <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="marquee-container">
      <div className="marquee-content">
        {logos.map((logo, index) => (
          <div key={`logo-${index}`} className={`logo-item ${logo.className}`}>
            <img src={logo.url} alt={logo.name} />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`logo-dup-${index}`} className={`logo-item ${logo.className}`}>
            <img src={logo.url} alt={logo.name} />
          </div>
        ))}
      </div>
    </div>

    <div className="brands-section">
    <h2 class="text-3xl font-400 text-center bg-gradient-to-tr from-blue-600 to-teal-500 text-transparent bg-clip-text uppercase">
    Our Partners
</h2>



      <div className="mar-container">
        <div className="mar-content">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="brand-card">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="brand-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="Adaptive-container">
    <motion.h1 
        className="ct-features-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Virtual <span>Instructor</span>
      </motion.h1>
      
      
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
                <p className="Adaptive-feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
          
          <button className="discover-button1 ">
            View More
          </button>
        </div>
      </div>
    </div>

    <div className="dotrecruit-container">
      <div className="content-container1" style={{
        background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(0, 0, 0, 0.2))',
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 className="content-title1" style={{
          background: 'linear-gradient(90deg, #4ade80, #22c55e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2.5rem',
          fontWeight: '600',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>Discover Our Powerful Features</h1>
        <p className="content-description1" style={{
          fontSize: '17px',
          lineHeight: '1.8',
          color: '#ede9e9',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>Experience a comprehensive suite of cutting-edge recruitment tools designed to streamline your hiring process. Our platform combines intelligent automation, advanced candidate matching, and seamless collaboration features to help you find and secure the best talent efficiently. From AI-powered screening to interactive assessment tools, we provide everything you need to transform your recruitment workflow.</p>
      </div>
      {/* Navigation Bar */}
      <div className="navigation-bar" style={{
        background: 'transparent',
        padding: '1rem',
        borderRadius: '15px',
        margin: '0rem 0'
      }}>
        <div className="nav-tabs" style={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: '1rem'
        }}>
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="nav-indicator-container" style={{
          position: 'relative',
          height: '3px',
          background: 'rgba(74, 222, 128, 0.2)',
          borderRadius: '3px',
          marginTop: '0rem'
        }}>
          <div 
            className="nav-indicator" 
            style={{
              position: 'absolute',
              height: '100%',
              background: '#4ade80',
              borderRadius: '3px',
              transition: 'all 0.3s ease',
              width: `${100 / Object.keys(tabContent).length}%`,
              left: `${Object.keys(tabContent).indexOf(activeTab) * (100 / Object.keys(tabContent).length)}%`,
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-left">
          

          {/* Description */}
          <div className="description-container">
            <h1 className="content-title" style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #4ade80, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1.5rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              letterSpacing: '1px',
              animation: 'fadeIn 0.8s ease-out'
            }}>{currentContent.title}</h1>
            <p className="content-description" style={{
              fontSize: '17px',
              lineHeight: '1.5',
              color: '#f3f4f6',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '0.5px',
              opacity: '0.95',
              transition: 'all 0.4s ease',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              padding: '1.5rem',
              borderRadius: '12px',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>{currentContent.description}</p>
            
          </div>

          {/* Feature Icons */}
          <div className="features-grid">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-container" style={{
                  background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(96, 165, 250, 0.2))',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 12px rgba(74, 222, 128, 0.15)',
                  transform: 'scale(1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: 'scaleIn 0.5s ease-out'
                }}>
                  <div className="feature-icon" style={{
                    background: 'linear-gradient(135deg, #4ade80, #60a5fa)',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(74, 222, 128, 0.3)',
                    transform: 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div className="feature-icon-inner" style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '50%',
                      backdropFilter: 'blur(4px)'
                    }}></div>
                  </div>
                </div>
                <div className="feature-title" >{feature.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="content-right">
          <div className="illustration-container">
            <div className="illustration-outer" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="illustration-middle" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '20px',
                padding: '1.5rem'
              }}>
                <div className="illustration-inner" style={{
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  padding: '2rem'
                }}>
                  <div className="illustration-content">
                    <div className="illustration-title" style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      background: 'linear-gradient(90deg, #4ade80, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '1rem'
                    }}>Interactive Demo</div>
                    <div className="illustration-subtitle" style={{
                      fontSize: '1.25rem',
                      color: '#ede9e9',
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>View {activeTab} Features</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements with animations */}
              <div className="decorative-element element-1" style={{
                position: 'absolute',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                animation: 'spin 4s linear infinite',
                filter: 'blur(2px)',
                backgroundColor: activeTab === 'Learning' ? 'rgba(74, 222, 128, 0.2)' :
                               activeTab === 'Assessment' ? 'rgba(96, 165, 250, 0.2)' :
                               activeTab === 'Content' ? 'rgba(244, 114, 182, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                top: '10%',
                right: '10%'
              }}></div>
              <div className="decorative-element element-2" style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                animation: 'bounce 2s ease-in-out infinite',
                filter: 'blur(2px)',
                backgroundColor: activeTab === 'Learning' ? 'rgba(74, 222, 128, 0.3)' :
                               activeTab === 'Assessment' ? 'rgba(96, 165, 250, 0.3)' :
                               activeTab === 'Content' ? 'rgba(244, 114, 182, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                bottom: '10%',
                left: '10%'
              }}></div>
              <div className="decorative-element element-3" style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                animation: 'pulse 3s ease-in-out infinite, colorChange 12s infinite',
                background: 'linear-gradient(225deg, #f472b6, #a855f7, #fb923c, #ec4899, #4ade80, #60a5fa)',
                backgroundSize: '600% 600%',
                filter: 'blur(3px)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="workflow-container">
      <h1 className="workflow-heading">Item Development Process</h1>
      {/* Stage 1 */}
      <div className="stage-header">
        <div className="stage-title">
          <h2>Stage 1</h2>
          <h3>Development</h3>
        </div>
        <div className="stage-line"></div>
      </div>
      
      <div className="stage-content">
        <div className="process-box requirement">
          <h3>
            <span className="process-number">1</span>
            Requirement Analysis
          </h3>
          <p>Understanding the requirements and communication of the same with the SME's through detailed consultation and planning sessions.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box development">
          <h3>
            <span className="process-number">2</span>
            Development Phase
          </h3>
          <p>Development of questions by SME's either in office premises or on secure QMAT tool with rigorous quality standards.</p>
        </div>
      </div>
      
      {/* Stage 2 */}
      <div className="stage-header">
        <div className="stage-title">
          <h2>Stage 2</h2>
          <h3>Review Process</h3>
        </div>
        <div className="stage-line"></div>
      </div>
      
      <div className="stage-content">
        <div className="process-box review">
          <h3>
            <span className="process-number">3</span>
            Initial Review
          </h3>
          <p>Items are reviewed by an independent SME through the secure QMAT tool, with comprehensive feedback and necessary modifications.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box review">
          <h3>
            <span className="process-number">4</span>
            Secondary Review
          </h3>
          <p>Items undergo another round of review by an independent SME to ensure complete accuracy and eliminate any ambiguity.</p>
        </div>
      </div>
      
      {/* Stage 3 */}
      <div className="stage-header">
        <div className="stage-title">
          <h2>Stage 3</h2>
          <h3>Translation</h3>
        </div>
        <div className="stage-line"></div>
      </div>
      
      <div className="stage-content">
        <div className="process-box translation">
          <h3>
            <span className="process-number">5</span>
            Translation Process
          </h3>
          <p>Reviewed items are shared with expert translators through the secure QMAT tool for precise language conversion.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box translation">
          <h3>
            <span className="process-number">6</span>
            Translation Review 1
          </h3>
          <p>Translated items are shared with an independent translator through QMAT tool to verify the authenticity and accuracy of translations.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box translation">
          <h3>
            <span className="process-number">7</span>
            Translation Review 2
          </h3>
          <p>Items undergo a second review cycle by another independent translator to ensure 100% language correctness and cultural appropriateness.</p>
        </div>
      </div>
      
      {/* Stage 4 */}
      <div className="stage-header">
        <div className="stage-title">
          <h2>Stage 4</h2>
          <h3>Quality & Delivery</h3>
        </div>
        <div className="stage-line"></div>
      </div>
      
      <div className="stage-content">
        <div className="process-box quality">
          <h3>
            <span className="process-number">8</span>
            Final Quality Check
          </h3>
          <p>Comprehensive quality assessment by senior SMEs using advanced QMAT tools to ensure excellence in every aspect.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box quality">
          <h3>
            <span className="process-number">9</span>
            Secure Delivery
          </h3>
          <p>Content is securely packaged and delivered in client-specified formats through encrypted channels for maximum security.</p>
        </div>
      </div>
    </div>
    

    <footer className="footer-container">
      <div className="top-section">
        <div className="logo-section">
          <a href='/Home'><a href='/Home'><img src="/Znew.png" alt="Zenith Logo" className="lt-logo" /></a></a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/zenith-consultants-india/"><i className="fab fa-linkedin"><FaLinkedin /></i></a>
            <a href="#"><i className="fab fa-facebook"><FaFacebook /></i></a>
            {/* <a href="#"><i className="fab fa-youtube"><FaYoutube /></i></a> */}
            <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
            {/* <a href="#"><i className="fab fa-twitter"><FaTwitter /></i></a> */}
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>Content </h3>
            <ul>
            <li><a href='/LearningContentSolution'>Learning Content</a></li>
              
              
              <li>Assessment Content </li>
              <li><a href='/Translation'>Translation Services</a></li>
            </ul>
            <h3 ><a href='/DiscoverUs' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Discover Us</a></h3>

            <h3 ><a href='/Resources' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Resources</a></h3>

            
          </div>

          <div className="footer-section">
            <h3>Learning</h3>
            <ul>
              <li><a href='/AlgniteApti'>Algnite Apti</a></li>
              <li><a href='/AlgniteTech'>Algnite Tech</a></li>
              <li><a href='/AlgniteCommune'>Algnite Commune</a></li>
              <li><a href='/AlgniteLab'>Algnite Lab</a></li>
              <li><a href='/AlgniteLMS'>Algnite LMS</a></li>
            </ul>
          
          </div>
          <div className="footer-section">
            
            <h3>Assessment</h3>
            <ul>
            <li><a href='/AlgniteAptiAssess'>Algnite Apti Assess</a></li>
            <li><a href='/AlgniteTechAssess'>Algnite Tech Assess</a></li>
            <li><a href='/AlgniteMindAssess'>Algnite Mind Assess</a></li>
            <li><a href='/AlgniteHIRE'>Algnite HIRE</a></li>             
            <li><a href='/AlgniteAssess360'>Algnite Assess360</a></li>
            </ul>
          </div>
          

     

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Address: H-81 Sector 63 </p>
            <p>Noida, Uttar Pradesh, India - 201301</p>
            <p><MailIcon/><a href="mailto:contact@lntedutech.com">info@zenithindia.org</a></p>

            <h3 ><a href='/Career' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Careers</a></h3>

            <h3 ><a href='/Contact' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Submit a Query</a></h3>
            
            {/* <p><MailIcon/><a href="mailto:contact@lntedutech.com">info@zenithindia.org</a></p> */}
          </div>
        </div>
      </div>

      <div className="bottom-section">
        {/* <img src="" alt="CMMI Logo" className="cmmi-logo" /> */}
        <p>© {currentYear} All rights reserved. Zenith Education Sol. Pvt. Ltd.</p>
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
export default Content;