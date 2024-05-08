import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import errorImg from "../assets/error.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(isValidEmail ? "" : "Enter a valid email address");
  };

  useEffect(() => {
    setIsSubmitDisabled(!name || !email || emailError);
  }, [name, email, emailError]);

  return (
    <div className="registerPageDiv">
      <Navbar Page={"register"}/>
      <div className="RegisterHeading">
        <p
          className="headerQuote"
          style={{ margin: "0", marginBottom: "16px" }}
        >
          Registration Form
        </p>
        <p className="regHeaderDesc">Start your success Journey here!</p>
      </div>

      <div className="inputFormDiv">
        <input
          className="nameInput"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <input
          className="emailInput"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />

        {emailError && (
          <div className="errorMssg">
            <img src={errorImg} alt="Error" />
            <p>{emailError}</p>
          </div>
        )}

        <button
          className={"submitBtn " + `${isSubmitDisabled ? "disabled" : ""}`}
          disabled={isSubmitDisabled}
        >
          <a style={{ color: "#fff" }} href="/success">
            Submit
          </a>
        </button>
      </div>
    </div>
  );
};

export default Register;
