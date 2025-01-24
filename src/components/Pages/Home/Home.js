import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { ArrowRight } from 'lucide-react';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
    title: "Comprehensive Training ",
    description: "Learn skills with 120k+ video courses taught by industry experts",
    image: "/pink.gif",
    buttonText: "Start Learning Today",
    gradient: "bg-gradient-1"
    
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description: "Master modern web development with hands-on projects",
    image: "/blue.gif",
    buttonText: "Explore Courses",
    gradient: "bg-gradient-2"
  },
  {
    id: 3,
    title: "AI/ML Training",
    description: "dive into the world of artificial intelligence and machine learning",
    image: "/dark.gif",
    buttonText: "Get Started",
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


  const features = [
    {
      icon: "🎓",
      title: "Smart Learning",
      description: "Adaptive learning pathways tailored to individual student needs and learning styles."
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description: "Comprehensive analytics providing real-time insights into student performance and engagement."
    },
    {
      icon: "👥",
      title: "Collaboration Tools",
      description: "Enhanced collaboration features enabling seamless interaction between educators and students."
    }
    
  ];

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
      icon: "💻",
      title: "Full Stack Web Development"
    },
    {
      icon: "📱",
      title: "Mobile App Development"
    },
    {
      icon: "🤖",
      title: "Artificial Intelligence & Machine Learning"
    },
    {
      icon: "📊",
      title: "Data Science & Analytics"
    },
    {
      icon: "☁️",
      title: "Cloud Computing"
    },
    {
      icon: "♾️",
      title: "DevOps"
    },
    {
      icon: "🎨",
      title: "UI/UX Design"
    },
    {
      icon: "🗄️",
      title: "Database Management System"
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
  // const [translateX, setTranslateX] = useState(0);
  // const offerings = [
  //   {
  //     title: 'Skill Exchange',
  //     image: '/api/placeholder/500/300',
  //     cta: 'Explore Jobs',
  //     link: '#'
  //   },
  //   {
  //     title: 'Engineers Ensemble',
  //     image: '/api/placeholder/500/300',
  //     cta: 'Join Community',
  //     link: '#'
  //   },
  //   {
  //     title: 'Micro Learning',
  //     image: '/api/placeholder/500/300',
  //     cta: 'Know More',
  //     link: '#'
  //   },
  //   {
  //     title: 'Expert Network',
  //     image: '/api/placeholder/500/300',
  //     cta: 'Connect Now',
  //     link: '#'
  //   },
  //   {
  //     title: 'Career Growth',
  //     image: '/api/placeholder/500/300',
  //     cta: 'Learn More',
  //     link: '#'
  //   },
  //   {
  //     title: 'Tech Workshops',
  //     image: '/api/placeholder/500/300',
  //     cta: 'Register Now',
  //     link: '#'
  //   }
  // ];

  // const handleNext = () => {
  //   if (translateX > -(offerings.length - 3) * 100) {
  //     setTranslateX(prev => prev - 100);
  //   }
  // };

  // const handlePrev = () => {
  //   if (translateX < 0) {
  //     setTranslateX(prev => prev + 100);
  //   }
  // };
  const currentYear = new Date().getFullYear();


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
                <button className="slide-button">
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
        <h1>Advancing Career-Ready Expertise</h1>
        <p className="description">
          We cultivate globally employable, industry ready talent through state-of-the-art, 
          application-oriented learning, skilling, assessment, and certification programmes, 
          powered by L&T's decades-long expertise in engineering and technology. We partner 
          with universities, colleges, corporates, NGOs, and government to expand access to 
          technical and skill-driven education.
        </p>
      </div>
      

      <div className="services-container">
        <div className="service-card college-connect">
          <div className="overlay">
            <h2>CollegeConnect</h2>
          </div>
        </div>
        

        <div className="service-card workonnect">
          <h2>Workonnect</h2>
          <ul className="menu-list">
            {workonnectMenu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="service-card learnkonnect">
          <div className="overlay">
            <h2>Learnkonnect</h2>
          </div>
        </div>
      </div>
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


        {/* ZESPL Section */}
        <section className="zespl-section" ref={zesplRef}>
          <SectionTitle>Comprehensive Training Programs</SectionTitle>
          <Card>
            <p className="zespl-description">
              ZESPL stands at the forefront of educational innovation, leveraging
              cutting-edge technology to transform the way institutions deliver
              knowledge. Our platform combines artificial intelligence, data
              analytics, and pedagogical expertise to create a comprehensive
              learning ecosystem.
            </p>
            <p className="zespl-description">
              We believe in the power of personalized learning experiences and
              data-driven decision making to enhance educational outcomes. Our
              solutions are designed to meet the evolving needs of modern
              educational institutions while maintaining the highest standards of
              academic excellence.
            </p>
          </Card>
        </section>

        {/* Vision & Mission Section */}
        <section className="vision-section" ref={visionRef}>
      <SectionTitle>Vision & Mission</SectionTitle>
      <div className="vision-grid">
        <Card className="vision-card">
          <div className="vision-header">
            <span className="vision-icon">💫</span>
            <h3 className="vision-title">Vision</h3>
          </div>
          <p className="vision-description">
            To revolutionize global education by creating an interconnected
            learning ecosystem that transcends traditional boundaries and
            empowers learners to reach their full potential.
          </p>
        </Card>
        
        <Card className="vision-card">
          <div className="vision-header">
            <span className="vision-icon">🎯</span>
            <h3 className="vision-title">Mission</h3>
          </div>
          <p className="vision-description">
            To deliver innovative, accessible, and effective educational
            solutions that enhance learning outcomes while fostering
            collaboration between educators and students worldwide.
          </p>
        </Card>
      </div>
    </section>
    <section className="training-services-section" ref={useIntersectionObserver()}>
  <SectionTitle>Training Services Offered</SectionTitle>
  <div className="training-services-grid">
    {services.map((service, index) => (
      <Card key={index} className="service-card">
        <div className="service-header">
          <span className="service-icon">{service.icon}</span>
          <h3 className="service-title">{service.title}</h3>
        </div>
      </Card>
    ))}
  </div>
</section>

        {/* Features Section */}
        <section className="features-section" ref={featuresRef}>
          <SectionTitle>Key Features</SectionTitle>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Card key={index}>
                <div className="feature-header">
                  <span className="feature-icon">{feature.icon}</span>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
                <p className="feature-description">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>
        


        <footer className="footer-container">
      <div className="top-section">
        <div className="logo-section">
          <img src="/ZenithL.png" alt="Zenith Logo" className="lt-logo" />
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

