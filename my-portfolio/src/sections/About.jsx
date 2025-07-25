import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import '../styles/About.css'; // Create this file

const About = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);

  return (
    <section id="about" ref={ref} className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img 
              src="/src/assets/about-image.jpg" 
              alt="About Me" 
              className="about-image"
            />
          </div>
          
          <div className="about-text">
            <h2 className="about-title">
              About <span className="about-title-highlight">Me</span>
            </h2>
            <p className="about-description">
              I'm a passionate frontend developer with 2+ years of experience creating 
              modern web applications. I specialize in React and love building 
              intuitive user interfaces.
            </p>
            <p className="about-description">
              My journey in web development started when I built my first website 
              in college. Since then, I've worked with various startups and 
              contributed to open-source projects.
            </p>
            
            <div className="about-info-grid">
              <div className="about-info-item">
                <span className="about-info-label">Name:</span>
                <span>Uma Das</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Email:</span>
                <span>umadas.dev@gmail.com</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Experience:</span>
                <span>2+ Years</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Location:</span>
                <span>India</span>
              </div>
            </div>
            
            <a 
              href="/path/to/resume.pdf" 
              download
              className="about-resume-button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;