import "../styles/contact-home.css"
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const ContactHome = () => {
      const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          "service_ceoe3w9",
          "template_oribh9i",
          form.current,
          "EpGP5WrcpuTCcOzAW"
        );
        e.target.reset();
      };
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="contact-home">
        <div className="contact-home-container">
          <div className="bc-ft2">
            <div className="right-ch">
              <span className="contact-title1">Contacter-nous</span>
              <h2 className="contact-title2">Pour passer des commandes</h2>
              {/* <h2 className="contact-title">Contact</h2> */}
              <div className="all-inputs">
                <div className="name-num">
                  <input name="name" type="text" placeholder="Nom et Prenom" />
                  <input
                    name="phone"
                    type="number"
                    placeholder="Numéro de telephone"
                  />
                </div>
                <div className="email-title">
                  <input type="text" name="email" placeholder="Email" />
                  <input type="text" name="objet" placeholder="Objet" />
                </div>
                <div className="msg">
                  <textarea type="text" name="message" placeholder="Contenu" />
                </div>
                <button className="contact-reserver">Réserver</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactHome