/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React from "react";

// 3rd Party UI Resources
import { Container, Row, Col } from "react-bootstrap";

// Internal Resources
import "./home.css";

// Home - Component
export default function Home() {
  return (
    <React.Fragment>
      <div style={{ height: "77%" }}>
        <Container style={{ maxWidth: "100%" }}>
          <Row>
            <Col>
              {" "}
              <img src="/assets/vegetable.png" alt="vegetable" />
            </Col>
            <Col xs={5} style={{ padding: "2.5rem 0", textAlign: "justify" }}>
              <h1 style={{ padding: "1rem 0", color: "#0A014F" }}>
                Fresh & Healthy <br /> Organic Vegetables
              </h1>
              <p style={{ padding: "1rem 0" }}>
                {" "}
                Our store offers you always fresh vegetables all year, Buy from
                a wide range of high quality organic vegetables.
              </p>
              <div
                style={{
                  padding: "1rem 0",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "59%",
                }}
              >
                <button
                  className="btnOrange"
                  style={{ backgroundImage: "url(/assets/orangeColor.png)" }}
                >
                  Shop Now
                </button>
                <button
                  className="btnGreen"
                  style={{ backgroundImage: "url(/assets/greenColor.png)" }}
                >
                  Our Services
                </button>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
