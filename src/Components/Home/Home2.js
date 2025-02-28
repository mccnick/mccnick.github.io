import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import isuImage from "../../Assets/Iowa_State_University_seal.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Container className="d-flex justify-content-center align-items-center w-100">
          <Row className="d-flex justify-content-center w-100">
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center myAvtar"
            >
              <Tilt>
                <a
                  href="https://se.iastate.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={isuImage}
                    className="img-fluid custom-img"
                    alt="avatar"
                    style={{ width: "300px", height: "auto" }} // Adjust the width
                  />
                </a>
              </Tilt>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Follow/Contact me!</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mccnick"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mccnick/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:nick@nickmcc.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
