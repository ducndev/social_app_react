import React from "react";
import "./register.css";
export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialApp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialApp
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="text"
              className="loginInput"
              placeholder="Enter Your Username..."
            />
            <input
              type="email"
              className="loginInput"
              placeholder="Enter Your Email..."
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Enter Your Password..."
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Enter Your Password Again..."
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Login Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
