import React, { useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets/assets";

const LoginPop = ({ setShowPop }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            className="cross-icon"
            src={assets.cross_icon}
            onClick={() => setShowPop(false)}
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="btnLogin">
          {currentState === "Sign Up" ? "Creat Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & pravicy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Creat a New Account{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click hear</span>
          </p>
        ) : (
          <p>
            Already have account{" "}
            <span onClick={() => setCurrentState("Login")}>Click hear</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
