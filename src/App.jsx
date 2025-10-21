import React, { useEffect } from 'react';
import { 
  NewNavbar, 
  HeroSection, 
  ProjectSection, 
  SkillsSection, 
  ContactSection, 
  Footer 
} from './Components';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    // Initial check
    revealOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="App page-load">
      <NewNavbar />
      <main>
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;