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
            src="./media/booki.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Projet Booki</h3>
            <p>Intégration de maquette en HTML et CSS</p>

            <a
              href="https://aalemarch.github.io/P2_antoine_lemarchand_code/"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
            >
              <Button variant="outline-dark">Visiter le site web</Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./media/OhMyFood.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Projet Oh my food</h3>
            <p>Intégration de maquettes et animation en HTML SASS</p>
            <a
              href="https://aalemarch.github.io/AntoineLemarchand_3_29112021/"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
            >
              <Button variant="outline-dark">Visiter le site web</Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./media/laChouetteAgence.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Projet la Chouette Agence</h3>
            <p>SEO</p>
            <a
              href="https://aalemarch.github.io/AntoineLemarchand_4_28122021/"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
            >
              <Button variant="outline-dark">Visiter le site web</Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./media/kanap.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Projet Kanap</h3>
            <p>Creer le Frontend d'une application en Javascript vanilla</p>
            <a
              href="https://github.com/AALEMARCH/AntoineLemarchand_5_19-01-2022"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
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
            src="./media/hotTakes.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Projet Hot Takes</h3>
            <p>Creer le backend d'une application</p>
            <a
              href="https://github.com/AALEMARCH/P6_antoine_lemarchand_code"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
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
            src="./media/groupomania.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Projet Groupomania</h3>
            <p>Réseau social d'entreprise. Javascript node Js React</p>
            <a
              href="https://github.com/AALEMARCH/P7_antoine_lemarchand_code"
              target="_blank"
              rel="noreferrer"
              className="carousel_link"
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
