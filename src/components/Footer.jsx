import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_about">
          <h3> A propos</h3>
          <p>
            Fertinat est un engrais naturel à base de matières premières
            recyclables, riche en phosphore et azote potassique et qui a un
            effet correctif sur le sol.
          </p>
          <div className="footer_about_icons">
            <Link
              to="https://www.facebook.com/profile.php?id=100078929230267&mibextid=ZbWKwL"
              target="_blank"
            >
              {" "}
              <img src="/images/facebook.png" alt="facebook_icon" />
            </Link>
            <Link
              to="https://www.instagram.com/fertinat_enactus/?igshid=YmMyMTA2M2Y=&fbclid=IwAR3UUkl1-2rxGY0OdyrCZtpXcqla_iajiaWYICQpaFdSRyHQm8VMR3A8ngw"
              target="_blank"
            >
              {" "}
              <img src="/images/instagram.png" alt="instagram_icon" />
            </Link>
          </div><br />
          <span style={{ fontSize: "12px" }}>
            © 2023 HazemFarhati. All rights reserved.
          </span>
        </div>

        <div className="footer_logo">
          <img src="/images/logopng.png" alt="footer_logo" />
        </div>

        <div className="footer_newsletter">
          <h3>Bulletin</h3>
          <p>
            Abonnez-vous à nos prochains articles et ressources d'actualités
          </p>
          <input type="text" name="Email adress" placeholder="adresse email" />
          <button className="footer_send-btn">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Envoyer</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer
