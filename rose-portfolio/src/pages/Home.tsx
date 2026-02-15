import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import './Home.css';


function Home() {
  const year = new Date().getFullYear().toString().slice(-2);

  return (
    <div className="home">
      <section className="hero">
        <div className="portfolio-intro">
          <h1>
            <span className="portfolio-title">Portfolio</span>
            <span className="portfolio-year" aria-hidden="true">{year}</span>
          </h1>
          <p className="intro">
            <span className="bullet">•</span>
            My name is Rose-Ann, I'm a graphic designer and hobbyist illustrator based in VIC Gippsland, focusing on branding and concept designing.
          </p>
        </div>
      </section>

      <section className="projects-section">
        <h2><span className="highlight-blue">Uni </span>
        <span className="highlight-pink">Projects</span></h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
