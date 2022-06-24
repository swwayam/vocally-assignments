import React, { useState } from "react";
import { BiChevronUpCircle } from "react-icons/bi";
import Logo from "../../Logo/Logo";
import Socials from "../../Socials/Socials";
import validator from "validator";
import axios from "axios";
import LoadingSpinner from "../../Spinner/Spinner";
import qs from "qs";

import "./HomeSection.css";

function HomeSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formData;

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handelChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handelClick = (e) => {
    e.preventDefault();
    console.log(name, email);
    const isName = validator.isAlpha(name);
    const isEmail = validator.isEmail(email);

    if (isName && isEmail) {
      setIsLoading(true);
      setTimeout(request, 2000);
      setNameError("");
    }

    if (!isName) {
      setNameError(true);
    }

    if (!isEmail) {
      setEmailError(true);
    }

    setTimeout(setDefaults, 4000);
  };

  const request = () => {
    const data = formData;
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url: "http://localhost:4000/userData",
    };
    axios(options)
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setServerError(error.response.data);
      });
    setIsLoading(false);
  };

  const setDefaults = () => {
    setSuccess(false);
    setNameError(false);
    setEmailError(false);
  };

  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="home">
        <div className="home-left">
          <h1 className="home-left__title">
            Vehicle Maintainance <br /> From The Comfort of <br /> Your Home
          </h1>
          <p className="home-left__description">
            Open Auto Soothes the hassel of maintaining your vehicle and helps{" "}
            <br className="home-left__break-description" /> you deal with
            unexpected repairs worry-free.
          </p>
          {success ? (
            <h2 className="home-left__form-success">
              Your response has been recorded
            </h2>
          ) : (
            ""
          )}
          {serverError ? (
            <h2 className="home-left__form-success">{serverError}</h2>
          ) : (
            ""
          )}
          <form onSubmit={handelClick} className="home-left__form">
            {emailError ? (
              <h2 className="home-left__form-message email-error">
                Invalid email format
              </h2>
            ) : (
              ""
            )}
            {nameError ? (
              <h2 className="home-left__form-message name-error">
                Invalid name format
              </h2>
            ) : (
              ""
            )}
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handelChange}
              className="home-left__form-input"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="home-left__form-input"
              onChange={handelChange}
              placeholder="Enter Your Email"
            />
            <button
              className="common-btn home-left__form-btn"
              disabled={isLoading}
              type="submit"
            >
              Submit {isLoading ? <LoadingSpinner /> : ""}
            </button>
          </form>
        </div>
        <div className="home-right">
          <img
            src="./images/Pickup_Illustration.png"
            alt="pickup"
            className="home-right__image"
          />
        </div>
        <div className="home-bottom__logo">
          <BiChevronUpCircle />
        </div>
        <Socials />
      </div>
    </>
  );
}

export default HomeSection;
