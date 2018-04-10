import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import LandingPage from "../components/LandingPage/LandingPage.component";

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
);

export default Root;
