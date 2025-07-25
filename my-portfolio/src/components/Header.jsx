import { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import Navbar from './Navbar';
import '../styles/Header.css';

const Header = ({ darkMode, setDarkMode, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <a 
            href="#home" 
            className="logo"
            onClick={() => setActiveSection('home')}
          >
            <span className="logo-bracket">{"<"}</span>
            Uma Das
            <span className="logo-bracket">{" />"}</span>
          </a>

          <div className="desktop-nav">
            <Navbar 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          <div className="mobile-nav-controls">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="menu-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`mobile-menu ${darkMode ? 'dark' : ''}`}>
          <Navbar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
            mobile 
            closeMenu={() => setMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;