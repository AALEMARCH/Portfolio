import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import media1 from "../../src/media/booki.webp";
import media2 from "../../src/media/OhMyFood.webp";
import media3 from "../../src/media/laChouetteAgence_1.webp";
import media4 from "../../src/media/kanap.webp";
import media5 from "../../src/media/hotTakes.webp";
import media6 from "../../src/media/groupomania.webp";

const PortfolioHandle = () => {
  return (
    <div className="portfolioContainer">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={media1} alt="First slide" />
          <Carousel.Caption>
            <h3>Projet Booki</h3>
            <p>Transformer une maquette en site web avec HTML & CSS</p>
            <div className="carousel_link">
              <a
                href="https://aalemarch.github.io/P2_antoine_lemarchand_code/"
                target="_blank"
                rel="noreferrer"
                className="carousel_link"
                aria-label="Portfolio : Chemin vers le site Booki - HTML CSS"
              >
                <Button variant="outline-dark">Visiter le site web</Button>
              </a>
              <a
                href="https://github.com/AALEMARCH/P2_antoine_lemarchand_code"
                target="_blank"
                rel="noreferrer"
                className="carousel_link"
                aria-label="Portfolio : Chemin vers le code source du projet Booki"
              >
                <Button variant="outline-dark">
                  Lien vers le repository Github
                </Button>
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={media2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Projet Oh my food</h3>
            <p>
              Dynamiser une page web avec des animations CSS / HTML - CSS - SASS
            </p>
            <div className="carousel_link">
              <a
                href="https://aalemarch.github.io/AntoineLemarchand_3_29112021/"
                target="_blank"
                rel="noreferrer"
                className="carousel_link"
                aria-label="Portfolio : lien vers le site Oh my food - HTML SASS"
              >
                <Button variant="outline-dark">Visiter le site web</Button>
              </a>
              <a
                href="https://github.com/AALEMARCH/AntoineLemarchand_3_29112021"
                target="_blank"
                rel="noreferrer"
                className="carousel_link"
                aria-label="Portfolio : Chemin vers le code source du projet Oh my food"
              >
                <Button variant="outline-dark">
                  Lien vers le repository Github
                </Button>
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={media3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Projet la Chouette Agence</h3>
            <p>
              Optimisation d'un site web existant / SEO - Accessibilité -
              Performances
            </p>
            <div className="carousel_link">
              <a
                href="https://aalemarch.github.io/AntoineLemarchand_4_28122021/"
                target="_blank"
                rel="noreferrer"
                className="carousel_link"
                aria-label="Portfolio : Chemin vers le la Chouette Agence - SEO"
              >
                <Button variant="outline-dark">Visiter le site web</Button>
              </a>
              <a
                href="https://github.com/AALEMARCH/AntoineLemarchand_4_28122021"
                target="_blank"
                rel="noreferrer"
                className="carousel_link"
                aria-label="Portfolio : Chemin vers le code source du projet la Chouette Agence"
              >
                <Button variant="outline-dark">
                  Lien vers le repository Github
                </Button>
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={media4} alt="First slide" />
          <Carousel.Caption>
            <h3>Projet Kanap</h3>
            <p>
              Construction d'un site e-commerce en JavaScript / JavaScript
              Vanilla
            </p>
            <a
              href="https://github.com/AALEMARCH/AntoineLemarchand_5_19-01-2022"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
              aria-label="Portfolio : Chemin vers le code source du projet Kanap"
            >
              <Button variant="outline-dark">
                Lien vers le repository Github
              </Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={media5} alt="Second slide" />

          <Carousel.Caption>
            <h3>Projet Hot Takes</h3>
            <p>
              Construction d'une API sécurisée pour une application d'avis
              gastronomiques / Node.JS - Express - MongoDB
            </p>
            <a
              href="https://github.com/AALEMARCH/P6_antoine_lemarchand_code"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
              aria-label="Portfolio : Chemin vers le code source du projet Hot Takes"
            >
              <Button variant="outline-dark">
                Lien vers le repository Github
              </Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={media6} alt="Third slide" />

          <Carousel.Caption>
            <h3>Projet Groupomania</h3>
            <p>
              Réseau social d'entreprise. REACT - SASS - node.Js - Express -
              MySQL
            </p>
            <a
              href="https://github.com/AALEMARCH/P7_antoine_lemarchand_code"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
              aria-label="Portfolio : Chemin vers le code source du projet Groupomania"
            >
              <Button variant="outline-dark">
                Lien vers le repository Github
              </Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="portfolioContainer_texte">
        <p>
          Voici mes réalisations. Il s'agit des projets que j'ai réalisé durant
          ma formation initiale de développeur web. <br /> Vous retrouverez
          également mes différents projets personnels.
        </p>
      </div>
    </div>
  );
};

export default PortfolioHandle;
