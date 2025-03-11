import React from 'react';
import { useRef } from 'react';
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Key } from 'lucide-react';
import MailIcon from '@mui/icons-material/Mail';
import { 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';
import './AlgniteLMS.css'
 

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

const AlgniteLMS = () => {
  const currentYear = new Date().getFullYear();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
          src="/LMS.webm" 
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
          Algnite LMS 
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
  
      </div>
    </div>

    
    <div className="aptitude-section">
      <div className="content">
        <h1>Transform Your Learning With AI-Based Learning Management System (LMS) 
        </h1>
        <p>
        AIgnite LMS is a powerful learning management system that allows flexible and self-paced learning. Access a vast library of resources at your convenience, powered by AI recommendations.
        </p>
        <h2>Key highlights</h2>
        <ul className="li-list">
          <li>Interactive videos and learning modules          </li>
          <li>Self-paced learning with flexible schedules          </li>
          <li>AI-driven performance tracking and personalized recommendations           </li>
          
        </ul>
      </div>
      <div className="image">
        <img src="./img7.jpg" alt="Relevant Image" />
      </div>
    </div>

    <section className="training-services-section" ref={useIntersectionObserver()}>
  <SectionTitle>Redefine Learning with AIgnite LMS</SectionTitle>
  <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Blended Learning Experience
        </div>
        <p class="ag-courses-item_dis" >Blend in-person and online teaching to build dynamic hybrid learning environments that maximize student engagement.</p>

        {/* <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div> */}
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Personalized Study Plans
        </div>
        <p class="ag-courses-item_dis" >AI-generated learning paths tailored to your performance and learning pace. Continuously adapt with real-time insights, ensuring efficiency.</p>

        {/* <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div> */}
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Interactive Video Lessons
        </div>
        <p class="ag-courses-item_dis" >Engage with interactive lessons and quizzes to enhance concept retention. Gain real-time feedback and personalized recommendations. </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Progress Tracking and Analytics

        </div>
        <p class="ag-courses-item_dis" >Monitor progress with analytics and insights for improvement. Track performance metrics and get personalized recommendations to boost efficiency.</p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Seamless Integration with Digital Tools


        </div>
        <p class="ag-courses-item_dis" >Integrate seamlessly with third-party educational apps and advanced tools to enhance the learning process and provide a cohesive digital classroom experience.

        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Secure Data Management


        </div>
        <p class="ag-courses-item_dis" >Ensure the safety of student data with robust security protocols, advanced encryption, and strict compliance with educational data protection standards. Our system continuously monitors for threats to maintain a secure learning.

        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Multi-Device Accessibility


        </div>
        <p class="ag-courses-item_dis" >Enable students to access learning materials anytime, anywhere, on multiple devices, ensuring uninterrupted learning beyond the classroom.

        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title">
        Automated Enrollment System

        </div>
        <p class="ag-courses-item_dis" >Streamline enrollment and payment procedures with automated invoicing and receipt management, enhancing operational efficiency.

        </p>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Tailored Branding Solutions


        </div>
        <p class="ag-courses-item_dis" >Strengthen your educational identity with fully customizable websites, course pages, and mobile apps that reflect your unique brand and vision for growth.
        </p>
      </a>
    </div>

  </div>
</div>
</section>

    

        <div className="Footer-gap"></div>
        <footer className="footer-container">
              <div className="top-section">
                <div className="logo-section">
                  <a href='/Home'><img src="/Zenith.png" alt="Zenith Logo" className="lt-logo" /></a>
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
export default AlgniteLMS;