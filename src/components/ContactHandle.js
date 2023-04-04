import React from "react";

const ContactHandle = () => {
  return (
    <div className="contact_container">
      <div className="contact_container--position">
        <h1>Pour me contacter !</h1>
        <div>
          <ul>
            <li>
              <i className="fa-solid fa-chart-area contactIcon"></i>
              <a
                href="https://goo.gl/maps/uSSxeBgV46L2UkWU7"
                target="_blank"
                rel="noreferrer"
                aria-label="chemin vers google map"
              >
                Guignen (télétravail possible)
              </a>
            </li>
            <li>
              <i className="fa-solid fa-paper-plane contactIcon"></i>
              <a
                href="mailto:lemarchand.antoine00@gmail.com"
                aria-label="Lien pour contacter Antoine Lemarchand par email"
              >
                Lien pour me contacter par email
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone contactIcon"></i>
              <a
                href="tel:0786720571"
                aria-label="lien pour appeler Antoine Lemarchand"
              >
                0786720571
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact_container--positionTwo">
        <p>
          N'hésitez pas à me contacter. <br /> Je vous répondrais dès que
          possible.
        </p>
      </div>
    </div>
  );
};

export default ContactHandle;
