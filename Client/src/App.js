import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../src/views/home";
import { Form } from "../src/views/form";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
