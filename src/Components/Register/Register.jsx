import React from "react";
import "./Register.css"

function Register() {
  return (
    <div className="container">
      <div className="header">
        <p>Register</p>
      </div>

      <div className="info">
        <div className="userName">
          <input type="text" placeholder="User name" required />
        </div>

        <div className="password">
          <input type="password" placeholder="Password" required />
        </div>

        <div className="confirm-password">
          <input type="password" placeholder="Confirm password" required />
        </div>

        <div className="email">
          <input type="email" placeholder="Email" required />
        </div>
      </div>

      <div className="btns">
        <button className="btn">Register</button>
      </div>

      <p className="bottom-border"></p>

      <div className="btns">
        <button className="sign-in-with-google">Sigh in with google</button>
      </div>
    </div>
  );
}

export default Register;
