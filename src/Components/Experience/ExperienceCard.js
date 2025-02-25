import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="company-img" />
      <Card.Body>
        <Card.Title>{props.company}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <strong>Position:</strong> {props.position}
          
          <br />
          <strong>Team:</strong> {props.team}
          <br />
          <strong>Duration:</strong> {props.duration}
        
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;