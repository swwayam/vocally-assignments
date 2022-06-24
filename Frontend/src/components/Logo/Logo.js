import React from "react";
import { BiChevronUpCircle } from "react-icons/bi";

import "./Logo.css";

function Logo() {
  return (
    <>
      <BiChevronUpCircle className="logo-icon" />
      <h1 className="logo-name">PENAUTO</h1>
    </>
  );
}

export default Logo;
