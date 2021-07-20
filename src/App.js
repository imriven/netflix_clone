import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup} from "./pages"

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
        <Browse />
        <Signin />
          <Signup/>
      </Route>
    </Router>
  );
}
