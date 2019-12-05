import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ResetGlobalStyle } from "styles";
import { Home } from "views/home";
import { Profile } from "views/profile";
import { List } from "views/list";
import { Login } from "views/login";

export const App = () => {
  return (
    <>
      <ResetGlobalStyle />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
