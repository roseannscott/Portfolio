import type { PortfolioItem } from '../types/portfolio';
import './PortfolioCard.css';

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick?: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick }) => {
  return (
    <div
      className={`portfolio-card ${item.featured ? 'featured' : ''}`}
      onClick={() => onClick?.(item)}
    >
      <div className="portfolio-image-container">
        <img src={item.image} alt={item.imageAlt} className="portfolio-image" />
        <div className="portfolio-overlay">
          <span className="category-badge">{item.category}</span>
        </div>
      </div>
      <div className="portfolio-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="tags">
          {item.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
