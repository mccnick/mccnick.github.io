import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import TypeWriter from "./TypeWriter";
import profilePic from "../Home/profilepic.png";
import Tesseract from "../Tesseract/Tesseract"; // Import the fixed Tesseract component

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Tesseract /> {/* Renders behind the main content */}
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to my{" "}
                <strong className="darker-spiritbox"> React </strong>Portfolio!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="lighter-spiritbox"> Nick McCullough.</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypeWriter/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 100 }}>
              <img
                src={profilePic}
                alt="me and my doggo"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  float: "right",
                  paddingRight: "20px",
                  marginTop: "60px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
