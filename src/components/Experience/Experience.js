import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import johndeere from "../../Assets/Experience/johndeere.png"; 
import wellsfargo from "../../Assets/Experience/wellsfargo.png"; 
import tfs from "../../Assets/Experience/tfs.png"; 
import collinsaerospace from "../../Assets/Experience/collinsaerospace.jpg"; 

function Experience() {
  return (
    <Container fluid className="experience-section project-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col className="experience-card">
            <ExperienceCard
              imgPath={collinsaerospace}
              company="Collins Aerospace"
              position="Software Engineer | Co-Op"
              duration="Jan 2024 - August 2024"
            />
          </Col>

          <Col className="experience-card">
            <ExperienceCard
              imgPath={johndeere}
              company="John Deere"
              position="Software Engineer | Intern"
              duration="July 2022 - Apr 2023"
            />
          </Col>

          <Col className="experience-card">
            <ExperienceCard
              imgPath={wellsfargo}
              company="Wells Fargo"
              position="Senior Finance Specialist"
              duration="July 2020 - May 2022"
            />
          </Col>

          <Col className="experience-card">
            <ExperienceCard
              imgPath={tfs}
              company="Toyota Financial Services"
              position="Finance Specialist"
              duration="Feb 2013 - Dec 2019"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
