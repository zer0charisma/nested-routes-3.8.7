import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import UserProfile from "./UserProfile";
import NoMatch from "./NoMatch";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoHomeButton from "./GoHomeButton";
import "./App.css";

function App() {
  return (
    <Router>
      <BackButton />
      <ForwardButton />
      <GoHomeButton />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users/:userId">
          <UserProfile />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
