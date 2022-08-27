import React from "react";

const HomeFooter = () => {
  return (
    <div>
      <div className="homeFooter">
        <a
          href="https://www.linkedin.com/in/antoine-lemarchand/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="chemin vers linkedin"
        >
          <span className="sidebar_link--positionOne">
            <i className="fa-brands fa-linkedin"></i>
          </span>
          <span className="sidebar_link--positionTwo">linkedin</span>
        </a>
        <a
          href="https://github.com/AALEMARCH"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="chemin vers github"
        >
          <span className="sidebar_link--positionOne">
            <i className="fa-brands fa-github-square"></i>
          </span>
          <span className="sidebar_link--positionTwo">github</span>
        </a>
        <a
          href="./media/cv_antoine_lemarchand-min.pdf"
          aria-label="lien pour télécharger le CV de Antoine"
          download
        >
          <span>telecharger mon cv</span>
        </a>
      </div>
    </div>
  );
};

export default HomeFooter;
