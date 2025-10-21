import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "haseeb@example.com",
      action: "mailto:haseeb@example.com",
      color: "cyan"
    },
    {
      icon: (
        <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+92 XXX XXXXXX",
      action: "tel:+92XXXXXXXXXX",
      color: "purple"
    },
    {
      icon: (
        <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Pakistan",
      action: "#",
      color: "pink"
    }
  ];

  const socialNetworks = [
    {
      name: 'GitHub',
      url: 'https://github.com/haseeb',
      icon: (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/haseeb',
      icon: (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/haseeb',
      icon: (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/haseeb',
      icon: (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0c.14.09.28.19.42.33a10.9 10.9 0 0 1-1.71.84 12.89 12.89 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal">
            <span className="text-gradient">Connect</span> With Me
          </h2>
          <p className="section-subtitle reveal">
            Let's create something extraordinary together. Reach out and let's start a conversation.
          </p>
        </div>

        <div className="contact-grid">
          {/* Quantum Communication Form */}
          <div className="contact-form-container reveal">
            <div className="form-hologram">
              <div className="hologram-grid"></div>
              <form onSubmit={handleSubmit} className="quantum-form">
                <div className="form-header">
                  <h3 className="form-title text-glow">Send Quantum Message</h3>
                  <div className="form-status">
                    <div className="status-indicator"></div>
                    <span>Ready to transmit</span>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <span className="label-text">Your Name</span>
                      <span className="label-glow"></span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="quantum-input"
                        placeholder="Enter your full name"
                      />
                      <div className="input-glow"></div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <span className="label-text">Email Address</span>
                      <span className="label-glow"></span>
                    </label>
                    <div className="input-container">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="quantum-input"
                        placeholder="your.email@example.com"
                      />
                      <div className="input-glow"></div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <span className="label-text">Subject</span>
                      <span className="label-glow"></span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="quantum-input"
                        placeholder="What's this about?"
                      />
                      <div className="input-glow"></div>
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message" className="form-label">
                      <span className="label-text">Your Message</span>
                      <span className="label-glow"></span>
                    </label>
                    <div className="input-container">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="quantum-textarea"
                        placeholder="Describe your project or just say hello..."
                      ></textarea>
                      <div className="input-glow"></div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`quantum-submit-btn ${isSubmitting ? 'transmitting' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="transmission-spinner"></div>
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Initiate Communication</span>
                      <div className="btn-pulse"></div>
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <div className="transmission-success">
                    <div className="success-orb"></div>
                    <span>Message successfully transmitted!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info reveal">
            <div className="info-hologram">
              <div className="info-header">
                <h3 className="info-title text-gradient-electric">Direct Channels</h3>
                <p className="info-subtitle">
                  Multiple ways to reach out and start our collaboration
                </p>
              </div>

              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.label}
                    href={method.action}
                    className={`contact-method ${method.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="method-icon">
                      {method.icon}
                      <div className="icon-aura"></div>
                    </div>
                    <div className="method-info">
                      <h4 className="method-label">{method.label}</h4>
                      <p className="method-value">{method.value}</p>
                    </div>
                    <div className="method-glow"></div>
                  </a>
                ))}
              </div>

              <div className="social-network">
                <h4 className="network-title">Social Network</h4>
                <div className="network-grid">
                  {socialNetworks.map((network) => (
                    <a
                      key={network.name}
                      href={network.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="network-node"
                      aria-label={network.name}
                    >
                      <div className="node-icon">
                        {network.icon}
                      </div>
                      <div className="node-glow"></div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="availability-status">
                <div className="status-header">
                  <div className="status-indicator available"></div>
                  <span>Currently Available</span>
                </div>
                <p className="status-description">
                  I'm currently accepting new projects and would love to hear about yours. 
                  Let's build something amazing together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;