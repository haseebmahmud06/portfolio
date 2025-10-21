import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      icon: "⚡",
      color: "cyan",
      skills: [
        { name: "JavaScript", level: 95, description: "ES6+, Modern Patterns" },
        { name: "React", level: 90, description: "Hooks, Context, Performance" },
        { name: "Next.js", level: 85, description: "SSR, SSG, API Routes" },
        { name: "TypeScript", level: 80, description: "Type Safety, Interfaces" },
        { name: "Tailwind CSS", level: 88, description: "Utility-First, Customization" },
        { name: "HTML/CSS", level: 95, description: "Semantic, Modern Layouts" }
      ]
    },
    {
      title: "Backend Systems",
      icon: "🔮",
      color: "purple",
      skills: [
        { name: "Node.js", level: 85, description: "Express, REST APIs" },
        { name: "Python", level: 75, description: "Django, FastAPI" },
        { name: "Java", level: 70, description: "Spring Boot, Microservices" },
        { name: "MongoDB", level: 80, description: "Aggregation, Indexing" },
        { name: "PostgreSQL", level: 75, description: "Complex Queries, Optimization" },
        { name: "Redis", level: 70, description: "Caching, Pub/Sub" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "🌐",
      color: "pink",
      skills: [
        { name: "AWS", level: 75, description: "EC2, S3, Lambda" },
        { name: "Docker", level: 80, description: "Containerization, Orchestration" },
        { name: "Git", level: 90, description: "Workflows, CI/CD" },
        { name: "Linux", level: 85, description: "Server Management, Scripting" },
        { name: "Nginx", level: 75, description: "Load Balancing, Reverse Proxy" },
        { name: "Kubernetes", level: 65, description: "Cluster Management" }
      ]
    }
  ];

  const masteryStats = [
    { label: "Frontend Mastery", value: 92, color: "cyan" },
    { label: "Backend Expertise", value: 78, color: "purple" },
    { label: "DevOps Skills", value: 75, color: "pink" },
    { label: "Problem Solving", value: 95, color: "teal" }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal">
            <span className="text-gradient">Technical</span> Mastery
          </h2>
          <p className="section-subtitle reveal">
            Advanced skill set honed through cutting-edge projects and continuous learning
          </p>
        </div>

        {/* Mastery Overview */}
        <div className="mastery-overview reveal">
          {masteryStats.map((stat, index) => (
            <div key={stat.label} className="mastery-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mastery-orb" data-color={stat.color}>
                <div className="orb-glow"></div>
                <div className="orb-value">{stat.value}%</div>
              </div>
              <div className="mastery-info">
                <h4 className="mastery-label">{stat.label}</h4>
                <div className="mastery-bar">
                  <div 
                    className="mastery-progress" 
                    data-color={stat.color}
                    style={{ width: `${stat.value}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Skills Grid */}
        <div className="quantum-skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`skill-dimension reveal ${categoryIndex % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
            >
              <div className="dimension-header">
                <div className="dimension-icon" data-color={category.color}>
                  {category.icon}
                </div>
                <h3 className="dimension-title">{category.title}</h3>
                <div className="dimension-glow" data-color={category.color}></div>
              </div>
              
              <div className="skills-matrix">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="skill-node"
                    style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    <div className="node-header">
                      <span className="node-name">{skill.name}</span>
                      <span className="node-level" data-color={category.color}>
                        {skill.level}%
                      </span>
                    </div>
                    <p className="node-description">{skill.description}</p>
                    <div className="node-progress">
                      <div 
                        className="node-progress-bar"
                        data-color={category.color}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="progress-glow"></div>
                      </div>
                    </div>
                    <div className="node-connections">
                      <div className="connection-line"></div>
                      <div className="connection-dot"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Radar */}
        <div className="tech-radar-section reveal">
          <div className="radar-header">
            <h3 className="radar-title text-gradient-electric">Technology Radar</h3>
            <p className="radar-subtitle">Current focus and emerging technologies</p>
          </div>
          <div className="radar-container">
            <div className="radar-grid">
              <div className="radar-ring ring-1">
                <div className="ring-label">Adopt</div>
              </div>
              <div className="radar-ring ring-2">
                <div className="ring-label">Trial</div>
              </div>
              <div className="radar-ring ring-3">
                <div className="ring-label">Assess</div>
              </div>
              <div className="radar-ring ring-4">
                <div className="ring-label">Hold</div>
              </div>
              
              {/* Radar Items */}
              <div className="radar-item" style={{ '--angle': '45deg', '--distance': '85%' }}>
                <div className="radar-dot" data-status="adopt"></div>
                <div className="radar-label">React 18</div>
              </div>
              <div className="radar-item" style={{ '--angle': '120deg', '--distance': '70%' }}>
                <div className="radar-dot" data-status="trial"></div>
                <div className="radar-label">Next.js 14</div>
              </div>
              <div className="radar-item" style={{ '--angle': '200deg', '--distance': '60%' }}>
                <div className="radar-dot" data-status="assess"></div>
                <div className="radar-label">Bun</div>
              </div>
              <div className="radar-item" style={{ '--angle': '300deg', '--distance': '40%' }}>
                <div className="radar-dot" data-status="hold"></div>
                <div className="radar-label">Angular</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;