import React from "react";
import "../styles/navbar.css";
import { BiAlignLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const isAuth = localStorage.getItem("token");
  const [Toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <>
      {Toggle ? (
        <>
          <BiAlignLeft
            className="nav__toggle"
            onClick={() => setToggle(false)}
          />
        </>
      ) : (
        <>
          {" "}
          <div className="navbar">
            <div className="navbar__container">
              <div className="navbar__content">
                <div className="logo">
                  <img src="/images/logopng.png" alt="" />
                </div>
                <AiOutlineClose
                  className="nav__close"
                  onClick={() => setToggle(true)}
                />
                <li>
                  <Link to="/">
                    {" "}
                    <h4>Acceuil</h4>
                  </Link>
                  <Link to="/product">
                    {" "}
                    <h4>Produit</h4>
                  </Link>

                  <Link to="/about">
                    {" "}
                    <h4>Evénement</h4>
                  </Link>
                  <Link to="/contact">
                    {" "}
                    <h4>Contact</h4>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ----------- phone navbar ----------------- */}
      {show ? (
        <>
          <BiAlignLeft className="nav__toggle" onClick={() => setShow(!show)} />
        </>
      ) : (
        <>
          {" "}
          <div className="navbar__phone">
            <div className="navbar__container__phone">
              <div className="navbar__content__phone">
                <div className="logo">
                  <img src="/images/logopng.png" alt="" />
                </div>
                <AiOutlineClose
                  className="nav__close"
                  onClick={() => setShow(true)}
                />
                <div className="li-phone">
                  <li>
                    <Link to="/">
                      {" "}
                      <h4 onClick={() => setShow(true)}>Acceuil</h4>
                    </Link>
                    <Link to="/product">
                      {" "}
                      <h4 onClick={() => setShow(true)}>Produit</h4>
                    </Link>

                    <Link to="/about">
                      {" "}
                      <h4 onClick={() => setShow(true)}>Evénement</h4>
                    </Link>
                    <Link to="/contact">
                      {" "}
                      <h4 onClick={() => setShow(true)}>Contact</h4>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
