import johndeereLogo from "./johndeere.jpg";
import collinsLogo from "./collinsaero.jpg";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";



function Experience() {
  return (
    <Container fluid className="experience-section project-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          <strong className="darker-spiritbox">
            Professional Software Engineering Experience:
          </strong>
          <br />
          <small style={{ fontSize: "0.90rem" }}>
            *Collins Aerospace is a subsidiary of RTX Corporation (Raytheon
            Technologies)
          </small>
        </h1>

        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col className="experience-card">
            <ExperienceCard
              imgPath={collinsLogo}
              company="Collins Aerospace / RTX"
              position="Software Engineer Intern"
              duration="Summer 2025"
              team="Military Avionics Performance Software"
            />
          </Col>

          <Col className="experience-card">
            <ExperienceCard
              imgPath={collinsLogo}
              company="Collins Aerospace / RTX"
              position="Software Engineer, Part-Time during my senior year"
              duration="Aug 2024 - Apr 2025"
              team="Military Avionics & Helicopter Engineering"
            />
          </Col>

          <Col className="experience-card">
            <ExperienceCard
              imgPath={collinsLogo}
              company="Collins Aerospace / RTX"
              position="Software Engineer Co-Op"
              duration="Jan 2024 - August 2024"
              team="Military Avionics Navigation & Guidance Software"
            />
          </Col>

          <Col className="experience-card">
            <ExperienceCard
              imgPath={johndeereLogo}
              company="John Deere"
              position="Software Engineer Intern"
              duration="July 2022 - Apr 2023"
              team="Baler Product Engineering Team"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;