/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Internal Resources
import "./App.css";

// Internal Resources - Components
import Header from "./components/Header/Header";
import Navigation from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

// App Component
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
