import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Key } from 'lucide-react';
import MailIcon from '@mui/icons-material/Mail';
import './AssessmentContent.css'
import { 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';

import { 
  FaLanguage,
  FaGlobe,
  FaBookOpen,
  FaBook,
  FaFileAlt,
  FaFont,
  FaPenNib,
  FaScroll,
  FaFeather,
  FaPen,
  FaQuoteRight,
  FaAlignRight,
  FaBookReader,
  FaParagraph,
  FaAlignLeft
} from 'react-icons/fa';
 

const AssessmentContent = () => {
  const currentYear = new Date().getFullYear();
  
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay before starting animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);


  

  const abtCards = [
    {
      title: "NON-DOMAIN",
      description: [
        "General English",
        "General Hindi",
        "Quantitative Aptitude/Basic numeracy",
        "General Intelligence and Reasoning",
        "General Science",
        "General Knowledge and Awareness",
        "Current Affairs"
        
        
      ]
    },
    {
      title: "MANAGEMENT",
      description: [
        "Marketing ",
        "Sales", 
        "Finance",
        "Operations",
        "Human Resource",
        "Accounts"
      ]
    },
    {
      title: "DIPLOMA",
      description: [
        "Electronics",
        "Telecom",
        "Electrical",
        "Computers",
        "Civil",
        "Mechanical"
        
        
      ]
    },
    {
      title: "ENGINEERING",
      description: [
        "Electronics",
        "Telecom",
        "Electrical",
        "Computers",
        "Civil",
        "Mechanical",
        "Automobile",
        "Biotechnology"
      ]
    },
    {
      title: "TRADE",
      description: [
        "Desktop Publishing Operator",
        "Electrical Mechanic",
        "Mechanic Diesel",
        "Fitter",
        "Mechanic Motor Vehicle",
        "Machinist",
        "Turner",
        "Welder",
        "Offset Machine Operator",
        "Binder",
        "Copy Holder",
        "Draughtsman(Mechanical)",
        "Road Safety",
        "Fire Engine Driver",
        "Fireman",
        "Other subjects of Skill India"
        
        
        
      ]
    },
    {
      title: "MEDICAL",
      description: [
        "Assistant Physiotherapist",
    "Dietitian",
    "Health Inspector",
    "Laboratory Technologist",
    "Social Welfare Officer",
    "Laboratory Assistant",
    "Laboratory Attendant",
    "Medical Laboratory Technologist",
    "Medical Social Welfare Officer",
    "Nursing Officer",
    "Nursing Officer (Staff Nurse)",
    "Para Medical Worker",
    "Pharmacist",
    "Physiotherapist",
    "Radiographer",
    "Technical Assistant (Surgical)",
    "X-Ray Technician"
      ]
    },
    {
      title: "PGT/TGT",
      description: [
        "Education",
    "Accounts",
    "Statistics",
    "Economics",
    "Botany",
    "Zoology",
    "Geology",
    "Chemistry",
    "Physics",
    "History",
    "Geography",
    "Anthropology",
    "Home Science",
    "Psychology",
    "Physical Education"
        
        
      ]
    },
    {
      title: "OTHERS",
      description: [
      "Museum Curator",
    "Museum Conservator",
    "Horticulture",
    "Fisheries",
    "Cook-cum-Kitchen Assistant",
    "Laboratory Attendant",
    "Library & Information Assistant",
    "Library Clerk"
      ]
    },
  ];

  const categories = [
    { icon: <FaLanguage size={20} />, name: 'Hindi' },
    { icon: <FaGlobe size={20} />, name: 'English' },
    { icon: <FaBookOpen size={20} />, name: 'Malayalam' },
    { icon: <FaBook size={20} />, name: 'Telugu' },
    { icon: <FaParagraph size={20} />, name: 'Kannada' },
    { icon: <FaFileAlt size={20} />, name: 'Assamese' },
    { icon: <FaFont size={20} />, name: 'Bengali' },
    { icon: <FaPenNib size={20} />, name: 'Gujarati' },
    { icon: <FaScroll size={20} />, name: 'Konkani' },
    { icon: <FaFeather size={20} />, name: 'Manipuri' },
    { icon: <FaBookReader size={20} />, name: 'Marathi' },
    { icon: <FaPen size={20} />, name: 'Odia' },
    { icon: <FaQuoteRight size={20} />, name: 'Punjabi' },
    { icon: <FaAlignRight size={20} />, name: 'Urdu' },
    { icon: <FaAlignLeft size={20} />, name: 'Tamil' }
  ];

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
          src="/AssessContent1.webm" 
          type="video/webm" 
        />
      </video>
      <div className="overlay"></div>
      <style>
        {`
          @keyframes gradientText {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%; 
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes slideInFromBottom {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .title {
            font-size: 4rem !important;
            font-weight: 700;
            background: linear-gradient(
              90deg,
              #0d47a1,
              #4a90e2,
              #03a2ca,
              #0d47a1
            );
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradientText 6s ease infinite,
                       slideInFromBottom 1.5s ease-out forwards;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            letter-spacing: 2px;
            text-align: center;
            margin-bottom: 1rem;
            padding: 0.5rem;
            transition: transform 0.3s ease;
          }

          .title:hover {
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .title {
              font-size: 2.5rem !important;
            }
          }
        `}
      </style>
      <div className="content">

        <h1 className="title">
        Assessment Content
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
  
      </div>
    </div>

    <div className={`neopat-container ${isVisible ? 'visible' : ''}`}>
      <div className="neopat-content">
        <div className="neopat-text-container">
          <div className="neopat-logo">
            <div className="neopat-speech-bubble"></div>
            <h1 className="neopat-title">About Assessment Content</h1>
          </div>
          <div className="neo-dis">

          <p className="neopat-description">
          ZESPL's Question Management and Authoring Tool (QMAT) has been developed inhouse with highest level of security measures. QMAT is a repository containing 100000+ questions covering various general, specific and technical topics. The questions have been created by our experts and have been passed through various rounds of reviews. 
QMAT is constantly updated with quality items that are exam ready and have been developed to ensure MINIMUM number of post exam challenges. QMAT can hold question in more than 15 languages, making it easier to manage the multilingual questions and their usage in examination.
QMAT has multiple layers of security and can be accessed only by certain authorised people. Inspite of easy of collaboration for Item authoring, item checking and item translation, the whole repository can be accessed only through one single authorised person with biometrics. Each item has a detailed timestamps so that any unauthorised access can be flagged and countered. 
QMAT is an indispensable tool for secure, efficient, and high-quality question management.

          </p>
          
          {/* <div className='assess-btn'>
          <button 
              className="learn-more-btn animate-on-mount visible"
            >
              view more
            </button>
            </div> */}
          </div>
        </div>
        
        <div className="neopat-image-container">
          <div className="neopat-image">
          <img src="/Acontent.png" alt="Relevant Image" />
          </div>
        </div>
      </div>
    </div>


    <section className="training-services-section" ref={useIntersectionObserver()}>
  <SectionTitle>QMAT Advantages</SectionTitle>
  <div class="ag-format-container">
    
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Secure Storage
        </div>
        <p class="ag-courses-item_dis" >QMAT has easy and secured storage of items. No one has the full access to the items. Multiple layers of security must be crossed to retrieve the items from the tool.  </p>

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
        Support for Multilingual
        </div>
        <p class="ag-courses-item_dis" >The items can be stored in the QMAT in 15 languages. The same item can be retrieved in all the languages simultaneously, enhancing accessibility and multilingual support.</p>

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
        Tagging and Search 
        </div>
        <p class="ag-courses-item_dis" >Multiple tags like subject, topic, sub-topic, difficulty level, class level etc are there with each item in the QMAT. Tags can be used to access various and similar types of questions easily. </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Secure Remote Access for Collaboration

        </div>
        <p class="ag-courses-item_dis" >Multiple layers of security ensure easy remote collaboration for SME in creating, reviewing, translating items, limiting access to assigned items.</p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Tracking
        </div>
        <p class="ag-courses-item_dis" >Each item in QMAT has timestamp details embedded into them. The timestamp has details for each step of questions like creation, edit, translation or any access made to it.  </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Enhanced Security
        </div>
        <p class="ag-courses-item_dis" >Multiple layers of security like 2 factor authentication, restricted access, access to limited and very small number of items etc and various security features to ensure no unauthorised access is there.</p>
      </a>
    </div>

    

  </div>
</div>
</section>

<div className="workflow-container">
<div className="abt-header">
        <h1>Item Development Process</h1>
        
      </div>
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
            <span className="process-number"></span>
            Requirement Analysis
          </h3>
          <p>Understanding the requirements and communication of the same with the SME's through detailed consultation and planning sessions.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box development">
          <h3>
            <span className="process-number"></span>
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
            <span className="process-number"></span>
            Initial Review
          </h3>
          <p>Items are reviewed by an independent SME through the secure QMAT tool, with comprehensive feedback and necessary modifications.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box review">
          <h3>
            <span className="process-number"></span>
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
            <span className="process-number"></span>
            Translation Process
          </h3>
          <p>Reviewed items are shared with expert translators through the secure QMAT tool for precise language conversion.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box translation">
          <h3>
            <span className="process-number"></span>
            Translation Review 1
          </h3>
          <p>Translated items are shared with an independent translator through QMAT tool to verify the authenticity and accuracy of translations.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box translation">
          <h3>
            <span className="process-number"></span>
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
            <span className="process-number"></span>
            Final Quality Check
          </h3>
          <p>Comprehensive quality assessment by senior SMEs using advanced QMAT tools to ensure excellence in every aspect.</p>
        </div>
        
        <div className="arrow" aria-hidden="true"></div>
        
        <div className="process-box quality">
          <h3>
            <span className="process-number"></span>
            Secure Delivery
          </h3>
          <p>Content is securely packaged and delivered in client-specified formats through encrypted channels for maximum security.</p>
        </div>
      </div>
    </div>

    <div className="ABT">
    <div className="abt-container">
      <div className="abt-header">
        <h1>Supported Content Domains</h1>
        
      </div>
      <div className="abT-description">
      <p className="description">
      At ZESPL we have worked on 100+ domains including common non-domain topics. We have 250+ SME's empanelled with us (Professors and Assistant Professors of various Govt. and Private Universities). 
        </p>
        </div>
      <div className="abt-grid">
        {abtCards.map((card, index) => (
          <div key={index} className="abt-card">
            <div className="abt-header-group">
              <h3 className="abt-title">{card.title}</h3>
            </div>
            <ul className="abt-description">
              {card.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>

    <div className='T-container'>
    <div className="course-categories">

      <div className="cour-title">
      <div className="header">
      <h1 >Languages Supported</h1>
      </div>
      </div>
      
      <div className="categories-grid-t">
        {categories.map((category, index) => (
          <div key={index} className="category-card-t">
            <div className="icon-container">
              {category.icon}
            </div>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
    </div>







    

    


    
<div className="Footer-gap"></div>

<footer className="footer-container">
      <div className="top-section">
        <div className="logo-section">
          <a href='/Home'><a href='/Home'><img src="/Zenith.png" alt="Zenith Logo" className="lt-logo" /></a></a>
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
export default AssessmentContent;