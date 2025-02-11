import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo-container">
        <a href="/" className="navbar-logo">
          <img 
            src="/Zenith.png" 
            alt="Logo" 
            width={isScrolled ? "150" : "150"} 
            height={isScrolled ? "36" : "36"}
          />
        </a>
      </div>
      <div>
        {/* <button className="px-6 py-1 bg-gradient-to-r from-green-600 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
          Zenith
        </button> */}
      </div>
      <div className="nav-links-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/Home" style={{ textDecoration: 'none' }} className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item dropdown">
          <Link to="/DiscoverUs" style={{ textDecoration: 'none' }} className="navbar-link">Discover Us</Link>
            <div className="dropdown-content">
              <Link to="/about" style={{ textDecoration: 'none' }}>
              <span className="special">About ZESPL</span></Link>
              <Link to="/visionMission" style={{ textDecoration: 'none' }}>
              <span className="special">Our Vision & Mission</span></Link>
              {/* <Link to="/Whoweserve" style={{ textDecoration: 'none' }}>
              <span className="special">Who We Serve</span></Link> */}
              <Link to="/leadership" style={{ textDecoration: 'none' }}>
              <span className="special">Leadership</span></Link>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <a  style={{ textDecoration: 'none' }} className="navbar-link">Learning</a>
            <div className="dropdown-content">
              <Link to="/AlgniteAptiForge" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Apti </span>
              </Link>
              <Link to="/AlgniteTechForge" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Tech </span>
              </Link>
              <Link to="/AlgniteSoftSkillsForge" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span><span> Commune</span> </span>
              </Link>

              <Link to="/AlgniteCompanySpecificPulse" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Company Specific </span>
              </Link>
              <Link to="/AlgniteLab" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Lab</span>
              </Link>
              <Link to="/Learningmanagementsystem" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> LMS </span>
              </Link>
              {/* <Link to="/Talentdevelopment" style={{ textDecoration: 'none' }}>
                <span className="special">Talent development </span>
              </Link> */}
              {/* <Link to="/AlgniteSoftSkillsBoost" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-pink-400 text-m font-semibold ">gnite</span> Soft Boost</span>
              </Link> */}
            </div>
          </li>
          <li className="navbar-item dropdown">
            <a  style={{ textDecoration: 'none' }} className="navbar-link">Assessment</a>
            <div className="dropdown-content">
              <Link to="/AlgniteAptiAssess" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Apti Assess</span>
              </Link>
              <Link to="/AlgniteTechAssess" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Tech Assess</span>
              </Link>
              <Link to="/AlgniteHIRE" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Personality Access</span>
              </Link>
              
              <Link to="/AlgniteHIRE" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> HIRE</span>
              </Link>
              <Link to="/AlgniteAssess360" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Assess360</span>
              </Link>
              
            </div>
          </li>
          <li className="navbar-item dropdown">
            <a  style={{ textDecoration: 'none' }} className="navbar-link">Content</a>
            <div className="dropdown-content">
              <Link to="/AssessmentContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special">Assessment Content </span></Link>
              <Link to="/LearningContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special">Learning Content </span></Link>
              <Link to="/InteractiveContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special">Interactive Content </span></Link>
              <Link to="/K2education" style={{ textDecoration: 'none' }}>
              <span className="special">K12 Solutions</span></Link>
              <Link to="/InteractiveContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special">Translation Services</span></Link>
            </div>
          </li>
          {/* <li className="navbar-item dropdown">
            <a  style={{ textDecoration: 'none' }} className="navbar-link">Resources</a>
            <div className="dropdown-content">
              <Link to="/AssessmentContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special"> Subject-Matter Experts</span></Link>
              <Link to="/InteractiveContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special"> Content proofreaders</span></Link>
              <Link to="/LearningContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special">Language translators </span></Link>
              <Link to="/InteractiveContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special"> Content editors </span></Link>
              <Link to="/InteractiveContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special"> Digital Content Designer</span></Link>
              
            </div>
          </li> */}
          {/* <li className="navbar-item">
            <a href="/careers" style={{ textDecoration: 'none' }} className="navbar-link">Careers</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;