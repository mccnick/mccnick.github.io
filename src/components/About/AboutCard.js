import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { ImSpotify } from "react-icons/im";
import { ImBook } from "react-icons/im";
import { ImSmile } from "react-icons/im";
import { ImTablet } from "react-icons/im";
import { ImAirplane } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImShield } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br /> I'm currently a rising Junior at Iowa State University
            majoring in Software Engineering and I am graduating in December 2025.
            <br />
      
        
            <br />

          Passions:
          </p>
          <ul>
            <li className="about-activity">
               Music
            </li>
            <li className="about-activity">
              Space / Rocketry
            </li>
            <li className="about-activity">
              Technology
            </li>
            <li className="about-activity">
              Sneakers
            </li>
            <li className="about-activity">
              Doggo
            </li>
          </ul>
          {/* <br />
          <br /> */}
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
