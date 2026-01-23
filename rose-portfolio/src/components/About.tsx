import type { SkillCategory } from '../types/portfolio';
import './About.css';

interface AboutProps {
  skillCategories: SkillCategory[];
  bio?: string;
}

export const About: React.FC<AboutProps> = ({
  skillCategories,
  bio = 'I am a passionate artist and designer dedicated to creating beautiful, meaningful work. With a background in both digital and traditional art, I specialize in bringing ideas to life through creative design and illustration.',
}) => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="bio">
            <p>{bio}</p>
          </div>

          <div className="skills-section">
            <h3>Skills & Expertise</h3>
            <div className="skills-grid">
              {skillCategories.map((category) => (
                <div key={category.name} className="skill-category">
                  <h4>{category.name}</h4>
                  <ul className="skill-list">
                    {category.skills.map((skill) => (
                      <li key={skill}>✓ {skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
