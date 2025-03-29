import React, { useState } from 'react';
import { 
    FaLinkedin, 
    FaFacebook, 
    FaYoutube, 
    FaInstagram, 
    FaTwitter 
  } from 'react-icons/fa';
  import MailIcon from '@mui/icons-material/Mail';
import './Contact.css';

const Contact = () => {
    const currentYear = new Date().getFullYear();
    const [activeCategory, setActiveCategory] = useState('ALL');

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    

   

















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
      
      {/* Animated shapes */}
      

      <div className="content">
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

          @keyframes morphShape {
            0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
            50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
            100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          }

          .animated-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
          }

          .shape {
            position: absolute;
            opacity: 0.15;
            pointer-events: none;
            animation: morphShape 8s ease-in-out infinite;
          }

          .shape1 {
            width: 120px;
            height: 120px;
            background: linear-gradient(45deg, #FF6B6B, #FF8E53);
            top: 20%;
            left: 10%;
          }

          .shape2 {
            width: 150px;
            height: 150px;
            background: linear-gradient(45deg, #4E65FF, #92EFFD);
            top: 40%;
            right: 15%;
          }

          .shape3 {
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #A17FE0, #5D26C1);
            bottom: 20%;
            left: 20%;
          }

          .shape4 {
            width: 130px;
            height: 130px;
            background: linear-gradient(45deg, #59C173, #5D26C1);
            bottom: 30%;
            right: 20%;
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
            position: relative;
            z-index: 2;
            left: 8rem;
            @media (max-width: 1200px) {
              font-size: 3.5rem !important;
              left: 6rem;
            }

            @media (max-width: 992px) {
              font-size: 3rem !important;
              left: 4rem;
            }

            @media (max-width: 768px) {
              font-size: 2.5rem !important;
              left: 0rem;
            }

            @media (max-width: 576px) {
              font-size: 2rem !important;
              left: 1rem;
            }

            @media (max-width: 480px) {
              font-size: 1.8rem !important;
              left: 0.5rem;
            }

            @media (max-width: 320px) {
              font-size: 1.5rem !important;
              left: 0;
            }
            
          }

          .title:hover {
            transform: scale(1.05);
          }

          .divider {
            width: 200px;
            height: 4px;
            background: linear-gradient(90deg, #000000, #4E65FF, #A17FE0);
            margin: 20px auto;
            border-radius: 2px;
          }

          .subtitle {
            font-size: 1.2rem;
            color: #f8fafe;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
            animation: slideInFromBottom 1.5s ease-out 0.3s forwards;
            opacity: 0;
            position: relative;
            z-index: 2;
          }

          @media (max-width: 768px) {
            .title {
              font-size: 2.5rem !important;
            }
            .subtitle {
              font-size: 1rem;
              padding: 0 20px;
            }
            .divider {
              width: 150px;
            }
          }
        `}
      </style>
        <h1 className="title">
        Connect With Us
        </h1>
        <div className="divider"></div>
        <p className="subtitle">
        We’d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us via email, phone, or visit our office during business hours. You can also fill out the contact form, and we’ll get back to you as soon as possible. </p>
      </div>
    </div>

    {/* Contact Form Section */}
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-image-section">
          <div className="image-animation">
            <div className="floating-elements">
              <div className="element element1"></div>
              <div className="element element2"></div>
              <div className="element element3"></div>
              <div className="element element4"></div>
            </div>
            <img src="/Cont.png" />
          </div>
        </div>
        
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <p>Have questions? We'd love to hear from you.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                required
                className="form-input"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
              <span className="btn-icon">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="Footer-gap"></div>
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
    
    
  );
};

export default Contact ;