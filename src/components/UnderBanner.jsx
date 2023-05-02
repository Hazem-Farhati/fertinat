import React from 'react'
import "../styles/under-banner.css"
import { Link } from 'react-router-dom';
const UnderBanner = () => {
  return (
    <>
      <div className="under-banner" >
        <div className="left-underbanner">
          <span className="lu-title">Engrais Naturel</span>
          <h2 className="lu-title2">Matières 100% naturelles</h2>
          <p className="lub-info">
            Fertinat est un engrais naturel a base des matières premières 100%
            naturelles pour aider à la fertilisation des sols. En plus de sa
            fonction première de fertilisation, Fertinat joue également un rôle
            clé dans la correction des sols. Les matières premières naturelles
            utilisées dans la production de Fertinat sont riches en nutriments,
            tels que l'azote, le phosphore et le potassium, qui sont essentiels
            pour la croissance des plantes. En plus de ces nutriments, Fertinat
            contient également des minéraux tels que le calcium, le magnésium et
            le soufre, qui aident à améliorer la structure du sol et à maintenir
            un pH équilibré. En corrigeant les propriétés physiques et chimiques
            du sol, Fertinat permet aux racines des plantes de mieux absorber
            les nutriments, ce qui augmente leur croissance et leur
            productivité. De plus, en utilisant Fertinat, les agriculteurs
            peuvent réduire leur dépendance à l'égard des engrais synthétiques,
            ce qui peut aider à améliorer la durabilité environnementale des
            pratiques agricoles
          </p>
          <Link to="/contact">
            <button className="lub-button">Contacter-nous</button>
          </Link>
          <img className="tache-ub" src="/images/tache.png" alt="" />
          <div className="s-bg"></div>
        </div>
        <div className="right-underbanner">
          <img src="/images/hh.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default UnderBanner