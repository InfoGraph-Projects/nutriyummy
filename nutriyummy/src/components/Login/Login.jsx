/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

// Login - Component
export default function Login() {

  const username = useRef();
  const password = useRef();
  const history = useHistory();
  };

  return (
    <React.Fragment>
      <Container className="login">
        <img src="/assets/logo.png" alt="logo" style={{ width: "100px" }} />
        <br />
        <h5>Login Page</h5>
        <Form>
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
              type="password"
              ref={password}
              placeholder="Password"
            />
          </Form.Group>
          <div className="btn">
            <Button variant="success" type="submit">
              Login
            </Button>
            <Button variant="success">
              <Link to="/register">Register Now ?</Link>
            </Button>
          </div>
        </Form>
      </Container>
    </React.Fragment>
  );
}
