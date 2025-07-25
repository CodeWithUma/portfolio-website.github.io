import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './App.css'; // We'll create this file

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main className="app-main">
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
    </div>
  );
}

export default App;