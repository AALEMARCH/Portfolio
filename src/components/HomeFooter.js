import React from "react";
import media from "../../src/media/cv_antoine_lemarchand_compressed.pdf";
import Button from "react-bootstrap/Button";

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
          <Button variant="outline-light">
            <span className="sidebar_link--positionOne">
              <i className="fa-brands fa-linkedin"></i>
            </span>
            <span className="sidebar_link--positionTwo">linkedin</span>
          </Button>
        </a>
        <a
          href="https://github.com/AALEMARCH"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="chemin vers github"
        >
          <Button variant="outline-light">
            <span className="sidebar_link--positionOne">
              <i className="fa-brands fa-github-square"></i>
            </span>
            <span className="sidebar_link--positionTwo">github</span>
          </Button>
        </a>
        <a
          href={media}
          aria-label="lien pour télécharger le CV de Antoine"
          download
        >
          <Button variant="outline-light">
            <span>telecharger mon cv</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HomeFooter;
