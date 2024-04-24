import React from 'react'
import '../App.css';
import Footer from './Footer';

const Form = () => {
    return (
        <div>
            <br />
            <center>
            <div className="form">
                <div className="contact-info">
                    <h3 className="title">Let's get in touch</h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        dolorum adipisci recusandae praesentium dicta!
                    </p>

                    <div className="info">
                        <div className="information">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="information">
                            <i className="fas fa-envelope"></i> &nbsp &nbsp
                            <p>lorem@ipsum.com</p>
                        </div>
                        <div className="information">
                            <i className="fas fa-phone"></i>&nbsp&nbsp
                            <p>123-456-789</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <p>Connect with us :</p>
                        <div className="social-icons">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form">

                    <form action="" autocomplete="off">
                        <div className="input-container">
                            <label for="">Username</label>
                            <input type="text" name="name" className="input" />
                        </div>
                        <div className="input-container">
                            <label for="">Email</label>
                            <input type="email" name="email" className="input" />
                        </div>
                        <div className="input-container">
                            <label for="">Phone</label>
                            <input type="tel" name="phone" className="input" />
                        </div>
                        <div className="input-container textarea">
                            <label for="">Message</label>
                            <textarea name="message" className="input"></textarea>
                        </div>
                        <input type="submit" value="Send" className="btn" />
                    </form>
                </div>
            </div>
            </center>
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
}

export default Form;