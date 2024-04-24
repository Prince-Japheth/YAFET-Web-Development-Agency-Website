import React from 'react'
import t1 from '../img/t1.jpg';
import t2 from '../img/t2.jpg';
import t3 from '../img/t3.jpg';
import t4 from '../img/t4.jpg';
import Footer from './Footer';


const Testimonials = () => {
    return (
        <div>
            <br /><br />
            <h1 style={styles.headerText}>Testimonials</h1>
            <hr style={styles.hr} />
            <p style={styles.heroText}>Here's what some of our satisfied clients have to say:</p>
            <br /><br />
            <div className="testimonials" style={styles.testimonials}>
                <div className="testimonial" style={styles.testimonial}>
                    <img style={styles.tImg} src={t1} alt="" />
                    <p style={styles.tText}>YAFET's web solutions transformed our online presence! Their innovative approach and commitment exceeded our expectations.
                        <br />
                        <span style={styles.tSpan}>Sarah Thompson,</span>
                        <br />
                        <span style={styles.tLight}>
                            CEO at Tech Solutions Inc.
                        </span>
                    </p>
                </div>
                <div className="testimonial" style={styles.testimonial}>
                    <img style={styles.tImg} src={t2} alt="" />
                    <p style={styles.tText}>We saw remarkable growth in our business thanks to YAFET's expertise in web development! Their dedication and professionalism are commendable.
                        <br />
                        <span style={styles.tSpan}>Michael Reynolds,</span>
                        <br />
                        <span style={styles.tLight}>
                            Marketing Director at Innovate Solutions
                        </span>
                    </p>
                </div>
                <div className="testimonial" style={styles.testimonial}>
                    <img style={styles.tImg} src={t3} alt="" />
                    <p style={styles.tText}>Choosing YAFET for our web solutions was one of the best decisions we made! Their attention to detail and timely delivery were impressive.
                        <br />
                        <span style={styles.tSpan}>Emily Johnson,</span>
                        <br />
                        <span style={styles.tLight}>
                            COO at Global Enterprises
                        </span>
                    </p>
                </div>
                <div className="testimonial" style={styles.testimonial}>
                    <img style={styles.tImg} src={t4} alt="" />
                    <p style={styles.tText}>YAFET's team provided excellent support throughout the development process! Their expertise and professionalism were second to none.
                        <br />
                        <span style={styles.tSpan}>David Wilson,</span>
                        <br />
                        <span style={styles.tLight}>
                            CTO at Digital Innovations
                        </span>
                    </p>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    )
}


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
    testimonials: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '30px',
    },
    testimonial: {
        // width: 'calc(45.33% - 10px)',
        width: '510px',
        borderRadius: '15px',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(50px)',
        padding: '7px 20px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'start',
        fontSize: '15px',
    },
    tImg: {
        width: '100px',
        height: '100px',
        borderRadius: '100%',
        marginRight: '30px',
    },
    tText: {
        fontWeight: '280',
    },
    tSpan: {
        fontWeight: 'bold',
        letterSpacing: '2px',
    },
    tLight: {
        fontWeight: '400',
        letterSpacing: '2px',
        color: 'white',
    },
}

export default Testimonials;
