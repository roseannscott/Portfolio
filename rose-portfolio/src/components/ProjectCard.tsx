import { Link } from 'react-router-dom';
import './ProjectCard.css';

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  reversed?: boolean;
}

function ProjectCard({ id, title, image, description, reversed }: ProjectCardProps) {
  return (
    <div className={`project-card ${reversed ? 'reversed' : ''}`}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/project/${id}`} className="see-project-btn">
          See Project
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
