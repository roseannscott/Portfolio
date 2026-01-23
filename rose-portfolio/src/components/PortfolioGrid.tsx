import { useState } from 'react';
import type { PortfolioItem } from '../types/portfolio';
import { PortfolioCard } from './PortfolioCard';
import './PortfolioGrid.css';

interface PortfolioGridProps {
  items: PortfolioItem[];
  onItemClick?: (item: PortfolioItem) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items, onItemClick }) => {
  const [filter, setFilter] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...new Set(items.map((item) => item.category))];

  // Filter items based on selected category
  const filteredItems =
    filter === 'All' ? items : items.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p>Explore my latest work and creative projects</p>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} onClick={onItemClick} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <p>No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};
