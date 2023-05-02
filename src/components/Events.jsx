import React from 'react'
import "../styles/events.css"
const Events = () => {
  return (
    <>
      <div className="events">
        <span className="event-title">Evenements</span>
        <h2 className="event-title2">Exposition Evenement</h2>
        <img className="carro" src="/images/s-bg.png.webp" alt="" />
        <div data-aos="fade-right" className="exposion-images">
          <img  src="/images/expo1.jpg" alt="exp1" />
          <img
           
            style={{ marginTop: "80px" }}
            src="/images/expo2.jpg"
            alt="ex2"
          />
        </div>
      </div>
    </>
  );
}

export default Events