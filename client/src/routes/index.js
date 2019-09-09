import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BaseStyles from "./base-styles";

import Home from "../views/home";

const Root = () => {
  return (
    <>
      <BaseStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default Root;
