import React from 'react'
import "../styles/contactdetails.css"
const ContactDetails = () => {
  return (
    <>
      <div className="contact-details">
        <div className="box-container">
          <div className="box-details">
            <div className="icon-box">
              <i class="uil uil-map-marker-minus"></i>{" "}
            </div>
            <div className="box-details-info">
              <h5>adresse</h5>
              <p>XXXX, XXXX, XXXXX</p>
            </div>
          </div>
        </div>
        <div className="box-container">
          <div className="box-details">
            <div className="icon-box">
              <i class="uil uil-phone"></i>
            </div>
            <div className="box-details-info">
              <h5>Numero</h5>
              <p>+216 51 474 188</p>
            </div>
          </div>
        </div>
        <div className="box-container">
          <div className="box-details">
            <div className="icon-box">
              <i class="uil uil-envelope-edit"></i>{" "}
            </div>
            <div className="box-details-info">
              <h5>email</h5>
              <p>Contact.fertinat@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails