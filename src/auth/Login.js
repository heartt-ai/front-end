import React from "react";
import GoogleLogin from "react-google-login";
import "../styles/auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      class="section section--content"
      id="content"
      style={{ background: "#4285f4", height: "1007px" }}
    >
      <div class="grid grid--margin">
        <div class="form">
          <div class="form-panel one">
            <div class="form-header">
              <h1>Account Login</h1>
            </div>
            <div class="form-content">
              <form>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <label class="form-remember">
                    <input type="checkbox" />
                    Remember Me
                  </label>
                  <a class="form-recovery">Forgot Password?</a>
                </div>
                <Link to="/dashboard" style={{ padding: "1px" }}>
                  <div class="form-group">
                    <button type="submit">Log In</button>
                  </div>
                </Link>
                <Link to="/register" style={{ padding: "1px" }}>
                  <div class="grey-group">
                    <button type="submit">Sign up</button>
                  </div>
                </Link>
                <GoogleLogin
                  clientId=""
                  buttonText="Login with Google"
                  theme="dark"
                  className="login"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
