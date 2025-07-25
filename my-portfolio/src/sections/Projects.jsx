import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../constants/projects';
import '../styles/Projects.css';

const Projects = ({ setActiveSection }) => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('projects');
    }
  }, [inView, setActiveSection]);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" ref={ref} className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          My Projects
        </h2>
        
        <p className="projects-subtitle">
          Here are some of my recent works. Each project was built to solve specific problems and improve user experiences.
        </p>
        
        <div className="projects-filter">
          {['all', 'web', 'mobile', 'fullstack'].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`filter-button ${filter === tag ? 'active' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-image-overlay"></div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiGithub className="link-icon" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiExternalLink className="link-icon" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;