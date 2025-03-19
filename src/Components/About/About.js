import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import profilepic from "../About/profilepic.png";
import oshKosh from "../About/oshKosh.jpeg"
import spiritbox from "../About/Spiritbox_Album_Cover.JPG"

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
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="darker-spiritbox">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
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
            style={{  margin: "0 auto", paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={spiritbox} alt="about" className="img-fluid" />
            <br />
            <p className="black">
            <br />
              <b> The color theme of my portfolio is inspired by this EP from my favorite band. </b> 
            
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
