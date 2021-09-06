/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Internal Resources
import "./home.css";

// Home - Component
export default function Home() {
  return (
    <React.Fragment>
      <div>
        <Container>
          <Row>
            <Col>
              <img src="/assets/vegetable.png" alt="vegetable" />
            </Col>
            <Col>
              <h1>
                Fresh & Healthy <br /> Organic Vegetables
              </h1>
              <p>
                Our store offers you always fresh vegetables all year, Buy from
                a wide range of high quality organic vegetables.
              </p>
              <div>
                <button className="btnOrange">Shop Now</button>
                <button className="btnGreen">Our Services</button>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
