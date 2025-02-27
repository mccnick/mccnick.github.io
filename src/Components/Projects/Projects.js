import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blackbird from "../../Assets/Projects/blackbird.png";
import lighterthanair from "../../Assets/Projects/lighterthanair.png";
import bwaircraft from "../../Assets/Projects/bwaircraft.png";
import twentyfortyeight from "../../Assets/Projects/twentyfortyeight.png";
import falconnine from "../../Assets/Projects/falconnine.png";
import monalisa from "../../Assets/Projects/monalisa.png";
import killBill from "../../Assets/Projects/killBill.png";
import movieMagnet from "../../Assets/Projects/movieMagnet.png";
import musicMerch from "../../Assets/Projects/musicMerch.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="darker-spiritbox"> My Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicMerch}
              isBlog={false}
              title="Full-Stack Merchandise Website (COMS 319)"
              description="Solo-developed a full-stack music merchandise storefront using React, Node, Express and MySQL (SERN stack). The frontend was built with JavaScript, HTML and TailwindCSS. The backend uses Nodemon for real-time updates for changes with the backend/Node. I used Axios in the frontend to send API requests to the backend/Express and send responses from my database in MySQL for user CRUD operations. I earned an A (100%) in this course was commended by my Computer Science professor for my efforts and was invited to showcase my final project to the students the following semester (see Awards)."
              ghLink="https://github.com/mccnick/secoms319_final-project"
              demoLink="https://vimeo.com/895598404?share=copy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieMagnet}
              isBlog={false}
              title="Movie Magnet - Full-Stack Android App (COMS 309)"
              description="Led a team of four to create a full stack Java (Spring Boot) Android app that allows users to search for movies, view movie theatre details near them, and socialize with friends of similar interests and age/rating groups via Websockets and RESTful round-trip APIs. I was responsible for being team manager and developing the back-end logic, API calls, and database management. I earned an A (100%) in this course and won two awards: Best Manager, Best Coder (Top 1% - see Awards)"
              ghLink="https://github.com/mccnick/MovieMagnet"
              demoLink="https://drive.google.com/file/d/1y7Od1rRmp6tVQmu3a-cz0oVwLy3YiD5V/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={killBill}
              isBlog={false}
              title="KillBill - Open Source Contribution (CPRE 339)"
              description="Led a team of five to study the software architecture of this open-source project throughout most of the semester, and together we made open source PRs to improve the website. I made a contribution by refactoring account merging logic to improve modularity, maintainability, and adherence to SOLID principles. I encapsulated field updates, streamlined logic, and improved readability by separating concerns to reduce redundancy, and focused on Domain-Driven Design (DDD) without altering functionality. Click Demo to view our Google Slides presentation. I earned an A in this course for my work on the project and leading my team."
              ghLink="https://github.com/BoFromTheEast/killbillFork/pull/4"
              demoLink="https://docs.google.com/presentation/d/1lr8mrGfCe4XKxWKJJl7vx_Q9PzNns09ZmOMHFEWSusc/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twentyfortyeight}
              isBlog={false}
              title="2048 Java Game (COMS 227)"
              description="Created an interactive line game in Java for COMS 227 at Iowa State. I constructed the entire back-end logic, with saving and loading features. I scored 313/300 points, earned an A."
              ghLink="https://github.com/mccnick/COMS-227/tree/main/HW3/HW03/src/hw3"
              demoLink="https://user-images.githubusercontent.com/91184284/232322694-6c8ceb66-9118-4066-a43c-5214a4083cb1.gif"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monalisa}
              isBlog={false}
              title="Binary Tree Decoder (COMS 228)"
              description="Wrote a program in Java to decode an archived message and build a binary tree that prints the encoded characters, then prints the message and statistics in the console. Scored 111/100. Earned an A in my Data Structures class."
              ghLink="https://github.com/mccnick/COMS-228/tree/main"
              demoLink="https://user-images.githubusercontent.com/91184284/253412773-55e963c7-c444-4d03-bd7f-5c52fb59885c.gif"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={falconnine}
              isBlog={false}
              title="SpaceX Falcon 9 Launcher, Python (AERE 160)"
              description="Created a 2D SpaceX Falcon9 Rocket Launch program with Python and NumPy using real weight and physics to imitate a real rocket launch, Scored 95/100. Earned an A."
              ghLink="https://github.com/mccnick/AERE-160/blob/main/SpaceXRocketSimulation.py"
              demoLink="https://user-images.githubusercontent.com/91184284/232335618-21af470a-1634-4918-bc83-1c0c69ed4133.gif"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bwaircraft}
              isBlog={false}
              title="Density Altitude Calculator, MATLAB (AERE 161)"
              description="Developed an interactive software program using MATLAB and Python to calculate if a given aircraft was within weight and balance safe enough to fly. Also calculated the given density altitude using API from our local airport. All of this would be used in determining if the aircraft was safe to fly that day by the pilot. Scored perfect, A."
              ghLink="https://github.com/mccnick/DensityAltitudeCalculator/tree/main"
              demoLink="https://github.com/mccnick/DensityAltitudeCalculator/blob/main/Nick%20McCullough%20-%20Project%201.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackbird}
              isBlog={false}
              title="Lockheed SR-71A Blackbird - SolidWorks (AERE 161)"
              description="Led a team of four students to research, design and build a model of the SR-71A Blackbird in SolidWorks and present to the entire class. Earned perfect scoring as a leader/individual and on the project as a group, A."
              ghLink="https://github.com/mccnick/AERE-161/blob/main/Solidworks%20Final%20Project.pdf"
              demoLink="https://github.com/mccnick/AERE-161/blob/main/Final%20Presentation%20May%201.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lighterthanair}
              isBlog={false}
              title="Lighter Than Air - Flying Aircraft Build (AERE 160)"
              description="Led a team of seven students to build a wooden aircraft from scratch with limited supplies, artificial cost, servos, propellers and remote control to successfully fly, balance and rotate. Presented project design and plans to tenured professors and professionals from Collins Aerospace. Earned an A, scored 93/100."
              ghLink="https://github.com/mccnick/AERE-160/blob/main/annotated-LTA.pptx.pdf"
              demoLink="https://github.com/mccnick/AERE-160/blob/main/LTA%20pictures.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
