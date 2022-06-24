import React from "react";
import Socials from "../Socials/Socials";
import Logo from "../Logo/Logo";
import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="common-padding footer-line">
        <div className="line"></div>
      </div>

      <div className="footer common-padding">
        <div className="footer-left">
          <Logo />
          <h3 className="footer-left__rights">
            Open Auto @ all rights reserved
          </h3>
        </div>
        <div className="footer-right">
          <ul className="footer-right__links">
            <li className="footer-right__links-link">
              <a href="/">
                <BsTelephoneFill className="footer-right__links-icon" /> +769
                586 4558
              </a>
            </li>
            <li className="footer-right__links-link">
              <a href="/">
                <BsFillEnvelopeFill className="footer-right__links-icon" />
                service@openauto.ca
              </a>
            </li>
          </ul>
          <ul className="footer-right__legal">
            <li className="footer-right__legal-link">
              <a href="/">Privacy policy</a>
            </li>
            <li className="footer-right__legal-link">
              <a href="/">Terms of use</a>
            </li>
            <li className="footer-right__legal-link">
              <a href="/">Cookie policy</a>
            </li>
          </ul>
          <Socials className="socials-footer" />
        </div>
      </div>
    </>
  );
}

export default Footer;
