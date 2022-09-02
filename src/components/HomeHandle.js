import React from "react";
import HomeFooter from "./HomeFooter";

const HomeHandle = () => {
  return (
    <div className="homeSection">
      <div className="presentation">
        <div className="imgModerate-container">
          <img
            src="./media/portrait.webp"
            className="imgModerate"
            alt="Antoine Lemarchand - developpeur web"
          />
        </div>
        <div className="presentation_sectionAbout">
          <div className="moderateName-container">
            <div className="moderateFunction">Developpeur Web</div>
            <div className="moderateName">antoine lemarchand</div>
            <p className="abouteMe">
              Après une première vie en tant qu'Aide Médico-psychologique, je
              décide de me reconvertir à 32 ans dans l'univers du développement
              web. Sur ce portfolio, retrouvez mon CV, mon contact ainsi que les
              projets réalisés durant ma formation.
            </p>
          </div>
          <div>
            <HomeFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHandle;
