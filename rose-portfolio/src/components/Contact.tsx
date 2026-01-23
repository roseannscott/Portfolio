import './Contact.css';

interface ContactProps {
  email?: string;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    dribbble?: string;
    behance?: string;
  };
}

export const Contact: React.FC<ContactProps> = ({
  email = 'hello@example.com',
  socialLinks = {},
}) => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>I'd love to hear from you! Let's create something amazing together.</p>
        </div>

        <div className="contact-content">
          <a href={`mailto:${email}`} className="email-link">
            <span className="email-icon">✉️</span>
            <span>{email}</span>
          </a>

          <div className="social-links">
            <p>Follow me on social media</p>
            <div className="social-icons">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                  title="Instagram"
                >
                  📷
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon twitter"
                  title="Twitter"
                >
                  𝕏
                </a>
              )}
              {socialLinks.dribbble && (
                <a
                  href={socialLinks.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon dribbble"
                  title="Dribbble"
                >
                  🎨
                </a>
              )}
              {socialLinks.behance && (
                <a
                  href={socialLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon behance"
                  title="Behance"
                >
                  🔗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
