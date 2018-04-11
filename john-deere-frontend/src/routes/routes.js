import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import LandingPage from "../components/LandingPage/LandingPage.component";
import SignIn from "../components/SignIn/SignIn.component";
import SignUp from "../components/SignUp/SignUp.component";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </Router>
);

export default Root;
