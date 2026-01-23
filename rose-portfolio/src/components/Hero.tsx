import './Hero.css';

interface HeroProps {
  name?: string;
  tagline?: string;
  cta?: string;
}

export const Hero: React.FC<HeroProps> = ({
  name = "Rosie's Art",
  tagline = 'Bringing creativity to life through design and art',
  cta = 'Explore My Work',
}) => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{name}</h1>
          <p className="hero-tagline">{tagline}</p>
          <button onClick={scrollToPortfolio} className="hero-cta">
            {cta}
          </button>
        </div>
        <div className="hero-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};
