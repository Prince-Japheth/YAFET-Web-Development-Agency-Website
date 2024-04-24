import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../img/photo-1498050108023-c5249f4df085.avif';
import Footer from './Footer';

const HeroImg = () => {
  return (
    <div>
      <img style={styles.heroImg} src={heroImg} alt="" />
    </div>
  );
};

const HeroText = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleContactClick = () => {
    navigate('/form');
  };

  const handleButtonHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div style={styles.heroTextContainer}>
      <h1 style={styles.headerText}>Welcome to Yafet Web Development Agency</h1>
      <p style={styles.heroText}>Your premier destination for cutting-edge web development solutions. Our team of dedicated professionals is committed to delivering exceptional results tailored to meet your unique needs.</p>
      <div className="heroBtn" style={styles.heroBtn}>
        <button
          className='button'
          style={hoveredButton === 'contact' ? { ...styles.button, ...styles.hoveredButton } : styles.button}
          onClick={handleContactClick}
          onMouseEnter={() => handleButtonHover('contact')}
          onMouseLeave={handleButtonLeave}
        >
          Contact Us
        </button>
        <button
          className='button'
          style={hoveredButton === 'bookMeeting' ? { ...styles.button, ...styles.hoveredButton } : styles.button}
          onClick={handleContactClick}
          onMouseEnter={() => handleButtonHover('bookMeeting')}
          onMouseLeave={handleButtonLeave}
        >
          Book Meeting
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <div style={styles.flexBox}>
        <HeroImg />
        <HeroText />
      </div>
      <br />
      <Footer />
    </div>
  );
};

const styles = {
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    justifyContent: 'space-between center', 
    height: '90vh',
  },
  heroImg: {
    width: '550px',
    borderRadius: '15px',
  },
  heroTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '-25px',
  },
  headerText: {
    fontSize: '35px',
  },
  heroText: {
    fontSize: '15px',
    textAlign: 'center',
  },
  heroBtn: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '10px 30px',
    fontSize: '1.2rem',
    fontWeight: 'semi-bold',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#784cfb',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    transition: 'background-color 0.3s ease',
  },
  hoveredButton: {
    backgroundColor: '#5b2eae',
  },
};

export default Hero;
