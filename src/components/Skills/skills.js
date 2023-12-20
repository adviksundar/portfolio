import React from 'react';
import './skills.css';
import DataSci from '../../images/ML-icon.png';
import SWE from '../../images/swe-icon.png';
import Language from '../../images/language-icon.png';
import Leadership from '../../images/people-icon.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
        Hey! I'm a Electrical and Computer Engineering Student at the University of Texas at Austin (hook'em). 
        I am not only experienced with machine learning, but I also have contributed to various projects in full stack
        engineering and web development, especially with React.js and Node.js. 
        I also took on several internship experiences regarding software engineering and data science.
        <br/>
        <br/>
        My favorite hobbies are swimming, learning languages, and playing the violin! 
        Let me know and we'll play a game of volleyball sometime!
        </span>
        <div className="skillBars">

            <div className="skillBar">
                <img src={DataSci} alt="Data Science" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Data Science</h2>
                    <p>
                        Python, AWS, SQL, PyTorch, Pandas, Scikit-learn, TensorFlow, Keras, Linear Algebra, 
                        Hadoop, Matplotlib
                    </p>
                </div>
            </div>

            <div className="skillBar">
                <img src={SWE} alt="Software Engineering" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Software Engineering</h2>
                    <p>
                        Java, JavaScript, HTML, CSS, React, NodeJS, SQL, GitHub, Spring, Assembly, C, C++, Python, 
                        Linux, Pega Dev Studio
                    </p>
                </div>
            </div>

            <div className="skillBar">
                <img src={Language} alt="Languages" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Languages</h2>
                    <p>
                        English, Spanish, Tamil
                    </p>
                </div>
            </div>

            <div className="skillBar">
                <img src={Leadership} alt="Leadership" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Leadership</h2>
                    <p>
                        Communication, Project Management, Public Speaking, Negotiation, Conflict Management
                    </p>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Skills