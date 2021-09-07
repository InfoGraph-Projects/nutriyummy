/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import { React } from "react";

// 3rd Party UI Resources
import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col } from "react-bootstrap";

// Header - Component
export default function Header() {
  return (
    <div style={{ backgroundColor: "#7FBB3A" }}>
      <Navbar
        style={{ backgroundColor: "#7FBB3A", width: "960px", margin: "auto" }}
      >
        <Container>
          <Row style={{ width: "100%", alignItems: "center", color: "white" }}>
            <Col xs={8}>
              <i style={{ padding: "0 1rem" }} className="fas fa-phone-alt">
                {" "}
                +90 185 588 7894
              </i>
              <span style={{ padding: "0 1rem" }}>|</span>
              <i style={{ padding: "0 1rem" }} className="fas fa-map-marker-alt">
                {" "}
                Maromora Road, Washington, USA{" "}
              </i>
            </Col>
            <Col>
              <button
                className="btnOrange"
                style={{
                  backgroundImage: "url(/assets/orangeColor.png)",
                  float: "right",
                }}
              >
                Get Started
              </button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}
