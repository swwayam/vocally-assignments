import React from "react";

import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import Logo from "../Logo/Logo";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar common-padding">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="navbar-links">
          <li className="navbar-links__link">
            <a href="/">
              <BsTelephoneFill className="navbar-links__icon" /> +769 586 4558
            </a>
          </li>
          <li className="navbar-links__link">
            <a href="/">
              <BsFillEnvelopeFill className="navbar-links__icon" />
              service@openauto.ca
            </a>
          </li>
          <li className="navbar-links__link">
            <button className="navbar-links__btnDownload common-btn">
              Download the mobile app
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
