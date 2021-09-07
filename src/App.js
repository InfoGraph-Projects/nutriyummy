/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Internal Resources
import "./App.css";
import { AuthContext } from "./context/authContext";

// Internal Resources - Components
import Header from "./components/Header/Header";
import Navigation from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import RegisterAdmin from './components/RegisterAdmin/RegisterAdmin';
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Admin from './components/Admin/Admin';

// 3rd Party UI Resources
import { Container} from "react-bootstrap";

// App Component
export default function App() {
  const context = useContext(AuthContext);
  return (
    <React.Fragment>
      <div  style={{ backgroundImage: "url(/assets/background.jpg)", height:'100vh'}}>
        <Header />
        <Router>
        <Container style={{ maxWidth: "960px" }}>
              <Navigation />
        </Container>
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
            <Route exact path="/register-admin">
              <RegisterAdmin />
            </Route>
            <Route exact path="/profile">
              {!context.user? <Redirect to='/'/> : context.user.user?.role === "admin" ?  <Admin /> : <Profile />}
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}
