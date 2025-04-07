// About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import oshKosh from "../About/oshKosh.jpeg";
import spiritbox from "../About/Spiritbox_Album_Cover.JPG";
//import Tesseract from "../Tesseract/Tesseract";
import Type from "./typeAbout"; // Import the Type component

function About() {
  return (
    <Container fluid className="about-section position-relative">
      <div className="tesseract-container"></div>
      <Particle />

      <Container className="about-content position-relative">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <div className="text-center p-4">
            <Type />
          </div>

          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="darker-spiritbox">About Me</strong>
            </h1>
            {/* Add the type functionality here */}

            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img about-content"
          >
            <img src={oshKosh} alt="about" className="img-fluid" />
            <p className="black">
              <b> Fun Fact:</b> My nav software was on both of these
              helicopters.
            </p>
          </Col>
        </Row>

        <Col
          md={6}
          style={{
            margin: "0 auto",
            paddingTop: "120px",
            paddingBottom: "50px",
          }}
          className="about-img"
        >
          <img src={spiritbox} alt="about" className="img-fluid" />
          <br />
          <p className="black">
            <br />
            <b>
              The color theme of my portfolio is inspired by this EP from my
              favorite band.
            </b>
          </p>
        </Col>

        <h1 className="project-heading">
          Technical <strong className="lighter-spiritbox"> Skills </strong>
        </h1>

        <Techstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
