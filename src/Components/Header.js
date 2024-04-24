import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div className="logo" style={styles.logo}>
          YAFET
        </div>
        <ul style={styles.linksUl}>
          <li><Link to="/" style={styles.linksA}>Home</Link></li>
          <li><Link to="/about" style={styles.linksA}>About</Link></li>
          <li><Link to="/gallery" style={styles.linksA}>Gallery</Link></li>
          <li><Link to="/testimonials" style={styles.linksA}>Testimonials</Link></li>
          <li><Link to="/contact" style={styles.linksA}>Contact</Link></li>
        </ul>
        <div className="socialLinks" style={styles.socialLinks}>
          <a style={styles.socialLink} href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a style={styles.socialLink} href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a style={styles.socialLink} href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a style={styles.socialLink} href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    padding: '10px 50px',
    width: '100vw',
  },
  nav: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    height: '5rem',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
    fontFamily: 'Poppins, sans-serif',
  },
  linksUl: {
    display: 'flex',
    listStyle: 'none',
  },
  linksA: {
    display: 'inline-block',
    padding: '0.9rem 1.2rem',
    color: 'white',
    fontSize: '1.2rem',
    textDecoration: 'none',
    fontFamily: 'Poppins, sans-serif',
  },
  socialLinks: {
    display: 'flex',
    gap: '10px',
  },
  socialLink: {
    color: 'white',
    fontSize: '15px',
  },
};
