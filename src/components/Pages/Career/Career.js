import React, { useState } from 'react';
import { 
    FaLinkedin, 
    FaFacebook, 
    FaYoutube, 
    FaInstagram, 
    FaTwitter 
  } from 'react-icons/fa';
  import MailIcon from '@mui/icons-material/Mail';
import './Career.css';

const Career = () => {
    const currentYear = new Date().getFullYear();
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      jobRole: '',
      resume: null
    });
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const validateForm = () => {
      const newErrors = {};
      
      // Name validation
      if (formData.name.length < 3) {
        newErrors.name = 'Name must be at least 3 characters long';
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      
      // Phone validation
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      
      // Job Role validation
      if (!formData.jobRole) {
        newErrors.jobRole = 'Please select a job role';
      }
      
      // Resume validation
      if (!formData.resume) {
        newErrors.resume = 'Please upload your resume';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {
        setSubmitStatus('submitting');
        try {
          // Simulating API call
          await new Promise(resolve => setTimeout(resolve, 1500));
          console.log('Form submitted:', formData);
          setSubmitStatus('success');
          // Reset form after 3 seconds
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              jobRole: '',
              resume: null
            });
            setSubmitStatus('');
          }, 3000);
        } catch (error) {
          setSubmitStatus('error');
        }
      }
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
          if (file.size <= 5 * 1024 * 1024) { // 5MB limit
            setFormData({ ...formData, resume: file });
            setErrors({ ...errors, resume: '' });
          } else {
            setErrors({ ...errors, resume: 'File size should not exceed 5MB' });
          }
        } else {
          setErrors({ ...errors, resume: 'Please upload a PDF or image file' });
        }
      }
    };

    const scrollToForm = () => {
      document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
    };

    const benefits = [
      { 
          title: 'Team Work', 
          icon: 'team-icon',
          description: 'Collaborate with talented professionals in a supportive environment that fosters innovation and collective success.'
      },
      { 
          title: 'Secured Future', 
          icon: 'secured-icon',
          description: 'Enjoy job stability, competitive compensation, and comprehensive benefits that ensure long-term financial security.'
      },
      { 
          title: 'Learning Opportunity', 
          icon: 'learning-icon',
          description: 'Access cutting-edge training programs and mentorship to expand your knowledge and grow your career.'
      },
      { 
          title: 'Creative Freedom', 
          icon: 'creative-icon',
          description: 'Work in an environment that encourages innovative thinking and gives you the freedom to bring your ideas to life.'
      },
      { 
          title: 'Work-Life Balance', 
          icon: 'balance-icon',
          description: 'Benefit from flexible schedules and wellness programs designed to help you thrive both professionally and personally.'
      },
      { 
          title: 'Upgrade Skills', 
          icon: 'skills-icon',
          description: 'Stay ahead in your field with opportunities to master new technologies and refine your expertise.'
      }
  ];

  const categories = [
    { id: 'ALL', name: 'ALL' },
    { id: 'IT_ADMIN', name: 'IT & ADMIN' },
    { id: 'ENGINEERING', name: 'ENGINEERING', count: 20 },
    { id: 'SUPPORT', name: 'SUPPORT' },
    { id: 'DESIGN', name: 'DESIGN' },
    { id: 'DIGITAL_MARKETING', name: 'DIGITAL MARKETING' }
  ];

  const jobs = [
    {
      title: 'Wordpress Developer',
      experience: '2 Years',
      deadline: '2021-05-08',
      category: 'ENGINEERING'
    },
    {
      title: 'Javascript',
      experience: '1 Years',
      deadline: '2021-05-08',
      category: 'ENGINEERING'
    },
    {
      title: 'Apps Developer',
      experience: '3 Years',
      deadline: '2021-05-08',
      category: 'ENGINEERING'
    },
    {
      title: 'IOS Developer',
      experience: '2 Years',
      deadline: '2021-05-08',
      category: 'ENGINEERING'
    },
    {
      title: 'Node JS Developer',
      experience: '3 Years',
      deadline: '2021-05-08',
      category: 'ENGINEERING'
    },
    {
      title: 'IT Support Specialist',
      experience: '1 Year',
      deadline: '2021-05-10',
      category: 'IT_ADMIN'
    },
    {
      title: 'UX Designer',
      experience: '2 Years',
      deadline: '2021-05-12',
      category: 'DESIGN'
    },
    {
      title: 'Digital Marketing Specialist',
      experience: '2 Years',
      deadline: '2021-05-15',
      category: 'DIGITAL_MARKETING'
    },
    {
      title: 'Customer Support Specialist',
      experience: '1 Year',
      deadline: '2021-05-20',
      category: 'SUPPORT'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const filteredJobs = activeCategory === 'ALL' 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

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
      <div className="animated-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>

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
          Careers at ZESPL
        </h1>
        <div className="divider"></div>
        <p className="subtitle">
          Transform your performance evaluation process with our comprehensive 360-degree feedback system.
          Leverage AI-powered insights to drive meaningful employee development and organizational growth.
        </p>
      </div>
    </div>

    <div className="job-listings-container">
      <div className="benefits-section">
        <div className="benefits-header">
          
          <h2>Why you Should Join Our Team</h2>
          <p className="welcome-text">
            we want to feel like home when you are working at ZESPL(Zenith Education Sol. Pvt. Ltd.) & for that we have curated a great set of benefits for you.It all starts with the free lunch!
          </p>
        </div>

        <div className="benefits-grid">
          <style jsx>{`
            .benefits-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              padding: 2rem 0;
            }

            .benefit-card {
              background: linear-gradient(145deg, #ffffff, #f5f5f5);
              border-radius: 15px;
              padding: 2rem;
              box-shadow: 0 10px 20px rgba(0,0,0,0.05);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
              border: 1px solid rgba(0,0,0,0.05);
            }

            .benefit-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            }

            .benefit-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 4px;
              background: linear-gradient(90deg, #4ECDC4, #45B7D1);
              opacity: 0;
              transition: opacity 0.3s ease;
            }

            .benefit-card:hover::before {
              opacity: 1;
            }

            .benefit-icon {
              width: 20px;
              height: 20px;
              background: linear-gradient(135deg, #4ECDC4, #45B7D1);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: -1.5rem;
              color: white;
              font-size: 24px;
            }

            .benefit-card h3 {
              color: #2c3e50;
              font-size: 1.25rem;
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .benefit-card p {
              color: #666;
              line-height: 1.6;
              font-size: 0.95rem;
            }

            @media (max-width: 768px) {
              .benefits-grid {
                grid-template-columns: 1fr;
                padding: 1rem;
              }
              
              .benefit-card {
                padding: 1.5rem;
              }
            }
          `}</style>
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className={`benefit-icon ${benefit.icon}`}></div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="career-section">
        <div className="career-header">
          
          <h2>Career Openings</h2>
          <p>
            We're always looking for creative, talented self-starters to join the JMC family.
            Check out our open roles below and fill out an application.
          </p>
        </div>

        <div className="job-categories">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name} {category.count ? `(${category.count})` : ''}
            </button>
          ))}
        </div>

        <div className="job-listings">
          {filteredJobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-info">
                <div className="job-title">
                  <h3>{job.title}</h3>
                </div>
                <div className="job-details">
                  <div className="detail-group">
                    <span className="detail-label">Experience</span>
                    <span className="detail-value">{job.experience}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Deadline</span>
                    <span className="detail-value">{job.deadline}</span>
                  </div>
                </div>
              </div>
              <button className="apply-btn" onClick={scrollToForm}>Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div id="application-form" className="application-form-container">
      <div className="form-header">
        <h2>Apply Now</h2>
        <p>Take the next step in your career journey with us</p>
      </div>
      <form onSubmit={handleFormSubmit} className="application-form">
        <div className="form-group">
          <label htmlFor="name">Full Name <span className="required">*</span></label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            placeholder="Enter your full name"
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address <span className="required">*</span></label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="Enter your professional email address"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number <span className="required">*</span></label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            placeholder="Enter your contact number"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="jobRole">Preferred Job Role <span className="required">*</span></label>
          <select
            id="jobRole"
            required
            value={formData.jobRole}
            onChange={(e) => {
              setFormData({ ...formData, jobRole: e.target.value });
              if (errors.jobRole) setErrors({ ...errors, jobRole: '' });
            }}
            className={errors.jobRole ? 'error' : ''}
          >
            <option value="">Select a role</option>
            {jobs.map((job, index) => (
              <option key={index} value={job.title}>{job.title}</option>
            ))}
          </select>
          {errors.jobRole && <span className="error-message">{errors.jobRole}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="resume">Resume (PDF or Image) <span className="required">*</span></label>
          <div className="file-input-container">
            <input
              type="file"
              id="resume"
              required
              accept=".pdf,image/*"
              onChange={handleFileChange}
              className={`file-input ${errors.resume ? 'error' : ''}`}
            />
            <div className={`file-input-label ${formData.resume ? 'has-file' : ''}`}>
              <span className="file-icon">📎</span>
              {formData.resume ? formData.resume.name : 'Upload your resume (Max 5MB)'}
            </div>
          </div>
          {errors.resume && <span className="error-message">{errors.resume}</span>}
          <span className="file-format-hint">Accepted formats: PDF, JPG, PNG</span>
        </div>
        
        <button 
          type="submit" 
          className={`submit-btn ${submitStatus}`}
          disabled={submitStatus === 'submitting'}
        >
          {submitStatus === 'submitting' ? 'Submitting...' : 
           submitStatus === 'success' ? 'Application Submitted!' : 
           submitStatus === 'error' ? 'Error Submitting' : 
           'Submit Application'}
        </button>
      </form>
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

export default Career;