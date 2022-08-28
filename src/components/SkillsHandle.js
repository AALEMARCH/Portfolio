import React from "react";

const SkillsHandle = () => {
  return (
    <div className="skillsContainer">
      <div className="skillsContainer_individual">
        <h2>Frontend</h2>
        <ul>
          <li>
            <i className="fa-brands fa-html5 skillsContainer_individual--icon"></i>
            <h4>HTML 5</h4>
            <i className="fa-brands fa-css3-alt skillsContainer_individual--icon"></i>
            <h4>CSS 3</h4>
          </li>
          <li>
            <i className="fa-brands fa-sass skillsContainer_individual--icon"></i>
            <h4>SASS</h4>
            <i className="fa-brands fa-bootstrap skillsContainer_individual--icon"></i>
            <h4>Bootstrap</h4>
          </li>
          <li>
            <i className="fa-brands fa-js skillsContainer_individual--icon"></i>
            <h4>JS</h4>
            <i className="fa-brands fa-react skillsContainer_individual--icon"></i>
            <h4>REACT</h4>
          </li>
        </ul>
      </div>
      <div className="skillsContainer_individual">
        <h2>Backend</h2>
        <ul>
          <li>
            <i className="fa-brands fa-node-js skillsContainer_individual--icon"></i>
            <h4>Node JS</h4>
            <i className="fa-solid fa-code skillsContainer_individual--icon"></i>
            <h4>Express</h4>
          </li>
          <li>
            <i className="fa-solid fa-database skillsContainer_individual--icon"></i>
            <h4>MySQL</h4>
            <h4>MongoDB</h4>
            <i className="fa-solid fa-tower-cell skillsContainer_individual--icon"></i>
            <h4>Sequelize</h4>
          </li>
        </ul>
      </div>
      <div className="skillsContainer_individual">
        <h2>Outils</h2>
        <ul>
          <li>
            <i className="fa-brands fa-git-alt skillsContainer_individual--icon"></i>
            <h4>Git</h4>
            <i className="fa-brands fa-github skillsContainer_individual--icon"></i>
            <h4>Github</h4>
          </li>
          <li>
            <i className="fa-solid fa-signs-post skillsContainer_individual--icon"></i>
            <h4>Postman</h4>
            <i className="fa-solid fa-keyboard skillsContainer_individual--icon"></i>
            <h4>VS Code</h4>
          </li>
        </ul>
      </div>
      <div className="skillsContainer_individual">
        <h2>Autre</h2>
        <p className="skillsContainer_individual--iconTwo">Référencement SEO</p>
        <p className="skillsContainer_individual--iconTwo">
          outils de test automatisée
        </p>
      </div>
    </div>
  );
};

export default SkillsHandle;
