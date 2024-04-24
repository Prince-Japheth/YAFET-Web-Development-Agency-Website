import React from 'react';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import pic4 from '../img/pic4.jpg';
import pic5 from '../img/pic5.jpg';
import pic6 from '../img/pic6.jpg';
import Footer from './Footer';

const Gallery = () => {
    return (
        <div>
            <br />
            <h1 style={styles.headerText}>Some of our works</h1>
            <hr style={styles.hr} />
            <br /><br />
            <div className="gallery" style={styles.gallery}>
                <img className="picture" style={styles.picture} src={pic1} alt="" />
                <img className="picture" style={styles.picture} src={pic2} alt="" />
                <img className="picture" style={styles.picture} src={pic3} alt="" />
                <img className="picture" style={styles.picture} src={pic4} alt="" />
                <img className="picture" style={styles.picture} src={pic5} alt="" />
                <img className="picture" style={styles.picture} src={pic6} alt="" />
            </div>
            <br />
            <Footer />
        </div>
    );
};

const styles = {
    headerText: {
        fontSize: '35px',
    },

    hr: {
        width: '80px',
        background: `linear-gradient(to right, #784cfb, pink)`,
        border: 'none',
        height: '5px',
        borderRadius: '20px',
        marginTop: '-20px',
    },
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    picture: {
        width: '27vw',
        margin: '5px',
        borderRadius: '10px',
    },
};

export default Gallery;