import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const PortfolioHandle = () => {
  return (
    <div className="portfolioContainer">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./media/booki.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Projet Booki</h3>
            <p>Transformer une maquette en site web avec HTML & CSS</p>

            <a
              href="https://aalemarch.github.io/P2_antoine_lemarchand_code/"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
              aria-label="Portfolio : Chemin vers le site Booki - HTML CSS"
            >
              <Button variant="outline-dark">Visiter le site web</Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./media/OhMyFood.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Projet Oh my food</h3>
            <p>
              Dynamiser une page web avec des animations CSS / HTML - CSS - SASS
            </p>
            <a
              href="https://aalemarch.github.io/AntoineLemarchand_3_29112021/"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
              aria-label="Portfolio : lien vers le site Oh my food - HTML SASS"
            >
              <Button variant="outline-dark">Visiter le site web</Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./media/laChouetteAgence_1.webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Projet la Chouette Agence</h3>
            <p>
              Optimisation d'un site web existant / SEO - Accessibilité -
              Performances
            </p>
            <a
              href="https://aalemarch.github.io/AntoineLemarchand_4_28122021/"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
              aria-label="Portfolio : Chemin vers le la Chouette Agence - SEO"
            >
              <Button variant="outline-dark">Visiter le site web</Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./media/kanap.webp"
            alt="First slide"
          />
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
          <img
            className="d-block w-100"
            src="./media/hotTakes.webp"
            alt="Second slide"
          />

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
          <img
            className="d-block w-100"
            src="./media/groupomania.webp"
            alt="Third slide"
          />

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
          Voici les differents projets auquel j'ai participer durant ma
          formation de developpeur integrateur web
        </p>
      </div>
    </div>
  );
};

export default PortfolioHandle;
