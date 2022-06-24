import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

import "./Socials.css";

function Socials() {
  return (
    <div className="socials">
      <ul className="socials-links">
        <li className="socials-links__link">
          <a href="/">
            <BsFacebook />
          </a>
        </li>
        <li className="socials-links__link">
          <a href="/">
            <BsTwitter />
          </a>
        </li>
        <li className="socials-links__link">
          <a href="/">
            <BsYoutube />
          </a>
        </li>
        <li className="socials-links__link">
          <a href="/">
            <BsLinkedin />
          </a>
        </li>
        <li className="socials-links__link">
          <a href="/">
            <BsInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
