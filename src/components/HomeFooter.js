import React from "react";

const HomeFooter = () => {
  return (
    <div>
      <div className="homeFooter">
        <a
          href="https://www.linkedin.com/in/antoine-lemarchand/"
          target="_blank"
          rel="noopener noreferrer"
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
        >
          <span className="sidebar_link--positionOne">
            <i className="fa-brands fa-github-square"></i>
          </span>
          <span className="sidebar_link--positionTwo">github</span>
        </a>
        <a href="./media/cv_antoine_lemarchand.pdf" download>
          <span>telecharger mon cv</span>
        </a>
      </div>
    </div>
  );
};

export default HomeFooter;
