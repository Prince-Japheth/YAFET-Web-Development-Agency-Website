import React from 'react';
import Footer from './Footer';

const Mission = () => {
    return (
        <div className="card" style={styles.card}>
            <i style={styles.cardIcon} className="fas fa-bullseye"></i>
            <h1 style={styles.cardHeader}>Mission</h1>
            <p style={styles.heroText}>Our mission is to empower businesses with innovative web solutions that drive growth and success, ensuring we exceed client expectations through our dedication, creativity, and expertise while fostering long-term partnerships built on trust.</p>
        </div>
    );
};

const Vision = () => {
    return (
        <div className="card" style={styles.card}>
            <i style={styles.cardIcon} className="fas fa-binoculars"></i>
            <h1 style={styles.cardHeader}>Vision</h1>
            <p style={styles.heroText}>Our vision is to be a leading force in the digital landscape, revolutionizing the way businesses engage with their audiences online. We aim to set new standards of excellence and inspire others to reach greater heights.</p>
        </div>
    );
};

const About = () => {
    return (
        <div>
        <div style={styles.flexBox}>
            <Mission />
            <Vision />
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
    card: {
        width: '500px',
        textAlign: 'center',
        fontSize: '14px',
        borderRadius: '15px',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(50px)',
        padding: '15px 25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px 1px rgba(0, 0, 0, 0.1)',
    },
    cardHeader: {
        fontSize: '30px',
        padding: 0,
        margin: '10px 0 0 0',
    },
    cardIcon: {
        fontSize: '40px',
    }
};

export default About;