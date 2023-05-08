import React from 'react';
import './Background.css';
import backgroundImage from './backgroundImage.gif';

function Background() {
  const handleClickProjects = () => {
    // Redirect to the projects page
    window.location.href = '/projects';
  };

  const handleClickContact = () => {
    // Redirect to the contact page
    window.location.href = '/about';
  };

  return (
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div
        className="clickable-element clickable-element-projects"
        onClick={handleClickProjects}
      >
      </div>
      <div
        className="clickable-element clickable-element-contact"
        onClick={handleClickContact}
      >
      </div>
    </div>
  );
}

export default Background;
