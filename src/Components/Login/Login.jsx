import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="container">
      <div className="header">Sign in</div>

      <div className="info">
        <div className="userName">
          <input type="text" placeholder="Username or email" />
        </div>

        <div className="password">
          <input type="text" placeholder="Password" />
        </div>
        
        <div className="forgot-password">
          <a href="">Forgot password?</a>
        </div>
      </div>

      <div className="btns">
        <button className="sign-in-btn">Sign in</button>
        <p>or</p>
        <button className="sign-in-google">Sign in with google</button>
      </div>
    </div>
  );
}

export default Login;
