import React, { useState, useEffect } from 'react';
import './NewNavbar.css';

const NewNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`luxury-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Premium Logo */}
        <div 
          className="nav-logo hologram" 
          onClick={() => scrollToSection('home')}
        >
          <div className="logo-orb">
            <div className="logo-core"></div>
          </div>
          <span className="logo-text text-glow">Haseeb</span>
          <div className="logo-aura"></div>
        </div>

        {/* Cyberpunk Navigation */}
        <div className="nav-links">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link cyber-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="link-text">{item.label}</span>
              <span className="link-glow"></span>
              <span className="link-pulse"></span>
            </button>
          ))}
        </div>

        {/* Quantum Menu Button */}
        <button 
          className={`quantum-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="quantum-line top"></div>
          <div className="quantum-line middle"></div>
          <div className="quantum-line bottom"></div>
          <div className="quantum-orb"></div>
        </button>

        {/* Holographic Mobile Menu */}
        <div className={`quantum-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="menu-backdrop"></div>
          <div className="menu-content">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`quantum-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="quantum-dot"></span>
                <span className="quantum-text">{item.label}</span>
                <span className="quantum-glow"></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Scanner Line */}
      <div className="nav-scanner"></div>
    </nav>
  );
};

export default NewNavbar;