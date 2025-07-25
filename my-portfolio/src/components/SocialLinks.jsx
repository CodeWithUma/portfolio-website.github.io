import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/SocialLinks.css'; // Adjust the path as necessary

const SocialLinks = ({ className }) => {
  return (
    <div className={`social-links ${className || ''}`}>
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="GitHub"
      >
        <FaGithub className="social-icon" />
      </a>
      <a 
        href="https://linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="social-icon" />
      </a>
      <a 
        href="https://twitter.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Twitter"
      >
        <FaTwitter className="social-icon" />
      </a>
      <a 
        href="https://instagram.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Instagram"
      >
        <FaInstagram className="social-icon" />
      </a>
    </div>
  );
};

export default SocialLinks;