import React, { useState, useEffect } from 'react';
import Orb from '../Orb/Orb';
import './HeroSection.css';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Software Engineer',
    'Front-End Architect', 
    'Full-Stack Developer',
    'Digital Craftsman'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section matrix-bg">
      {/* Cosmic Background Elements */}
      <Orb />
      <div className="cosmic-dust"></div>
      
      <div className="container">
        <div className="hero-content">
          {/* Premium Badge */}
          <div className="premium-badge glass-heavy float-element">
            <div className="badge-glow"></div>
            <span>Available for Premium Projects</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="hero-title reveal">
            Crafting Digital
            <span className="text-gradient-electric text-glow"> Excellence</span>
          </h1>
          
          <div className="hero-subtitle reveal">
            <span className="hero-greeting">Hey, I'm </span>
            <span className="hero-name text-gradient">Haseeb</span>
            <span className="hero-emoji"> 👋</span>
          </div>
          
          {/* Animated Typing */}
          <div className="hero-typing reveal">
            <div className="typing-container glass">
              <span className="typing-text">{displayText}</span>
              <span className="typing-cursor neon-flicker">|</span>
            </div>
          </div>
          
          {/* Premium Description */}
          <p className="hero-description reveal">
            I architect <span className="text-glow">immersive digital experiences</span> that blend 
            cutting-edge technology with elegant design. Specializing in 
            <span className="text-gradient"> React ecosystems</span> and 
            <span className="text-gradient-electric"> scalable solutions</span>.
          </p>
          
          {/* Luxury Action Buttons */}
          <div className="hero-actions reveal">
            <button 
              className="btn-god hologram"
              onClick={() => scrollToSection('projects')}
            >
              <span>Explore My Work</span>
              <div className="btn-sparkle"></div>
            </button>
            
            <button 
              className="btn-god secondary"
              onClick={() => scrollToSection('contact')}
            >
              <span>Start a Project</span>
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
          
          {/* Premium Stats */}
          <div className="hero-stats glass reveal">
            <div className="stat-item">
              <div className="stat-number text-gradient">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-gradient-electric">3+</div>
              <div className="stat-label">Years Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-gradient">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Luxury Scroll Indicator */}
      <div className="luxury-scroll-indicator">
        <div className="scroll-text">Scroll to Discover</div>
        <div className="scroll-orb">
          <div className="orb-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;