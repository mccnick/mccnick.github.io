// import johndeereLogo from "./johndeere.jpg";
// import collinsLogo from "./collinsaero.jpg";

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ExperienceCard from "./ExperienceCard";
// import Particle from "../Particle";



// function Experience() {
//   return (
//     <Container fluid className="experience-section project-section">
//       <Particle />
//       <Container>
//         <h1 className="experience-heading">
//           <strong className="darker-spiritbox">
//             Professional Software Engineering Experience
//           </strong>
//           <br></br><br></br>
//           <small style={{ fontSize: "0.90rem" }}>
//             <p className="lighter-spiritbox">To support myself during my ISU undergraduate studies, I worked at
//             least 20 hours per week in all but two semesters.
//             <br></br>
//             <br></br>
//             In three semesters, I balanced a full-time course load while working
//             40 hours per week.</p>
//           </small>
//         </h1>

//         <Row className="row-cols-1 row-cols-md-2 g-4">
//           <Col className="experience-card">
//             <ExperienceCard
//               imgPath={collinsLogo}
//               company="Collins Aerospace / RTX"
//               position="Software Engineer Intern"
//               duration="Summer 2025"
//               team="Military Avionics Performance Software"
//             />
//           </Col>

//           <Col className="experience-card">
//             <ExperienceCard
//               imgPath={collinsLogo}
//               company="Collins Aerospace / RTX"
//               position="Software Engineer, Part-Time during my senior year"
//               duration="Aug 2024 - Apr 2025"
//               team="Military Avionics & Helicopter Engineering"
//             />
//           </Col>

//           <Col className="experience-card">
//             <ExperienceCard
//               imgPath={collinsLogo}
//               company="Collins Aerospace / RTX"
//               position="Software Engineer Co-Op"
//               duration="Jan 2024 - August 2024"
//               team="Military Avionics Navigation & Guidance Software"
//             />
//           </Col>

//           <Col className="experience-card">
//             <ExperienceCard
//               imgPath={johndeereLogo}
//               company="John Deere"
//               position="Software Engineer Intern"
//               duration="July 2022 - Apr 2023"
//               team="Baler Product Engineering Team"
//             />
//           </Col>
//         </Row>
//         <br></br><br></br>
//         <strong className="lighter-spiritbox"> <small style={{ fontSize: "0.90rem" }}>
//           *Collins Aerospace is a subsidiary of RTX Corporation (Raytheon
//           Technologies)
//         </small> </strong>
//       </Container>
//     </Container>
//   );
// }

// export default Experience;


// --------------------------------------------------------------

import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ExperienceCard from "./ExperienceCard";
import collinsLogo from "./collinsaero.jpg";
import johndeereLogo from "./johndeere.jpg";

// Experience Data
const experiences = [
  {
    id: 1,
    imgPath: collinsLogo,
    company: "Collins Aerospace / RTX",
    position: "Software Engineer Intern",
    duration: "Summer 2025",
    team: "Military Avionics Performance Software",
  },
  {
    id: 2,
    imgPath: collinsLogo,
    company: "Collins Aerospace / RTX",
    position: "Software Engineer, Part-Time senior year",
    duration: "Aug 2024 - Apr 2025",
    team: "Military Avionics & Helicopter Engineering",
  },
  {
    id: 3,
    imgPath: collinsLogo,
    company: "Collins Aerospace / RTX",
    position: "Software Engineer Co-Op",
    duration: "Jan 2024 - August 2024",
    team: "Military Avionics Navigation Software",
  },
  {
    id: 4,
    imgPath: johndeereLogo,
    company: "John Deere",
    position: "Software Engineer Intern",
    duration: "July 2022 - Apr 2023",
    team: "Baler Product Engineering Team",
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section project-section">
      <Particle />
      <Container>
        <h1 className="experience-heading lighter-spiritbox">
          <strong className="darker-spiritbox">
            Professional Software Engineering Experience
          </strong>
          <br />
          <br />
          <small style={{ fontSize: "0.90rem" }}>
            <p className="lighter-spiritbox">
              To support myself during my ISU undergraduate studies, I worked at
              least 20 hours per week in all but two semesters.
              <br />
              <br />
              In three semesters, I balanced a full-time course load while
              working 40 hours per week.
            </p>
          </small>
        </h1>

        {/* Vertical Timeline */}
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={exp.id}
              date={
                <div className="timeline-date-container">
                  <span className="timeline-date lighter-spiritbox">
                    {exp.duration}
                  </span>
                  <div className="timeline-date-line"></div>
                  {/* Add this line */}
                </div>
              }
              iconStyle={{ background: "#563e5f", color: "#fff" }}
              position={index % 2 === 0 ? "left" : "right"}
            >
              <ExperienceCard {...exp} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <br />
        <br />
        <strong className="lighter-spiritbox">
          <small style={{ fontSize: "0.90rem" }}>
            *Collins Aerospace is a subsidiary of RTX Corporation (Raytheon
            Technologies)
          </small>
        </strong>
      </Container>
    </Container>
  );
}

export default Experience;