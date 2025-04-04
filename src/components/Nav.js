import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(e.target) && 
        !hamburgerRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    // Handle ESC key press
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileDropdown = (index, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Navigation data
  const navItems = [
    {
      title: 'Home',
      link: '/Home',
      dropdown: false
    },
    {
      title: 'Discover Us',
      link: '/DiscoverUs',
      dropdown: false,
      items: [
        { title: 'About ZESPL', link: '/about' },
        // { title: 'Our Vision & Mission', link: '/visionMission' },
        { title: 'Leadership', link: '/leadership' }
      ]
    },
    {
      title: 'Learning',
      dropdown: true,
      items: [
        { title: 'Algnite Apti', link: '/AlgniteApti', styled: true },
        { title: 'Algnite Tech', link: '/AlgniteTech', styled: true },
        { title: 'Algnite Commune', link: '/AlgniteCommune', styled: true },
        { title: 'Algnite Lab', link: '/AlgniteLab', styled: true },
        { title: 'Algnite LMS', link: '/AlgniteLMS', styled: true }
      ]
    },
    {
      title: 'Assessment',
      dropdown: true,
      items: [
        { title: 'Algnite Apti Assess', link: '/AlgniteAptiAssess', styled: true },
        { title: 'Algnite Tech Assess', link: '/AlgniteTechAssess', styled: true },
        { title: 'Algnite Mind Assess', link: '/AlgniteMindAssess', styled: true },
        { title: 'Algnite HIRE', link: '/AlgniteHIRE', styled: true },
        { title: 'Algnite Assess360', link: '/AlgniteAssess360', styled: true }
      ]
    },
    {
      title: 'Content',
      
      dropdown: true,
      items: [
        { title: 'Assessment Content', link: '/AssessmentContent' },
        { title: 'Learning Content', link: '/LearningContentSolution' },
        // { title: 'Interactive Content', link: '/InteractiveContentSolution' },
        // { title: 'K12 Solutions', link: '/K2education' },
        { title: 'Translation Services', link: '/Translation' }
      ]
    }
  ];

  // Helper to render styled Algnite text
  const renderStyledText = (text) => {
    if (!text.includes('Algnite')) return text;
    
    return (
      <>
        <span className="text-green-400 text-xl font-bold">Al</span>
        <span className="text-green-400 text-m font-semibold">gnite</span>
        {" " + text.replace('Algnite', '')}
      </>
    );
  };

  // SVG dropdown icon
  const DropdownIcon = () => (
    <span className="dropdown-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
        <path fill="#FFFFFF" d="M4.94 5.72L8 8.78l3.06-3.06L12 6.66l-4 4-4-4 0.94-0.94z" />
      </svg>
    </span>
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="logo-container">
          <a href="/" className="navbar-logo">
            <img src="/Znew.png" alt="Logo" />
          </a>
        </div>
        
        <div className="nav-links-container">
          <ul className="navbar-list">
            {navItems.map((item, index) => (
              <li key={index} className={`navbar-item ${item.dropdown ? 'dropdown' : ''}`}>
                <a href={item.link} className="navbar-link">
                  {item.title}
                  {item.dropdown && <DropdownIcon />}
                </a>
                
                {item.dropdown && (
                  <div className="dropdown-content">
                    {item.items.map((subItem, subIndex) => (
                      <a key={subIndex} href={subItem.link}>
                        <span className="special">
                          {subItem.styled ? renderStyledText(subItem.title) : subItem.title}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div 
          ref={hamburgerRef}
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div 
        ref={mobileMenuRef}
        className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}
      >
        <ul className="mobile-navbar-list">
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className={`mobile-navbar-item ${item.dropdown ? 'dropdown' : ''} ${activeDropdown === index ? 'active' : ''}`}
            >
              <a 
                href={item.link} 
                className="mobile-navbar-link"
                onClick={item.dropdown ? (e) => toggleMobileDropdown(index, e) : undefined}
              >
                {item.title}
                {item.dropdown && <DropdownIcon />}
              </a>
              
              {item.dropdown && (
                <div className="dropdown-content">
                  {item.items.map((subItem, subIndex) => (
                    <a key={subIndex} href={subItem.link}>
                      <span className="special">
                        {subItem.styled ? renderStyledText(subItem.title) : subItem.title}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;