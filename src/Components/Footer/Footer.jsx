import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="quantum-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-orb">
              <div className="orb-core"></div>
              <div className="orb-rings">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
              </div>
            </div>
            <div className="brand-info">
              <h3 className="brand-name text-glow">Haseeb</h3>
              <p className="brand-tagline">
                Crafting the future of digital experiences
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <div className="link-group">
              <h4 className="group-title">Navigation</h4>
              <div className="link-items">
                <a href="#home" className="footer-link">Home</a>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#skills" className="footer-link">Skills</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>
            
            <div className="link-group">
              <h4 className="group-title">Connect</h4>
              <div className="link-items">
                <a href="https://github.com/haseebmahmud06" className="footer-link">GitHub</a>
                <a href="https://www.linkedin.com/in/haseeb-mahmud" className="footer-link">LinkedIn</a>
                <a href="#" className="footer-link">Twitter</a>
                <a href="mailto:mahmudabdulhaseeb2006@gmail.com" className="footer-link">Email</a>
              </div>
            </div>

            <div className="link-group">
              <h4 className="group-title">Resources</h4>
              <div className="link-items">
                <a href="#" className="footer-link">Resume</a>
                <a href="#" className="footer-link">Blog</a>
                <a href="#" className="footer-link">Case Studies</a>
                <a href="#" className="footer-link">Testimonials</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="newsletter-title">Stay Updated</h4>
            <p className="newsletter-text">
              Get notified about new projects and insights
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                <span>Subscribe</span>
                <div className="btn-energize"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider">
            <div className="divider-glow"></div>
          </div>
          
          <div className="bottom-content">
            <div className="copyright">
              <p className="copyright-text">
                © {currentYear} Haseeb. All rights reserved.
              </p>
              <p className="built-with">
                Built with <span className="accent-text">React</span> & <span className="accent-text">Quantum CSS</span>
              </p>
            </div>
            
            <div className="footer-actions">
              <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span>Back to Orbit</span>
                <div className="top-arrow">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Energy Pulse */}
          <div className="energy-pulse"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;