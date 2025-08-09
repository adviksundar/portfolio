import React from "react";
import "./experience.css";
import Futran from "../../images/futran-moded-4.png";
import G3 from "../../images/g3-logo.png";
import Goldman from "../../images/Goldman-Sachs-Logo-2.png";
import Enercon from "../../images/enercon_moded_2.png";

const Experience = () => {
  return (
    <section id="experiencePage">
      <div id="clients">
        <h1 className="experiencePageTitle">Internship Experience</h1>
        <p className="clientDesc">
          So far, I have had internships in Futran Solutions, G3 Tech
          Consultants, ENERCON Services, Inc, and Goldman Sachs. These
          internships have involved creating full stack applications, designing
          robust APIs, working with WebSockets, conducting quality assurance,
          mining and web scraping data, safeguarding data integrity via machine
          learning, testing applications across various environments, and
          collaborating on chatbot creation and app development via Pega, AWS,
          and more.
        </p>
        <div className="clientImgs">
          <img src={Futran} alt="Futran Solutions" className="clientImg" />
          <img src={G3} alt="G3 Consulting Services" className="clientImg" />
          <img src={Enercon} alt="Enercon" className="clientImg" />
          <img src={Goldman} alt="Goldman Sachs" className="clientImg" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
