// import React from "react";
// import Card from "react-bootstrap/Card";

// function ExperienceCard(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="company-img" />
//       <Card.Body>
//         <Card.Title>{props.company}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           <strong>Position:</strong> {props.position}
          
//           <br />
//           <strong>Team:</strong> {props.team}
//           <br />
//           <strong>Duration:</strong> {props.duration}
        
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ExperienceCard;

// --------------------------------------------------------------
import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard({ imgPath, company, position, team }) {
  return (
    <Card className="experience-card-view">
      <div className="experience-logo-container">
        <Card.Img
          variant="top"
          src={imgPath}
          alt={`${company} logo`}
          className="experience-logo"
        />
      </div>
      <Card.Body>
        <Card.Title className="lighter-spiritbox">{company}</Card.Title>
        <Card.Text className="lighter-spiritbox">
          <strong>Position:</strong> {position}
          <br />
          <strong>Team:</strong> {team}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;