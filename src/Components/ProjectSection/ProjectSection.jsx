import React from 'react';
import { projectsData } from '../../data/projectsData';
import './ProjectSection.css';

const ProjectSection = () => {
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <section id="projects" className="section cosmic-bg">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal">
            <span className="text-gradient">Quantum</span> Projects
          </h2>
          <p className="section-subtitle reveal">
            Immersive digital experiences that push the boundaries of modern web development
          </p>
        </div>

        {/* Featured Projects - Holographic Grid */}
        <div className="projects-hologrid">
          {featuredProjects.map((project, index) => (
            <article 
              key={project.id} 
              className={`holographic-card featured reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
            >
              <div className="card-matrix"></div>
              <div className="card-glow"></div>
              
              <div className="project-preview">
                <div className="preview-frame glass-heavy">
                  <div className="preview-placeholder">
                    <div className="preview-orb"></div>
                    <span className="preview-text">Project Interface</span>
                  </div>
                  <div className="preview-overlay">
                    <div className="tech-badges">
                      {project.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className="tech-badge hologram">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title text-glow">{project.title}</h3>
                  <div className="project-status">
                    <div className="status-indicator"></div>
                    <span>Featured</span>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <div className="meta-stack">
                    <h4>Tech Stack</h4>
                    <div className="stack-items">
                      {project.technologies.map(tech => (
                        <span key={tech} className="stack-item">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-actions">
                  <a href={project.liveDemo} className="action-btn primary hologram">
                    <span>Live Experience</span>
                    <div className="btn-orb"></div>
                  </a>
                  <a href={project.github} className="action-btn secondary">
                    <span>Source Code</span>
                    <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects - Quantum Grid */}
        {otherProjects.length > 0 && (
          <>
            <div className="section-divider">
              <div className="divider-orb"></div>
              <h3 className="divider-title text-gradient-electric">Other Creations</h3>
              <div className="divider-orb"></div>
            </div>
            
            <div className="quantum-grid">
              {otherProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="quantum-card reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="quantum-gate"></div>
                  <div className="card-content">
                    <h4 className="card-title">{project.title}</h4>
                    <p className="card-description">{project.description}</p>
                    
                    <div className="card-tech">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="tech-quantum">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-quantum">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="card-actions">
                      <a href={project.liveDemo} className="quantum-btn">
                        Demo
                      </a>
                      <a href={project.github} className="quantum-btn outline">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;