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
    title: "Shaping the Future of Assessments with Cutting-Edge Innovation ",
    description: "At Zenith, we are paving the way for the next generation of education and talent acquisition.",
    image: "/blue.gif",
    buttonText: "Explore Our Solutions",
    gradient: "bg-gradient-1"
    
  },
  {
    id: 2,
    title: "Shaping the Future of Contents with Cutting-Edge Innovation",
    description: "At Zenith, we are paving the way for the next generation of education and talent acquisition.",
    image: "/dblue.gif",
    buttonText: "Explore Our Solutions",
    gradient: "bg-gradient-2"
  },
  {
    id: 3,
    title: "Shaping the Future of Learning with Cutting-Edge Innovation",
    description: "At Zenith, we are paving the way for the next generation of education and talent acquisition.",
    image: "/dark.gif",
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
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample72.jpg",
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
    { icon: <Lightbulb />, name: 'Schools and Colleges ' },
    { icon: <PenTool />, name: 'Corporates' },
    { icon: <Brain />, name: 'Medical Education ' },
    { icon: <Activity />, name: 'Media and Entertainment ' },
    { icon: <BarChart2 />, name: 'IT and Software Development ' },
    { icon: <DollarSign />, name: 'Finance and Banking ' },
    { icon: <Monitor />, name: 'Legal and Compliance ' },
    { icon: <Camera />, name: 'Hospitality and Tourism ' },
    { icon: <Database />, name: 'Marketing' },
    { icon: <Code />, name: 'Arts and Science ' },
    { icon: <Server />, name: 'High-Tech' },
    { icon: <Cpu />, name: 'Teaching Science' }
  
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
      image: 'https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?semt=ais_hybrid',
      links: [
        { text: 'Algnite Apti', url: '/AlgniteApti' },
        { text: 'Algnite Tech', url: '/AlgniteTech' },
        { text: 'Algnite Commune', url: '/AlgniteCommune' },
        // { text: 'Algnite Company Specific', url: '#' },
        { text: 'Algnite Lab', url: '/AlgniteLab' },
        { text: 'Algnite LMS', url: '/AlgmiteLMS' }
      ]
    },
    {
      title: 'Assessment',
      image: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?semt=ais_hybrid',
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
      image: 'https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-8478.jpg?semt=ais_hybrid',
      links: [
        { text: 'Assessment Content', url: '#' },
        { text: 'Learning Content', url: '#' },
        { text: 'Interactive Content', url: '/InteractiveContentSolution' },
        { text: 'K12 Solutions', url: '#' },
        { text: 'Translation Services', url: '#' }
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
              <h1 className="slide-title">
                  {slide.title.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      style={{ '--char-index': charIndex }}
                      className="animated-char"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
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

    <div className="F-Title">
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
        <p class="ag-courses-item_dis" >Fostering curiosity and engagement, we empower students to take charge of their learning journey.</p>

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
        <p class="ag-courses-item_dis" >Streamlining hiring process with intelligent assessments and data-driven insights.</p>

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
        <p class="ag-courses-item_dis" >We equip students with the skills and confidence they need to excel in campus placements.</p>
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
        <p class="ag-courses-item_dis" >Bridging skill gaps by analyzing  candidate’s performance data and recommending targeted learning modules. </p>
      </a>
    </div>

  </div>
</div>
</section>
<div className="Cons-Title">
<div className="header">
      <h1 >Educational Solutions and Services Overview</h1>
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
            <div className="C-icon-wrapper">
              {service.icon}
            </div>
            <h1 className="C-title">{service.title}</h1>
            {/* <p className="C-subtitle">{service.subtitle}</p> */}
            <p className="C-description">{service.description}</p>
            <button 
              className="learn-more-btn animate-on-mount visible"
            >
              view more
            </button>
          </div>
        ))}
      </div>
    </div>

 
    <h1 className="M-header">Laser focused on WordPress</h1>
    <div className="carousel-container">
    
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
                  <p className="carousel-description">{card.description}</p>
                  <div className="carousel-actions">
                    <a 
                      href={card.viewMore}
                      className="carousel-link"
                    >
                       View More  
                    </a>
                    
                  </div>
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

        <div className="landing-page">
      <header>
        <div className="M-title">
        <h1 className="M-header">Laser focused on WordPress</h1>
        <p>Unleash the full potential of your tech-oriented website with Stratus!</p>
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
    </motion.div>
  );
};

export default Home;

