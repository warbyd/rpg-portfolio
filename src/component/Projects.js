import React from 'react';
import projectsImage from './projectsImage.gif';
import './Projects.css'; // Import the CSS file if you have created one

function Projects() {
    const handleClick1 = () => {
        // Redirect the user to the GitHub link in a new tab
        window.open('https://github.com/warbyd/Python-Project-Events-Planner', '_blank');
    };
      
    const handleClick2 = () => {
        // Redirect the user to the second GitHub link in a new tab
        window.open('https://github.com/efgeri/LilyPad', '_blank');
    };

    const handleClick3 = () => {
        // Redirect to the homepage
        window.location.href = '/';
    };
      
    return (
        <div className="project-container" style={{ backgroundImage: `url(${projectsImage})` }}>
            <div>
                <div
                    className="clickable-element1"
                    onClick={handleClick1}
                >
                </div>
                <div
                    className="clickable-element2"
                    onClick={handleClick2}
                >
                </div>
                <div
                    className="clickable-element3"
                    onClick={handleClick3}
                />
            </div>
        </div>
    );
}

export default Projects;
