/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React from "react";
import { Link } from "react-router-dom";

// 3rd Party UI Resources
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Internal Resources
import "./nav.css";

// Navigation - Component
export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ width: "100px" }}
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "space-around" }}
        >
          <Nav className="me-auto">
            <NavDropdown
              title={
                <span style={{ color: "#0A014F", fontWeight: "700" }}>
                  Home <i style={{ color: "green" }} className="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>Lorem ipsum</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ color: "#0A014F", fontWeight: "700" }}>
              About
            </Nav.Link>
            <NavDropdown
              title={
                <span style={{ color: "#0A014F", fontWeight: "700" }}>
                  Shop <i style={{ color: "green" }} className="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>Lorem ipsum</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span style={{ color: "#0A014F", fontWeight: "700" }}>
                  Pages <i style={{ color: "green" }} className="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link style={{ color: "black" }} to="/">
                  Home
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black" }} to="/login">
                  Login
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black" }} to="/register">
                  Register
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black" }} to="/profile">
                  Profile
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span style={{ color: "#0A014F", fontWeight: "700" }}>
                  Portfolio{" "}
                  <i style={{ color: "green" }} className="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>Lorem ipsum</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span style={{ color: "#0A014F", fontWeight: "700" }}>
                  News <i style={{ color: "green" }} className="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>Lorem ipsum</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: " 20%",
            alignItems: "center",
          }}
        >
          <i className="far fa-heart"></i>
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-search"></i>
          <Link to="/login" style={{ color: "black" }}>
            <i className="fas fa-sign-in-alt"></i>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}
