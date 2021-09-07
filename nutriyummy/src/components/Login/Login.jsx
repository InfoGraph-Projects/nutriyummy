/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

// 3rd Party UI Resources
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

// Internal Resources
import "./login.css";
import { AuthContext } from "../../context/authContext";

// Login - Component
export default function Login() {
  const context = useContext(AuthContext);
  const username = useRef();
  const password = useRef();
  const history = useHistory();

  // Function to hit the signin endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://nutriyummy-backend.herokuapp.com/signin",
      {},
      {
        auth: {
          username: username.current.value,
          password: password.current.value,
        },
      }
    );

    context.setUser(res.data);
    history.push("/profile");
  };
  return (
    <React.Fragment>
      <Container className="login">
        <img src="/assets/logo.png" alt="logo" style={{ width: "100px" }} />
        <br />
        <h5>Login Page</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            style={{ padding: "0 1rem" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              ref={username}
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group
            style={{ padding: "0 1rem" }}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="current-password"
              ref={password}
              placeholder="Password"
            />
          </Form.Group>
          <div className="btn">
            <Button variant="success" type="submit">
              Login
            </Button>
            <Button variant="success">
              {" "}
              <Link to="/register">Register Now ?</Link>
            </Button>
          </div>
        </Form>
      </Container>
    </React.Fragment>
  );
}
