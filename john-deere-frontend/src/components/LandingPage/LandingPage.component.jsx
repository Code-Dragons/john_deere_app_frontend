import React from "react";
import "./LandingPage.css";
import { Link, Route, Switch } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="header-top-content">
            <div className="header-top-content-login">
              <h2>
                <Link to="/signin" style={{ textDecoration: "none" }}>
                  LOGIN
                </Link>
              </h2>
            </div>
            <h2>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                REGISTER
              </Link>
            </h2>
          </div>
          <div className="header-center-content">
            <p>
              A BETTER WAY TO GO ABOUT YOUR FARMING ACTIVITIES. <br />OWN A
              TRACTOR INDIVIDUALLY OR AS A GROUP
            </p>
            <div className="header-button">GET STARTED</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
