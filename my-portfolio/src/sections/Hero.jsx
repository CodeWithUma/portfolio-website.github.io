import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SocialLinks from '../components/SocialLinks';
import '../styles/Hero.css'; // Create this file

const Hero = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('home');
    }
  }, [inView, setActiveSection]);

  return (
    <section 
      id="home" 
      ref={ref}
      className="hero-section"
    >
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Uma Das</span>
            </h1>
            <h2 className="hero-subtitle">
              Software Developer
            </h2>
            <p className="hero-description">
              I build exceptional digital experiences with modern technologies.
              Currently focused on creating accessible, user-friendly web applications.
            </p>
            <div className="hero-buttons">
              <a 
                href="#contact" 
                className="hero-button primary"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="hero-button secondary"
              >
                View Work
              </a>
            </div>
            <SocialLinks className="hero-social-links" />
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image-glow"></div>
            <img 
              src="/src/assets/hero-image.jpg" 
              alt="Your Name" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;