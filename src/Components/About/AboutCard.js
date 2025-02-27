import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
// import { ImSpotify } from "react-icons/im";
// import { ImBook } from "react-icons/im";
// import { ImSmile } from "react-icons/im";
// import { ImAirplane } from "react-icons/im";
// import { ImYoutube } from "react-icons/im";
// import { ImShield } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br /> I'm currently a rising Senior at Iowa State University
            majoring in Software Engineering, graduating in December 2025. My
            first year at Iowa State I majored in Aerospace Engineering, and
            enjoyed the programming projects so much I made the switch to
            Software Engineering.
            <br />
            <br />
            I pride myself on leading teams and engineering projects, and have
            led every team I have been a part of during my undergraduate career.
            Each team I have been on has been successful. I always choose the
            leadership/team manager role to enable my teams to be efficient
            through highly effective communication, planning and time management
            to stay on track and meet deadlines.
            <br />
            <br />
            I am proficient with many technologies, but a few I enjoy and am
            most experienced with are: Python, Java, JavaScript/React, and C. I
            enjoy solving problems, helping people and making cool stuff ☺
            <br />
            <br />
            
          </p>
          
          <br />
          <br />
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Do not go gentle into that good night"{" "}
          </p>
          <footer className="blockquote-footer">
            Dylan Thomas; Interstellar
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
