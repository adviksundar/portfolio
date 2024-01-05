import React from 'react'
import './experience.css'
import Futran from '../../images/futran-moded-4.png';
import G3 from '../../images/g3-logo.png';
import Ridgetech from '../../images/ridgetech-solutions-white.png';

const Experience = () => {
  return (
    <section id="experiencePage">
        <div id="clients">
            <h1 className="experiencePageTitle">Internship Experience</h1>
            <p className="clientDesc">
                So far, I have had internships in Futran Solutions, G3 Consulting Services, and Ridgetech Solutions.
                These internships have involved conducting quality assurance, mining and web scraping data, 
                safeguarding data integrity via machine learning, testing applications across various environments, 
                and collaborating on chatbot creation and app development via Pega and more.
            </p>
            <div className="clientImgs">
                <img src={Futran} alt="Futran Solutions" className="clientImg" />
                <img src={G3} alt="G3 Consulting Services" className="clientImg" />
                <img src={Ridgetech} alt="Ridgetech Solutions" className="clientImg" />
            </div>
        </div>
    </section>
  );
}

export default Experience