/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import { React } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col } from "react-bootstrap";

// Header - Component
export default function Header() {
  return (
    <div>
      <Navbar>
        <Container>
          <Row>
            <Col xs={8}>
              <i class="fas fa-phone-alt"> +90 185 588 7894</i>
              <span>|</span>
              <i class="fas fa-map-marker-alt">
                Maromora Road, Washington, USA
              </i>
            </Col>
            <Col>
              <button className="btnOrange">Get Started</button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}
