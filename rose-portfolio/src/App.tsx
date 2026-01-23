import { useState } from 'react';
import type { PortfolioItem } from './types/portfolio';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { portfolioItems, skills, socialLinks } from './data/portfolio';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <div className="app">
      <Header />
      <Hero
        name="✨ Welcome to My Portfolio"
        tagline="Digital artist & designer creating beautiful, thoughtful work"
        cta="View My Work"
      />
      <PortfolioGrid items={portfolioItems} onItemClick={setSelectedItem} />
      <About skillCategories={skills} />
      <Contact email="hello@rosieportfolio.com" socialLinks={socialLinks} />
      <Footer />

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>
            <img src={selectedItem.image} alt={selectedItem.imageAlt} />
            <div className="modal-info">
              <h2>{selectedItem.title}</h2>
              <p className="modal-category">{selectedItem.category}</p>
              <p>{selectedItem.description}</p>
              <div className="modal-tags">
                {selectedItem.tags.map((tag) => (
                  <span key={tag} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {selectedItem.link && (
                <a href={selectedItem.link} target="_blank" rel="noopener noreferrer" className="modal-link">
                  View Project →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
