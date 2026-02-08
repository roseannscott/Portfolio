import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-detail">
        <h1>Project not found</h1>
        <Link to="/" className="back-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/" className="back-btn">← Back to Projects</Link>
      
      <div className="project-header">
        <h1>{project.title}</h1>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-image-large">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <section>
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>

        <section>
          <h2>Details</h2>
          <p>{project.details}</p>
        </section>
      </div>
    </div>
  );
}

export default ProjectDetail;
