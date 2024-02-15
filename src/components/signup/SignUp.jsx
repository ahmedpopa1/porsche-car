import React, { useState } from "react";
import './style.css';

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmedPasswordChange = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const validateForm = () => {
    if (!name || !email || !password || !confirmedPassword) {
      setError("All fields are required");
      return false;
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      setError("Name should not contain numbers");
      return false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(
        "Password must be 8 characters and include both letters and numbers"
      );
      return false;
    } else if (password !== confirmedPassword) {
      setError("Passwords do not match");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign UP</div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmedPassword}
            onChange={handleConfirmedPasswordChange}
          />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click here!</span>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
