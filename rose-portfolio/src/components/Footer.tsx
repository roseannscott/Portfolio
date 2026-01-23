import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Rosie's Portfolio. All rights reserved.</p>
        <p className="footer-note">Crafted with ✨ and creativity</p>
      </div>
    </footer>
  );
};
