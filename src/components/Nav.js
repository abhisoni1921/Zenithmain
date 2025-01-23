import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

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
            src="/ZenithLogo.png" 
            alt="Logo" 
            width={isScrolled ? "80" : "80"} 
            height={isScrolled ? "24" : "24"}
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
            <Link to="/" style={{ textDecoration: 'none' }} className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item dropdown">
            <a href="/" style={{ textDecoration: 'none' }} className="navbar-link">About Us</a>
            <div className="dropdown-content">
              <Link to="/about" style={{ textDecoration: 'none' }}>
              <span className="special">About ZESPL</span></Link>
              <Link to="/visionMission" style={{ textDecoration: 'none' }}>
              <span className="special">Our Vision and Mission</span></Link>
              <Link to="/leadership" style={{ textDecoration: 'none' }}>
              <span className="special">Leadership</span></Link>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <a href="/" style={{ textDecoration: 'none' }} className="navbar-link">Learnings</a>
            <div className="dropdown-content">
              <Link to="/AlgniteAptiForge" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/><span>Al</span><span>gnite</span> Apti Forge</span>
              </Link>
              <Link to="/AlgniteTechForge" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite Tech Forge</span>
              </Link>
              <Link to="/AlgniteSoftSkillsForge" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite SoftSkills Forge</span>
              </Link>
              <Link to="/AlgniteSoftSkillsBoost" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite Apti Boost</span>
              </Link>
              <Link to="/AlgniteSoftSkillsBoost" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite SoftSkills Boost</span>
              </Link>
              <Link to="/AlgniteCompanySpecificPulse" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite Company Specific Pulse</span>
              </Link>
              <Link to="/AlgniteLab" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite Lab</span>
              </Link>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <a href="/" style={{ textDecoration: 'none' }} className="navbar-link">Assessments</a>
            <div className="dropdown-content">
              <Link to="/AlgniteAptiAssess" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite Apti Assess</span>
              </Link>
              <Link to="/AlgniteTechAssess" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite Tech Assess</span>
              </Link>
              <Link to="/AlgniteAssess360" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite Assess360</span>
              </Link>
              <Link to="/AlgniteHIRE" style={{ textDecoration: 'none' }}>
                <span className="special"><AllInclusiveIcon/>Algnite HIRE</span>
              </Link>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <a href="/" style={{ textDecoration: 'none' }} className="navbar-link">Contents</a>
            <div className="dropdown-content">
              <Link to="/AssessmentContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special">Assessment Content Solutions</span></Link>
              <Link to="/LearningContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special">Learning Content Solutions</span></Link>
              <Link to="/InteractiveContentSolution" style={{ textDecoration: 'none' }}>
              <span className="special">Interactive Content Solutions</span></Link>
            </div>
          </li>
          <li className="navbar-item">
            <a href="/careers" style={{ textDecoration: 'none' }} className="navbar-link">Careers</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;