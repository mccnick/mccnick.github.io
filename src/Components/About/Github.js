import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Nick's <strong className="lighter-spiritbox">GitHub</strong> commits:
      </h1>
      <GitHubCalendar
        username="mccnick"
        blockSize={15}
        blockMargin={5}
        color="#6f477e"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
