import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import heroBg from './img/bg.jpg';
import Hero from './Components/Hero';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Testimonials from './Components/Testimonials';
import Form from './Components/Form';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div className="logo" style={styles.logo}>
          YAFET
        </div>
        <ul style={styles.linksUl}>
          <li><Link to="/hero" style={styles.linksA}>Home</Link></li>
          <li><Link to="/about" style={styles.linksA}>About</Link></li>
          <li><Link to="/gallery" style={styles.linksA}>Gallery</Link></li>
          <li><Link to="/testimonials" style={styles.linksA}>Testimonials</Link></li>
          <li><Link to="/form" style={styles.linksA}>Contact</Link></li>
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

function App() {
  return (
    <Router>
      <div className="App" style={styles.app}>
        <Header />
        <div className="wrapper" style={styles.wrapper}>
          <Routes>
          <Route index element={<Hero />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    fontFamily: 'Poppins, sans-serif',
    // background: 'url("https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    background: `url(${heroBg})`,
    backgroundSize: 'cover',
    color: 'white',
    height: '100%vh',
    paddingBottom: '10px',
  },
  wrapper: {
    padding: '0 100px',
    textAlign: 'center',
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    justifyContent: 'space-between center', 
    padding: '50px 0',
  },
  header: {
    padding: '10px 50px',
    width: '100%vw',
    position: 'sticky',
    top: '0',
    zIndex: '100',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 0 20px 1px rgba(0, 0, 0, 0.1)',
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

export default App;
