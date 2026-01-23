import './Header.css';

interface HeaderProps {
  onNavClick?: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    onNavClick?.(sectionId);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>✨ Rosie's Portfolio</h1>
        </div>
        <nav className="nav">
          <button onClick={() => handleScroll('home')} className="nav-link">
            Home
          </button>
          <button onClick={() => handleScroll('portfolio')} className="nav-link">
            Portfolio
          </button>
          <button onClick={() => handleScroll('about')} className="nav-link">
            About
          </button>
          <button onClick={() => handleScroll('contact')} className="nav-link">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};
