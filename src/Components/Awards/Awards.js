import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AwardsCards from "./AwardsCard";
import Particle from "../Particle";
import ArthurACollins from "./arthurACollins.png";
import JohnHoytChaloud from "./johnHoytChaloud.jpeg";
import Coms309Award from "./309award.png";
import Coms319Commendation from "./319commendation.jpeg";
import fall21deans from "./fall21deans.png";
import fall24deans from "./fall24deans.png";



function Awards() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="darker-spiritbox"> My Awards </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <AwardsCards
              imgPath={ArthurACollins}
              isBlog={false}
              title="Arthur A. Collins Engineering Leadership Award ($2,500)"
              description="I was awarded the Arthur A. Collins (Collins Aerospace) Engineering Leadership Award for my proven leadership skills and interest in the aerospace industry. I was the only recipient from the College of Electrical and Computer Engineering for this presitgious award."
              //awardLink="https://github.com/mccnick/COMS-227/tree/main/HW3/HW03/src/hw3"
              demoLink="https://iastate.academicworks.com/opportunities/50346"
            />
          </Col>

          <Col md={4} className="project-card">
            <AwardsCards
              imgPath={JohnHoytChaloud}
              isBlog={false}
              title="John Hoyt Chaloud Engineering Scholarship ($10,000)"
              description="I was awarded the John Hoyt Chaloud Engineering Scholarship for my academic excellence, leadership and service to the community. John was an ISU alumni and long-time Engineer and Manager at Proctor and Gamble."
              //awardLink="https://github.com/mccnick/COMS-228/tree/main"
              demoLink="https://iastate.academicworks.com/opportunities/60923"
            />
          </Col>

          <Col md={4} className="project-card">
            <AwardsCards
              imgPath={Coms309Award}
              isBlog={false}
              title="COMS 3090 - Multiple Award Recipient (Top 1%)"
              description="Recognized as one of only four students out of 600+ to receive multiple awards (Best Manager, Best Coder) for outstanding project performance in that semester. You can find more information on this project under my Projects tab, called Movie Magnet."
              //awardLink="https://github.com/mccnick/AERE-160/blob/main/SpaceXRocketSimulation.py"
              demoLink="https://drive.google.com/file/d/102cRfdgZHHX7RKtiBY2ifmtN_wIMyMYG/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <AwardsCards
              imgPath={Coms319Commendation}
              isBlog={false}
              title="COMS 3190 - Commendation"
              description="For my exceptional work in my Software User Interfaces (front-end) course, I was commended by my Computer Science professor for my work on the final project and was invited to showcase it to students the following semester. I earned a 100% grade in this course."
              //awardLink="https://github.com/mccnick/DensityAltitudeCalculator/tree/main"
              demoLink="https://media.licdn.com/dms/image/v2/D562DAQHqdC8eD0b9ew/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1702837068380?e=1741222800&v=beta&t=BQkcVC6B8xUdFx67fRo0o_JbhU7Wkiqk_2ZymGBabkE"
            />
          </Col>

          <Col md={4} className="project-card">
            <AwardsCards
              imgPath={fall24deans}
              isBlog={false}
              title="Engineering Dean's List - Fall 2024"
              description="Earned Dean's list honors for the Fall 2024 semester for my academic performance while working 20 hours per week at Collins Aerospace as a software engineer."
              //awardLink="https://github.com/mccnick/DensityAltitudeCalculator/tree/main"
                demoLink="https://www.registrar.iastate.edu/sites/default/files/uploads/info/DeansListF24_02072025.pdf"            />
          </Col>

          <Col md={4} className="project-card">
            <AwardsCards
              imgPath={fall21deans}
              isBlog={false}
              title="Engineering Dean's List - Fall 2021"
              description="Earned Dean's list honors for the Fall 2021 semester for my academic performance while working 40 hours per week 2nd shift."
              //awardLink="https://github.com/mccnick/DensityAltitudeCalculator/tree/main"
                demoLink="https://www.registrar.iastate.edu/sites/default/files/uploads/info/DeansListF21Updated418.pdf"            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Awards;
