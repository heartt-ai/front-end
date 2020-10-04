import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import "../styles/auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  //   const [location, setLocation] = useState("Dog");  set a variable that has "Dog" in it
  return (
    <div
      class="section section--content"
      id="content"
      style={{ background: "#4285f4", height: "1007px" }}
    >
      <div class="form">
        <div class="form-panel one">
          <div class="form-header">
            <h1>Register an Account</h1>
          </div>
          <div class="form-content">
            <form>
              {/* <h1>{location}</h1> auto updates when the dog variable is changed*/}
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required="required"
                  //   onChange={(event) => setLocation(event.target.value)} change the variable that has "Dog" in it to something else
                />
              </div>
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
                <label for="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
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
                  <button type="submit">Sign Up</button>
                </div>
              </Link>
              <Link to="/login" style={{ padding: "1px" }}>
                <div class="grey-group">
                  <button type="submit">login</button>
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
  );
}
