/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Navigation - Component
export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ width: "100px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title={
                <span>
                  Home <i class="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>Lorem ipsum</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>About</Nav.Link>
            <NavDropdown
              title={
                <span>
                  Shop <i class="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>Lorem ipsum</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  Pages <i class="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/">Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/login">Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <link to="/register">Register</link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/profile">Profile</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  Portfolio <i class="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>Lorem ipsum</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  News <i class="fas fa-plus"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>Lorem ipsum</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div>
          <i class="far fa-heart"></i>
          <i class="fas fa-shopping-cart"></i>
          <i class="fas fa-search"></i>
          <Link to="/login">
            <i class="fas fa-sign-in-alt"></i>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}
