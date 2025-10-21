import React from 'react';
import './Orb.css';

const Orb = () => {
  return (
    <div className="orb-container">
      <div className="cosmic-orb orb-1 float-element"></div>
      <div className="cosmic-orb orb-2 float-element-delayed"></div>
      <div className="cosmic-orb orb-3 float-element-slow"></div>
      <div className="energy-wave"></div>
      <div className="quantum-particles"></div>
    </div>
  );
};

export default Orb;