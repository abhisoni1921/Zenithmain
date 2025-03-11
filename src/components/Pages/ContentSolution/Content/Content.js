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
    

    <footer className="footer-container">
      <div className="top-section">
        <div className="logo-section">
          <img src="/Zenith.png" alt="Zenith Logo" className="lt-logo" />
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"><FaLinkedin /></i></a>
            <a href="#"><i className="fab fa-facebook"><FaFacebook /></i></a>
            <a href="#"><i className="fab fa-youtube"><FaYoutube /></i></a>
            <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
            <a href="#"><i className="fab fa-twitter"><FaTwitter /></i></a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>Content Solutions</h3>
            <ul>
            <li><a href='/LearningContentSolution'>Learning Content Solution</a></li>
              <li>Adaptive Learning</li>
              <li>Virtual Instructor-Led Learning</li>
              <li>Animated Learning</li>
              <li>Gamification</li>
              <li>K12 Learning</li>
              <li>Micro Learning</li>
              <li>Assessment Content Solutions</li>
              <li><a href='/Translation'>Translation Services</a></li>
            </ul>
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
            <h3>Discover Us</h3>
            <ul>
              <li>About ZESPL</li>
              <li>Leadership</li>

            </ul>
            <h3>Resources</h3>
            <ul>
              <li>Subject-Matter Expert</li>
              <li>Translators</li>
              <li>Editors</li>
              <li>Copywriters</li>
              <li>Digital Design Providers</li>
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