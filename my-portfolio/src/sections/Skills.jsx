import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { skills } from '../constants/skills';
import '../styles/Skills.css'; // Assuming you have a CSS file for styles

const Skills = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('skills');
    }
  }, [inView, setActiveSection]);

  return (
    <section id="skills" ref={ref} className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          My <span className="skills-title-highlight">Skills</span>
        </h2>
        
        <p className="skills-subtitle">
          Here are the technologies I've worked with and my proficiency level in each.
        </p>
        
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div 
              key={category.category}
              className="skill-category"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="skill-category-title">
                {category.category}
              </h3>
              <div className="skills-list">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;