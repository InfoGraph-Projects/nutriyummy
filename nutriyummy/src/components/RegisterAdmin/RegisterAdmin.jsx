/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React, { useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";

// 3rd Party UI Resources
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

// Internal Resources
import "../Login/login.css";

// RegisterAdmin Component
export default function RegisterAdmin() {
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Function to hit the signup endpoint
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        password: password.current.value,
        role: "admin",
      };
      try {
        await axios.post(
          "https://nutriyummy-backend.herokuapp.com/signup",
          user
        );
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <React.Fragment>
      <Container className="login">
        <img src="/assets/logo.png" alt="logo" style={{ width: "100px" }} />
        <br />
        <h5>Register Page Admin Version</h5>
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
              type="new-password"
              ref={password}
              placeholder="Password"
            />
            <Form.Label>Password Again</Form.Label>
            <Form.Control
              type="current-password"
              ref={passwordAgain}
              placeholder="Password Again"
            />
          </Form.Group>
          <div className="btn">
            <Button variant="success" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </Container>
    </React.Fragment>
  );
}
