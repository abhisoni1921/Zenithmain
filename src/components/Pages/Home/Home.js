import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight ,ArrowRight} from 'lucide-react';
import { Star } from 'lucide-react';
// import { ArrowRight } from 'lucide-react';
import MailIcon from '@mui/icons-material/Mail';
import { Lightbulb, PenTool, Brain, Activity, 
  BarChart2, DollarSign, Monitor, Camera, 
  Database, Code, Server, Cpu } from 'lucide-react';
import { Phone, Target, Target as TargetIcon, Clipboard } from 'lucide-react';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChatIcon from '@mui/icons-material/Chat';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import HotelIcon from '@mui/icons-material/Hotel';
import CampaignIcon from '@mui/icons-material/Campaign';
import ScienceIcon from '@mui/icons-material/Science';
import MemoryIcon from '@mui/icons-material/Memory';

import { 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';

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

const Feature = ({ icon, title, subtitle }) => {
  const featureRef = useIntersectionObserver();
  
  return (
    <div className="feature-item" ref={featureRef}>
      <div className="feature-icon">{icon}</div>
      <div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-subtitle">{subtitle}</p>
      </div>
    </div>
  );
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

const Card = ({ children, className = "" }) => {
  const cardRef = useIntersectionObserver();
  
  return (
    <div className={`card ${className}`} ref={cardRef}>
      {children}
    </div>
  );
};
const bannerData = [
  {
    id: 1,
    title: "AI-Powered Personalized Adaptive Learning Education",
    description: "Experience personalized, AI-powered learning that adapts to your progress and maximizes success.",
    image: "/learn2.png",
    buttonText: "Explore Our Solutions",
    gradient: "bg-gradient-1"
    
  },
  {
    id: 2,
    title: "Advancing Assessment through Pioneering Innovation",
    description: "At Zenith, we are paving the way for the next generation of education and talent acquisition.",
    image: "/Assess2.png",
    buttonText: "Explore Our Solutions",
    gradient: "bg-gradient-2"
  },
  {
    id: 3,
    title: "Future-Ready Content Curated by Experts and Enhanced with AI",
    description: "Access expert-crafted, AI-optimized content designed for better understanding and retention.",
    image: "/Content1.png",
    buttonText: "Explore Our Solutions",
    gradient: "bg-gradient-3"
  }

];


const Home = () => {



  

  const zesplRef = useIntersectionObserver();
  const visionRef = useIntersectionObserver();
  const featuresRef = useIntersectionObserver();
  const impactRef = useIntersectionObserver();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('prev');
      setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const autoplayTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(autoplayTimer);
  }, []);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [translateX, setTranslateX] = useState(0);

const originalCards = [
            {
              imageUrl: "/img1.jpg",
              title: "Mountain Adventure",
              description: "Discover innovative solutions and cutting-edge features that will transform your digital experience. Our platform combines powerful technology with intuitive design to deliver exceptional results.",
              link: "#",
              viewMore: "https://example.com/mountains"
            },
            {
              imageUrl: "/img2.jpg",
              title: "Ocean Escape",
              description: "Discover innovative solutions and cutting-edge features that will transform your digital experience. Our platform combines powerful technology with intuitive design to deliver exceptional results.",
              link: "#",
              viewMore: "https://example.com/ocean"
            },
            {
              imageUrl: "/img3.jpg",
              title: "Urban Explorer",
              description: "Discover innovative solutions and cutting-edge features that will transform your digital experience. Our platform combines powerful technology with intuitive design to deliver exceptional results.",
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
  





  const achievements = [
    {
      icon: "⭐",
      stat: "1M+",
      label: "Active Users"
    },
    {
      icon: "🎓",
      stat: "500+",
      label: "Partner Institutions"
    },
    {
      icon: "📈",
      stat: "95%",
      label: "Success Rate"
    }
  ];

  const [activeTab, setActiveTab] = useState('Learning');
  
  const tabContent = {
    Learning: {
      title: "Learning",
      description: "Go beyond traditional education by integrating AI-driven personalized learning paths and an advanced Learning Management System (LMS). We provide structured learning journeys, tailored to individual needs, helping students and professionals enhance their skills efficiently.",
      features: [
        { title: "AI Lab for Practice", icon: "shield" },
        { title: "AI-Powered Personalization", icon: "shield" },
        { title: "College Placement Training", icon: "shield" },
        { title: "Soft Skills & Personality Development", icon: "shield" },
        { title: "Comprehensive LMS", icon: "shield" },
        { title: "Industry-specific training modules", icon: "shield" }

        
      ]
    },
    Assessment: {
      title: "Assessment",
      description: "Our advanced assessment tools provide precise insights into learners' skills and progress. We offer customized tests, AI-powered analytics, and detailed feedback reports to help students, educators, and recruiters make data-driven decisions.",
      features: [
        { title: "Customizable Tests", icon: "shield" },
        { title: "AI-Powered Analytics", icon: "shield" },
        { title: "Skill-Based Assessments ", icon: "shield" },
        { title: "Instant evaluation and detailed feedback", icon: "shield" },
        { title: "Robust Question Authoring Tool", icon: "shield" },
        { title: "Data-Driven Decision Making", icon: "shield" }
      ]
    },
    Content: {
      title: "Content",
      description: "Our AI-powered content development includes interactive learning modules, structured question banks, and concept-based materials that enhance comprehension and retention. Our team of Subject Matter Experts ensures that the content is accurate, engaging, and aligned with the latest curriculum standards.",
      features: [
        { title: "Expert-Curated Educational Content", icon: "shield" },
        { title: "AI-Assisted Question Authoring", icon: "shield" },
        { title: "Custom Content Development", icon: "shield" },
        { title: "Multilingual Support", icon: "shield" },
        { title: "K-12 Curriculum Support", icon: "shield" },
        { title: "Engaging & Interactive Modules", icon: "shield" }
      ]
    }
  };
  
  const currentContent = tabContent[activeTab];

  const services = [
    {
      icon: <Target />,
      title: "AI-Powered Analytics and Insights",
      subtitle: "Let's start right from the beginning by outlining the core model of your business, and any pain points.",
      description: "Leverage AI-driven insights to track student progress, analyze performance, and provide data-driven recommendations for enhanced learning outcomes.",
      buttonColor: "blue"
    },
    {
      icon: <Target />,
      title: "High-Quality Content Assurance",
      subtitle: "So you need to hit a wider more targeted audience? Let's explore how to do that and develop a plan of action.",
      description: "Our rigorous quality control processes ensure that all learning materials and assessments are accurate, relevant, and aligned with industry standards.",
      buttonColor: "green"
    },
    {
      icon: <Target />,
      title: "Innovative Question Authoring Tool",
      subtitle: "So you need to hit a wider more targeted audience? Let's explore how to do that and develop a plan of action.",
      description: "Streamline the creation, review, and management of questions with our advanced question authoring tool. Enhance efficiency with AI-powered suggestions, seamless collaboration, and intuitive customization options.",
      buttonColor: "green"
    },
    {
      icon: <Target />,
      title: "Robust Data Security and Confidentiality",
      subtitle: "So you need to hit a wider more targeted audience? Let's explore how to do that and develop a plan of action.",
      description: "We prioritize data protection with stringent security protocols, safeguarding user information and ensuring complete confidentiality",
      buttonColor: "green"
    },
    {
      icon: <Target />,
      title: "Multi-Language Support for Global Reach",
      subtitle: "So you need to hit a wider more targeted audience? Let's explore how to do that and develop a plan of action.",
      description: "Cater to diverse linguistic needs with our multi-language support, including translation and localization services.",
      buttonColor: "green"
    },
    {
      icon: <TargetIcon />,
      title: "Expert Team of Educators and SMEs",
      subtitle: "It's time to look at the pain points of your business and craft a method of relieving those issues efficiently.",
      description: "Our team comprises experienced educators and subject matter experts who bring deep knowledge and real-world insights.",
      buttonColor: "green"
    } 
  ];
  const workonnectMenu = [
    'Overview',
    'Before Joining Programme',
    'Hire Train Deploy Model',
    'Role/Product Based-Skilling',
    'Assessment Solutions',
    'Partners'
  ];
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    'Overview',
    'Before Joining Programme',
    'Hire Train Deploy Model',
    'Role/Product Based-Skilling',
    'Assessment Solutions',
    'Partners'
  ];
  
  const currentYear = new Date().getFullYear();
  const cards = [
    {
      image: "/img2.jpg",
      title: "Learning",
      description: [
        "AIgnite Apti Forge",
        "AIgnite Tech Forge",
        "AIgnite SoftSkills",
        "AIgnite Apti Boost",
        "AIgnite Soft Boost",
        "AIgnite Company Specific",
        "AIgnite Lab"

      ]
    },
    {
      image: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
      title: "Assessment",
      description: [
        "AIgnite Apti Assess",
        "AIgnite Tech Assess",
        "AIgnite Assess360",
        "AIgnite HIRE"
      ]
    },
    {
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg",
      title: "Content",
      description: [
        "Assessment Content Solution",
        "Learning Content Solution",
        "Interactive Content Solution"
      ]
    }
  ];
  const categories = [
    { icon: <SchoolIcon />, name: 'Schools/Colleges' },
    { icon: <BusinessIcon />, name: 'Corporates' },
    { icon: <LocalHospitalIcon />, name: 'Healthcare' },
    { icon: <ChatIcon />, name: 'Communication' },
    { icon: <ComputerIcon />, name: 'Computer Science' },
    { icon: <AccountBalanceIcon />, name: 'Finance & Banking' },
    { icon: <GavelIcon />, name: 'Legal Compliance' },
    { icon: <HotelIcon />, name: 'Hospitality Sector' },
    { icon: <CampaignIcon />, name: 'Marketing' },
    { icon: <ScienceIcon />, name: 'Arts and Science' },
    { icon: <MemoryIcon />, name: 'High-Tech' },
    { icon: <SchoolIcon />, name: 'Teaching Science' }
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
  const cardsData = [
    {
      title: 'Learning',
      image: '/Learning (2)_enhanced.jpg',
      links: [
        { text: 'Algnite Apti', url: '/AlgniteApti' },
        { text: 'Algnite Tech', url: '/AlgniteTech' },
        { text: 'Algnite Commune', url: '/AlgniteCommune' },
        // { text: 'Algnite Company Specific', url: '#' },
        { text: 'Algnite Lab', url: '/AlgniteLab' },
        { text: 'Algnite LMS', url: '/AlgniteLMS' }
      ]
    },
    {
      title: 'Assessment',
      image: '/assessment_enhanced.jpg',
      links: [
        { text: 'Algnite Apti Assess', url: '/AlgniteAptiAssess' },
        { text: 'Algnite Tech Assess', url: '/AlgniteTechAssess' },
        { text: 'Algnite Personality Access', url: '/AlgniteMindAssess' },
        { text: 'Algnite HIRE', url: '/AlgniteHIRE' },
        { text: 'Algnite Assess360', url: '/AlgniteAssess360' }
      ]
    },
    {
      title: 'Content',
      image: '/content_enhanced.jpg',
      links: [
        { text: 'Assessment Content', url: '/AssessmentContent' },
        { text: 'Learning Content', url: '/LearningContentSolution' },
        // { text: 'Interactive Content', url: '/InteractiveContentSolution' },
        // { text: 'K12 Solutions', url: '#' },
        { text: 'Translation Services', url: '/Translation' }
      ]
    }
  ];
  // Assessment Content 
  // Learning Content 
  // Interactive Content
  //  K12 Solutions  Translation Services
  
  const brands = [
    { name: 'IC Solutions', logo: 'https://s3-us-west-2.amazonaws.com/naspovaluepoint/1652128715_ICSolutions%20Logo.jpg' },
    { name: 'Exotec', logo: 'https://mma.prnewswire.com/media/2072473/Exotec_Logo_2023_Logo.jpg?w=600' },
    { name: 'Proview', logo: 'https://www.vhv.rs/dpng/d/88-881545_proview-logo-hd-png-download.png' },
    { name: 'Uniqa', logo: 'https://www.uniqagroup.com/grp/newsroom/UNIQA_mainlogo_blue_V1_4c.png' },
    { name: 'Clutch', logo: 'https://www.teralogistics.com/wp-content/uploads/2024/02/Movex-Logo-gmail.png' },
    { name: 'Gartner', logo: 'https://companieslogo.com/img/orig/IT_BIG-36956903.png?t=1597269509' },
    { name: 'Movex', logo: 'https://logosrated.net/wp-content/uploads/2016/08/Proview-Technology-Logo-1-247x179.jpg' }
  ]; 
  const Snip1273Card = ({ image, title, description }) => {
    return (
      <figure className="card-figure">
        <div className="card-container">
          {/* Image container */}
          <div className="image-container">
            <img
              src={image}
              alt={title}
              className="card-image"
            />
          </div>
  
          {/* Content overlay */}
          <figcaption className="card-content">
            <h3 className="card-title">
              {title}
            </h3>
            <div className="description-container">
              {description.map((item, index) => (
                <div 
                  key={index}
                  className="description-item"
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="description-text">{item}</div>
                  {index < description.length - 1 && (
                    <div className="separator" />
                  )}
                </div>
              ))}
            </div>
          </figcaption>
  
          {/* Gradient overlay */}
          <div className="gradient-overlay" />
        </div>
      </figure>
    );
  };
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
  return (
    <motion.div
      className="home-wrapper"
      initial={{ backgroundColor: "rgba(136, 187, 239, 0.5)" }}
      animate={{
        backgroundColor: [
          "rgba(248, 249, 250, 0.5)",
          "rgba(235, 244, 255, 0.5)",
          "rgba(230, 255, 250, 0.5)",
          "rgba(248, 249, 250, 0.5)"
        ]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <div className="home-container">
        {/* Hero Section */}
        {/* <div className="hero-section">
          <div className="hero-content">

            <div className="hero-text">
              <SectionTitle>
                Comprehensive Training Programs For <button className="px-6 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
              Career
            </button> Growth
              </SectionTitle>
              <p className="hero-description">
                Offering placement training, full-stack development, AI/ML, mobile app
                development, programming languages, and 40,000+ practice questions to
                help achieve career goals.
              </p>
              
              <div className="hero-features">
                <Feature
                  icon="📹"
                  title="Learn Skills With 120k+"
                  subtitle="Video Courses"
                />
                <Feature
                  icon="🎓"
                  title="Choose Courses Taught By"
                  subtitle="Real-World Experts"
                />
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
              Start Learning Today
            </button>
            </div>
            <div className="hero-image">
              <img
                src="/Educational Website.gif"
                alt="Training Program"
                className="main-image"
              />
            </div>
          </div>
        </div> */}
         <div className="banner-container">
          
      <div className="navigation-buttons">
        <button 
          onClick={prevSlide} 
          className={`nav-button ${isAnimating ? 'button-disabled' : ''}`}
          disabled={isAnimating}
        >
          <ChevronLeft className="nav-icon" />
        </button>
        <button 
          onClick={nextSlide} 
          className={`nav-button ${isAnimating ? 'button-disabled' : ''}`}
          disabled={isAnimating}
        >
          <ChevronRight className="nav-icon" />
        </button>
      </div>


      <div 
        className={`slider-container ${direction} ${isAnimating ? 'animating' : ''}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerData.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${slide.gradient} ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-content">
              
              <div className="slide-text">
              <div className="slide-badge">
                <div className="badge-content">
                  <span className="badge-icon">⭐</span>
                  <span className="badge-text">
                    {index === 0 ? "Professional Solutions" : 
                     index === 1 ? "Smart Learning" : 
                     "Placement Success"}
                  </span>
                </div>
              </div>
              <style jsx>{`
                .slide-badge {
                  width: min(250px, 90%);
                  text-align: center;
                  margin-left: auto;
                  margin-right: auto;
                  display: inline-flex;
                  padding: 8px 16px;
                  background: rgba(255, 255, 255, 0.1);
                  backdrop-filter: blur(10px);
                  border-radius: 50px;
                  margin-bottom: 24px;
                  border: 1px solid rgba(255, 255, 255, 0.2);
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  animation: badgeSlideIn 0.6s ease-out forwards;
                  transform: translateY(20px);
                  opacity: 0;
                }

                @media (max-width: 768px) {
                  .slide-badge {
                    padding: 6px 12px;
                    margin-bottom: 16px;
                  }
                }

                @media (max-width: 480px) {
                  .slide-badge {
                    padding: 4px 8px;
                    margin-bottom: -12px;
                    margin-top: 12px;
                  }
                }

                @keyframes badgeSlideIn {
                  to {
                    transform: translateY(0);
                    opacity: 1;
                  }
                }

                .badge-content {
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  width: 100%;
                  justify-content: center;
                }

                .badge-icon {
                  font-size: clamp(1em, 2vw, 1.2em);
                  animation: starPulse 2s infinite;
                }

                @keyframes starPulse {
                  0% { transform: scale(1); }
                  50% { transform: scale(1.2); }
                  100% { transform: scale(1); }
                }

                .badge-text {
                  font-weight: 600;
                  font-size: clamp(0.8em, 1.5vw, 0.95em);
                  letter-spacing: 0.5px;
                  background: linear-gradient(120deg, #fff, #e0e0e0);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
                  white-space: nowrap;
                }
              `}</style>
              <h1 className="slide-title">
                {slide.title.split(' ').map((word, wordIndex, words) => (
                  <React.Fragment key={wordIndex}>
                    {word.split('').map((char, charIndex) => (
                      <span
                        key={`${wordIndex}-${charIndex}`}
                        style={{ '--char-index': wordIndex * words.length + charIndex }}
                        className="animated-char"
                      >
                        {char}
                      </span>
                    ))}
                    {wordIndex < words.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </h1>
                <p className="slide-description">{slide.description}</p>
                <button className="slide-button animate-on-mount visible">
                  <span className="button-text">{slide.buttonText}</span>
                  <span className="button-shine"></span>
                </button>
              </div>
              <div className="slide-image-container">
                <div className="image-wrapper">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setDirection(index > currentSlide ? 'next' : 'prev');
                setCurrentSlide(index);
              }
            }}
            className={`pagination-dot ${currentSlide === index ? 'active' : ''}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
    <div className="talent-page">
      <div className="header">
        <h1>Are You Ready to Revolutionize Learning and Recruitment?
        </h1>
        <p className="description">
        We're redefining the landscape of Assessments, Recruitment, and Learning with state-of-the-art solutions.
         Our innovative platforms leverage advanced technology to create efficient, accurate, and engaging experiences.
          From intelligent assessments that adapt to individual abilities to recruitment tools that identify the perfect fit, 
          and learning solutions that inspire curiosity and growth .

        </p>
      </div>
      
      <div className="HI-cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className="HI-card-container">
          
          <img 
            src={card.image} 
            alt={card.title} 
            className="HI-card-image"
          />
          <div className="HI-overlay">
            <style>
              {`
                .HI-overlay-title {
                  font-size: clamp(1.2rem, 3vw, 1.8rem);
                  font-weight: 600;
                  color: #fff;
                  margin-bottom: clamp(1rem, 2vw, 1.5rem);
                  position: relative;
                  padding-bottom: 0.8rem;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  transition: all 0.3s ease;
                  text-align: center;
                }

                .HI-overlay-title::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 50px;
                  height: 3px;
                  background: #fff;
                  transition: width 0.3s ease;
                }

                .HI-overlay-title:hover::after {
                  width: 100px;
                }

                .HI-links-list {
                  list-style: none;
                  padding: 0;
                  margin: 0;
                  display: flex;
                  flex-direction: column;
                  gap: clamp(0.5rem, 1vw, 0.8rem);
                  opacity: 0;
                  transform: translateY(-20px);
                  transition: all 0.8s ease;
                }

                .HI-overlay:hover .HI-links-list {
                  opacity: 1;
                  transform: translateY(0);
                }

                .HI-link-item {
                  color: #fff;
                  text-decoration: none;
                  font-size: clamp(0.9rem, 2vw, 1.1rem);
                  font-weight: 400;
                  transition: all 0.3s ease;
                  position: relative;
                  padding: clamp(0.3rem, 1vw, 0.5rem) clamp(0.5rem, 2vw, 1rem);
                  border-radius: 10px;
                  background: rgba(255, 255, 255, 0.1);
                  text-align: left;
                  transform: translateY(-10px);
                  opacity: 0;
                  transition: all 0.8s ease;
                }

                .HI-overlay:hover .HI-link-item {
                  transform: translateY(0);
                  opacity: 1;
                }

                .HI-link-item:hover {
                  background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
                  transform: translateX(0px);
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .HI-overlay {
                  background: linear-gradient(
                    to bottom,
                    rgb(17 44 178 / 80%) 0%,
                    rgba(0, 0, 0, 0.9) 100%
                  );
                  padding: clamp(1rem, 3vw, 2rem);
                  transform: translateY(-100%);
                  transition: transform 0.8s ease;
                }

                .HI-card-container:hover .HI-overlay {
                  transform: translateY(0);
                }

                @media screen and (max-width: 768px) {
                  .HI-overlay {
                    padding: 1.5rem;
                    transform: translateY(0);
                  }
                  
                  .HI-links-list {
                    gap: 0.5rem;
                    opacity: 1;
                    transform: translateY(0);
                  }

                  .HI-link-item {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                @media screen and (max-width: 480px) {
                  .HI-overlay {
                    padding: 1rem;
                  }
                  
                  .HI-overlay-title::after {
                    width: 30px;
                  }
                  
                  .HI-overlay:hover .HI-overlay-title::after {
                    width: 60px;
                  }
                }
              `}
            </style>
            <h3 className="HI-overlay-title">{card.title}</h3>
            <ul className="HI-links-list">
              {card.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url} className="HI-link-item">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
      {/* <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Snip1273Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div> */}
    </div>

    {/* <div className="new-banner-container">
      <div className="new-banner-header">
        <h3>Our Advantage</h3>
        <h2>What We Also Offer</h2>
      </div>
      
      <div className="new-offerings-container">
        <button 
          className="new-nav-button new-prev" 
          onClick={handlePrev}
          disabled={translateX >= 0}
        >
          <ArrowRight className="rotate-180" />
        </button>
        
        <div className="new-offerings-wrapper">
          <div 
            className="new-offerings-grid"
            style={{
              transform: `translateX(${translateX}%)`,
            }}
          >
            {offerings.map((offering, index) => (
              <div key={index} className="new-offering-card">
                <div className="new-card-content">
                  <img src={offering.image} alt={offering.title} />
                  <div className="new-overlay">
                    <h3>{offering.title}</h3>
                    <a href={offering.link} className="new-cta-link">
                      {offering.cta} <ArrowRight className="new-arrow-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="new-nav-button new-next" 
          onClick={handleNext}
          disabled={translateX <= -(offerings.length - 3) * 100}
        >
          <ArrowRight />
        </button>
      </div>
    </div> */}
         
    

    

    <div className="course-categories">
      <div className="cour-title">
      <div className="header">
      <h1 >Empowering Every Industry with Tailored Learning Solutions</h1>
      </div>
      </div>
      
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="icon-container">
              {category.icon}
            </div>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="brands-section">
      <h1 className="content-title2">Our Partners</h1>




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

    {/* <div className="F-Title">
<div className="header">
      <h1 >Optimized Theme Features and Benefits</h1>
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
    </div> */}
   
   <div className="dotrecruit-container">
      <div className="content-container1" style={{
        // background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(0, 0, 0, 0.2))',
        padding: '2rem',
        '@media (max-width: 1024px)': {
          padding: '1.5rem'
        },
        '@media (max-width: 768px)': {
          padding: '1rem'
        },
        '@media (max-width: 480px)': {
          padding: '0.75rem'
        }
      }}>
        <h1 className="content-title1" style={{
          background: 'linear-gradient(90deg, #4ade80, #22c55e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2.5rem',
          fontWeight: '600',
          marginBottom: '2rem',
          textAlign: 'center',
          '@media (max-width: 1024px)': {
            fontSize: '2.25rem',
            marginBottom: '1.75rem'
          },
          '@media (max-width: 768px)': {
            fontSize: '2rem',
            marginBottom: '1.5rem'
          },
          '@media (max-width: 480px)': {
            fontSize: '1.75rem',
            marginBottom: '1.25rem'
          }
        }}>Unlock Potential with Our Innovative Solutions</h1>
        <p className="content-description1" style={{
          fontSize: '17px',
          lineHeight: '1.8',
          color: '#ede9e9',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          '@media (max-width: 1024px)': {
            fontSize: '16px',
            maxWidth: '700px'
          },
          '@media (max-width: 768px)': {
            fontSize: '15px',
            maxWidth: '600px',
            lineHeight: '1.6'
          },
          '@media (max-width: 480px)': {
            fontSize: '14px',
            maxWidth: '100%',
            padding: '0 1rem',
            lineHeight: '1.5'
          }
        }}>We revolutionize education and skill development with AI-driven learning, assessment, and content solutions. Our platform is designed to empower students, educators, and institutions with cutting-edge tools for seamless knowledge acquisition, practice, and evaluation.</p>
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
            <style>
              {`
                .features-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                  gap: 1.5rem;
                  margin-top: 2rem;
                  padding: 0 1rem;
                }

                @media (max-width: 768px) {
                  .features-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                  }

                  .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                  }

                  .feature-icon-container {
                    flex-shrink: 0;
                  }

                  .feature-title {
                    font-size: 0.9rem;
                  }
                }

                @media (max-width: 480px) {
                  .features-grid {
                    padding: 0 0.5rem;
                  }
                }
              `}
            </style>
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


    <section className="training-services-section" ref={useIntersectionObserver()}>
  <SectionTitle>Transforming Possibilities with Next-Gen Solutions</SectionTitle>
  <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        K-12 Education
        </div>
        <p class="ag-courses-item_dis" >Comprehensive curriculum development and academic support to enhance student learning. We provide interactive content, assessments, and resources for effective education.
        </p>

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
        Talent Acquisition
        </div>
        <p class="ag-courses-item_dis" >Empowering organizations to find, attract, and hire top talent through strategic recruitment solutions, streamlined processes, and expert guidance.
        </p>

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
        Career Skills Cultivation
        </div>
        <p class="ag-courses-item_dis" >Equipping learners with essential soft skills, industry-relevant expertise, and real-world training to enhance employability and long-term career success.
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Engaging Content Solutions

        </div>
        <p class="ag-courses-item_dis" >Transform learning experiences with gamification, adaptive learning, and immersive multimedia, driving student engagement and retention.
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Seamless Translation Services

        </div>
        <p class="ag-courses-item_dis" >Break language barriers with accurate and culturally adapted translations, we can enhance learning accessibility for diverse audiences.
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Smart LMS Solutions

        </div>
        <p class="ag-courses-item_dis" >Streamline education with intuitive learning management systems, offering personalized learning paths and advanced analytics for better outcomes.
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        AI-Driven Content Creation

        </div>
        <p class="ag-courses-item_dis" >Leverage cutting-edge AI to create dynamic, customized educational content that resonates with learners and meets curriculum needs.
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title">
        Behavioral Assessments
        </div>
        <p class="ag-courses-item_dis" >Gain deep insights into candidate behaviors with AI-driven assessments, ensuring the right fit for roles and enhancing recruitment success.
        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Skill Gap Analysis

        </div>
        <p class="ag-courses-item_dis" >Bridging skill gaps by analyzing  candidate's performance data and recommending targeted learning modules. </p>
      </a>
    </div>

  </div>
</div>
</section>

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

<div className="Cons-Title">
<div className="header">
      <h1 >Dynamic Features for Engaging and Effective Learning</h1>
      </div>
      </div>
<div className="consulting-container">
  
      <div className="C-services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="C-service-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            
            <h1 className="C-title">{service.title}</h1>
            {/* <p className="C-subtitle">{service.subtitle}</p> */}
            <p className="C-description">{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>

 
    
    
    <div className="carousel-container">
    <h1 className="M-header">Laser focused on WordPress</h1>
      <style>
        {`
          .carousel-container {
            background: #1a1a1a;
            padding: 4rem 2rem;
            position: relative;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          }

          .carousel-button {
            background: rgba(255,255,255,0.1);
            color: #fff;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            backdrop-filter: blur(8px);
          }

          .carousel-button:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-50%) scale(1.1);
          }

          .carousel-button-prev { left: 0px; }
          .carousel-button-next { right: 0px; }

          .carousel-card {
            background: #2a2a2a;
            
            overflow: hidden;
            transition: transform 0.3s ease;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          }

          

          .carousel-image-container {
            position: relative;
            height: 250px;
          }

          .carousel-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .carousel-image-overlay {
            background: linear-gradient(to bottom, transparent, rgba(42,42,42,0.9));
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50%;
          }

          .carousel-content {
            padding: 2rem;
          }

          .carousel-title {
            color: #fff;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .carousel-description {
            color: #b3b3b3;
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .carousel-link {
            display: inline-block;
            padding: 0.8rem 1.5rem;
            background: linear-gradient(135deg, #2196f3, #1565c0);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          .carousel-link:hover {
            transform: translateX(5px);
            box-shadow: 0 4px 12px rgba(33,150,243,0.3);
          }
        `}
      </style>

      <button 
        className="carousel-button carousel-button-prev"
        onClick={handlePrev}
      >
        ←
      </button>
      
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex - 2) * (100 / 3)}%)`,
            transition: transitionEnabled ? 'transform 0.5s ease' : 'none',
          }}
        >
          {extendedCards.map((card, index) => (
            <div key={index} className="carousel-item">
              <div className="carousel-card">
                <div className="carousel-image-container">
                  <img 
                    src={card.imageUrl} 
                    alt={card.title} 
                    className="carousel-image"
                  />
                  <div className="carousel-image-overlay" />
                </div>
                <div className="carousel-content">
                  <h3 className="carousel-title">{card.title}</h3>
                  <p className="carousel-description">
                    {card.description}
                    
                  </p>
                  {/* <div className="carousel-actions">
                    <a 
                      href={card.viewMore}
                      className="carousel-link"
                    >
                      Explore More →
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="carousel-button carousel-button-next"
        onClick={handleNext}
      >
        →
      </button>
    </div>

        {/* <div className="landing-page">
      <header>
        <div className="M-title">
        <h1 className="M-header">Laser focused on WordPress</h1>
        
        </div>
      </header>

      <div className="features-container">
        <FeatureCard
          icon="💎"
          title=" Visuals and user-friendly layouts"
          description="Crafted with innovation in mind, Stratus boasts a sleek and futuristic design that captivates your visitors from the moment they land on your site. Impress with stunning visuals and user-friendly layouts that scream modernity and sophistication."
          image={<img src="/img4.jpg" alt="Dashboard preview" className="dashboard-preview" />}
          learnMoreLink="#"
          className="premium-design"
        />

        <FeatureCard
          icon="🖼️"
          title=" large selection of curated images"
          description="A premium WordPress theme that transforms your website into a visual masterpiece. Immerse your audience in a captivating online experience with our exceptional collection of curated images. Elevate your content effortlessly with a vast selection of stunning visuals that resonate with your brand and message."
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
          title="Pre-designed templates in seconds"
          description="You can now access a stunning array of pre-designed templates that can be applied to your website in a matter of seconds. Choose from a rich collection of meticulously crafted templates, each designed to exude professionalism and captivate your audience's attention."
          image={<img src="/img8.jpg" alt="Templates preview" className="templates-preview" />}
          learnMoreLink="#"
          className="rapid-build"
        />
      </div>
    </div> */}

    


        <footer className="footer-container">
      <div className="top-section">
        <div className="logo-section">
          <a href='/Home'><a href='/Home'><img src="/Zenith.png" alt="Zenith Logo" className="lt-logo" /></a></a>
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
            <h3>Content </h3>
            <ul>
            <li><a href='/LearningContentSolution'>Learning Content</a></li>
              
              
              <li>Assessment Content </li>
              <li><a href='/Translation'>Translation Services</a></li>
            </ul>
            <h3 ><a href='/DiscoverUs' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Discover Us</a></h3>

            <h3 ><a href='/Resources' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Resources</a></h3>

            <h3 ><a href='/Career' className="footer-title1" style={{fontSize: '1.2rem', color: '#ffffff'}}>Careers</a></h3>
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

            <h3>Support</h3>
            <p>Contact Us Now</p>
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
    </motion.div>
  );
};

export default Home;

