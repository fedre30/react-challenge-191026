import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ResetGlobalStyle } from "styles";
import { Home } from "views/home";
import { Profile } from "views/profile";
import { Header } from "styles/layout/header";

export const App = () => {
  return (
    <>
      <Header />
      <ResetGlobalStyle />
      <Router>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
