import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = () => {
    console.log(userName);
    console.log(userPassword);
  };

  return (
    <div className="container">
      <div className="header">
        <p>Sign in</p>
      </div>

      <div className="info">
        <div className="userName">
          <input
            type="text"
            placeholder="Username or email"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
        </div>

        <div className="password">
          <input
            type="password"
            placeholder="Password"
            minLength={8}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            required
          />
        </div>

        <div className="forgot-password">
          <a href="">Forgot password?</a>
        </div>
      </div>

      <div className="btns">
        <button className="btn" onClick={handleSubmit}>
          Sign in
        </button>
        <p>or</p>
        <button className="sign-in-with-google">Sign in with google</button>
      </div>
    </div>
  );
}

export default Login;
