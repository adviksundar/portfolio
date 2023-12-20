import React, { useRef } from 'react';
import './contact.css';
import GitHubIcon from '../../images/github-icon-white.png';
import LinkedInIcon from '../../images/linkedin-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z5j0xch', 'template_3w2y3pr', form.current, '4lTSbafbG1bidGY1A')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contactPage'>
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <div className="inputField">
                        <input type="text" className="name" placeholder='Your Name' name="from_name" required />
                    </div>
                    <div className="inputField">
                        <input type="email" className="email" placeholder='Your Email' name="from_email" required />
                    </div>
                    <div className="inputField">
                        <textarea className="msg" name="message" rows="5" placeholder='Your Message' required></textarea>
                    </div>
                    <div className="buttonField">
                        <button type='submit' value='Send' className="submitBtn">Submit</button>
                    </div>
                    <div className="links">
                        <a href="https://github.com/adviksundar" target="_blank" className="linkContainer">
                            <img src={GitHubIcon} alt="GitHub" className="link" />
                        </a>
                        <a href="https://www.linkedin.com/in/advik-sundar/" target="_blank" className="linkContainer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;