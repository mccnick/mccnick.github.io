import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profilepic from "../About/profilepic.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img">
            <img src={profilepic} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <br />


        <br />

        <h1 className="project-heading">
          Technical <strong className="purple"> Skills </strong>
        </h1>

        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
