import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="navigationBarre">
        <div className="sidebar_link">
          <NavLink
            to="/ReactPortfolio/"
            className="sidebar_link--style"
            aria-label="Navigation : Chemin vers la page d'accueil"
          >
            <span className="sidebar_link--positionOne">
              <i className="fa-solid fa-house-chimney"></i>
            </span>
            <span className="sidebar_link--positionTwo">Acceuil</span>
          </NavLink>
          <NavLink
            to="/ReactPortfolio/contact"
            className="sidebar_link--style"
            aria-label="Navigation : Chemin vers la page contact"
          >
            <span className="sidebar_link--positionOne">
              <i className="fa-solid fa-at"></i>
            </span>
            <span className="sidebar_link--positionTwo">Contact</span>
          </NavLink>
          <NavLink
            to="/ReactPortfolio/portfolio"
            className="sidebar_link--style"
            aria-label="Navigation : Chemin vers le portfolio"
          >
            <span className="sidebar_link--positionOne">
              <i className="fa-solid fa-address-card"></i>
            </span>
            <span className="sidebar_link--positionTwo">Portfolio</span>
          </NavLink>
          <NavLink
            to="/ReactPortfolio/competences"
            className="sidebar_link--style"
            aria-label="Navigation : Chemin vers la page compétences"
          >
            <span className="sidebar_link--positionOne">
              <i className="fa-solid fa-kitchen-set"></i>
            </span>
            <span className="sidebar_link--positionTwo">Compétence</span>
          </NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navigation;
