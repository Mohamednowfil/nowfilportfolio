import React from 'react';

const Projects = () => {
  const projects = [
    { 
      title: 'Project 1', 
      description: 'Project 1 description.', 
      link: 'https://example.com/project1' 
    },
    { 
      title: 'Project 2', 
      description: 'Project 2 description.', 
      link: 'https://example.com/project2' 
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-button"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
