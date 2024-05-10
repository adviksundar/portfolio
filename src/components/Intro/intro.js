import React from 'react';
import './intro.css';
import bg from '../../images/profile-pic.jpg';
import btnImgGitHub from '../../images/github-icon.png';
import btnImgLinkedIn from '../../images/linkedin-icon.png';
import { Link } from 'react-scroll';

const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Advik</span><br/>Data Scientist</span>
            <p className="introPara">I am a skilled and passionate data scientist with experience in creating powerful, efficient data models and applications.</p>
            <div className="btnMenu">
                <a href="https://github.com/adviksundar" target="_blank" className='btnGit'>
                    <div className="btnContent">
                        <img src={btnImgGitHub} alt="GitHub" className='btnImg'/>
                        <span className='imgTxt'>GitHub</span>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/advik-sundar/" target="_blank" className='btnLin'>
                    <div className="btnContent">
                        <img src={btnImgLinkedIn} alt="LinkedIn" className='btnImg'/>
                        <span className='imgTxt'>LinkedIn</span>
                    </div>
                </a>
            </div>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default intro;