import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menuId) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };



  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBackdropClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo-container">
        <a href="/" className="navbar-logo">
          <img 
            src="/Zenith.png" 
            alt="Logo" 
            width={isScrolled ? "170" : "170"} 
            height={isScrolled ? "40" : "40"}
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
          <Link to="/DiscoverUs" style={{ textDecoration: 'none' }} className="navbar-link">
  Discover Us
  <span className="dropdown-icon" style={{ marginLeft: '2px', display: 'inline-flex', alignItems: 'center' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
      <path fill="#FFFFFF" d="M4.94 5.72L8 8.78l3.06-3.06L12 6.66l-4 4-4-4 0.94-0.94z" />
    </svg>
  </span>
</Link>
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
            <a  style={{ textDecoration: 'none' }} className="navbar-link">Learning
            <span className="dropdown-icon" style={{ marginLeft: '2px', display: 'inline-flex', alignItems: 'center' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
      <path fill="#FFFFFF" d="M4.94 5.72L8 8.78l3.06-3.06L12 6.66l-4 4-4-4 0.94-0.94z" />
    </svg>
  </span>
            </a>
            <div className="dropdown-content">
              <Link to="/AlgniteApti" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Apti </span>
              </Link>
              <Link to="/AlgniteTech" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Tech </span>
              </Link>
              <Link to="/AlgniteCommune" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span><span> Commune</span> </span>
              </Link>

              {/* <Link to="/AlgniteCompanySpecificPulse" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Company Specific </span>
              </Link> */}
              <Link to="/AlgniteLab" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Lab</span>
              </Link>
              <Link to="/AlgniteLMS" style={{ textDecoration: 'none' }}>
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
            <a  style={{ textDecoration: 'none' }} className="navbar-link">Assessment
            <span className="dropdown-icon" style={{ marginLeft: '2px', display: 'inline-flex', alignItems: 'center' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
      <path fill="#FFFFFF" d="M4.94 5.72L8 8.78l3.06-3.06L12 6.66l-4 4-4-4 0.94-0.94z" />
    </svg>
  </span>
            </a>
            <div className="dropdown-content">
              <Link to="/AlgniteAptiAssess" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Apti Assess</span>
              </Link>
              <Link to="/AlgniteTechAssess" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Tech Assess</span>
              </Link>
              <Link to="/AlgniteMindAssess" style={{ textDecoration: 'none' }}>
                <span className="special"><span className="text-green-400 text-xl font-bold ">Al</span><span className="text-green-400 text-m font-semibold ">gnite</span> Mind Assess</span>
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
          <Link to="/Content" style={{ textDecoration: 'none' }} className="navbar-link">Content
          <span className="dropdown-icon" style={{ marginLeft: '2px', display: 'inline-flex', alignItems: 'center' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
      <path fill="#FFFFFF" d="M4.94 5.72L8 8.78l3.06-3.06L12 6.66l-4 4-4-4 0.94-0.94z" />
    </svg>
  </span></Link>
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