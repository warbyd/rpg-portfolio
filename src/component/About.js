import React from 'react';
import aboutImage from './aboutImage.gif';
import './About.css';

function About() {
  const handleClick1 = () => {
    // Redirect to the CV on Google Docs
    window.open('https://docs.google.com/document/your-cv-link', '_blank');
  };

  const handleClick2 = () => {
    // Redirect to the LinkedIn page
    window.open('https://www.linkedin.com/in/your-linkedin-profile', '_blank');
  };

  const handleClick3 = () => {
    // Redirect to the GitHub page
    window.open('https://github.com/your-github-profile', '_blank');
  };

  const handleClick4 = () => {
    // Redirect to the homepage
    window.location.href = '/';
  };

  return (
    <div className="about-container" style={{ backgroundImage: `url(${aboutImage})` }}>
      <div>
        <div className="clickable-element-about1" onClick={handleClick1} />
        <div className="clickable-element-about2" onClick={handleClick2} />
        <div className="clickable-element-about3" onClick={handleClick3} />
        <div className="clickable-element-about4" onClick={handleClick4} />
      </div>
    </div>
  );
}

export default About;
