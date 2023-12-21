import React from 'react';
import './works.css';
import PlanetHunters from '../../images/planet-hunters.png';
import NLPFinance from '../../images/nlp-finance-jpeg.jpeg';
import SkinCancer from '../../images/skin-cancer-jpeg.jpeg';
import CarDetection from '../../images/car-detection-jpeg.jpeg';
import EPLSoccer from '../../images/epl-soccer-jpeg.jpg';
import AdvikPort from '../../images/advik-portfolio.png';

const works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">
        I've undertaken a variety of full stack and machine learning projects, 
        showcasing my skills and enthusiasm for technology. I've developed full stack
        web applications using languages like HTML, CSS, JavaScript, React, and Python. 
        My data science projects involve leveraging tools such as Tensorflow, CNNs, and 
        Random Forest to analyze data and build predictive models. Each project 
        reflects my commitment to innovation and problem-solving, blending 
        technical proficiency with a passion for creating impactful solutions. 
        <br/>
        <br/>
        <span className='direction'>Click on a project below to see its source code</span>
        </span>
        <div className="worksImgs">
            <a href="https://github.com/adviksundar/Planet_Hunters_AI_Tool" target="_blank" className="overlay">
                <div className="img">
                    <img src={PlanetHunters} alt="Planet Hunters" className="worksImg" />
                </div>
                <div className="linkTxt">
                    <h2>Planet Hunters</h2>
                </div>
            </a>

            <a href="https://github.com/adviksundar/NLP_for_Finance_Sentiment_Analysis" target="_blank" className="overlay">
                <div className="img">
                    <img src={NLPFinance} alt="NLP for Finance Sentiment Analysis" className="worksImg" />
                </div>
                <div className="linkTxt">
                    <h2>NLP for Finance Sentiment Analysis</h2>
                </div>
            </a>
            
            <a href="https://github.com/adviksundar/AI_Tool_and_Web_Application_for_Skin_Cancer_Diagnosis" target="_blank" className="overlay">
                <div className="img">
                    <img src={SkinCancer} alt="Skin Cancer Diagnosis AI Tool" className="worksImg" />
                </div>
                <div className="linkTxt">
                    <h2>Skin Cancer Diagnosis AI Tool</h2>
                </div>
            </a>
            
            <a href="https://github.com/adviksundar/Object_Detection_AI_Tool_for_Cars" target="_blank" className="overlay">
                <div className="img">
                    <img src={CarDetection} alt="Object Detection AI Tool for Cars" className="worksImg" />
                </div>
                <div className="linkTxt">
                    <h2>Object Detection AI Tool for Cars</h2>
                </div>
            </a>
            
            <a href="https://github.com/adviksundar/EPL-Winner-Predictions" target="_blank" className="overlay">
                <div className="img">
                    <img src={EPLSoccer} alt="EPL Soccer Winner Predictor" className="worksImg" />
                </div>
                <div className="linkTxt">
                    <h2>EPL Soccer Winner Predictor</h2>
                </div>
            </a>
            
            <a href="https://github.com/adviksundar/portfolio" target="_blank" className="overlay">
                <div className="img">
                    <img src={AdvikPort} alt="Advik's Portfolio" className="worksImg" />
                </div>
                <div className="linkTxt">
                    <h2>Advik's Portfolio</h2>
                </div>
            </a>
        
        </div>
        
    </section>
  );
}

export default works