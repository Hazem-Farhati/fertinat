import React from 'react'
import "../styles/ourdetails.css"
const OurDetails = () => {
  return (
    <div>
      <button data-text="Awesome" className="button">
        {/* <span className="actual-text">&nbsp;Our'Products&nbsp;</span> */}
        {/* <span className="hover-text" aria-hidden="true">
          &nbsp;Our'Products&nbsp;
        </span> */}
      </button>
      <div className="prod-home">
        <div className="prod-home-card ">
          {" "}
          <div className="top-left-border prod-home-card2 "></div>
          <h3>Livraison </h3>
          <p>
            Partout en Tunisie, Profitez-en vite, Faites votre choix, merci!
          </p>
        </div>
        <div className="prod-home-card">
          <div className="prod-home-card2">
            <h3>Produits disponible</h3>
            <p>
              Le tarif est de 3dt le kilogramme, Et pour une commande de 10kg,
              Le prix est de seulement 15dt.
            </p>
          </div>
        </div>
        <div className="prod-home-card">
          <h3>Création de marque</h3>
          <p>
            Nous créons votre marque en pensant à votre public cible en
            utilisant des techniques de conception.
          </p>

          <div className="last-border prod-home-card2 "></div>
        </div>{" "}
      </div>
    </div>
  );
}

export default OurDetails