// typeAbout.js
import React from "react";
import Typewriter from "typewriter-effect";

function Type2() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Aerospace Enthusiast",
          "Problem Solver",
          "Constant Learner",
          "Team Leader",
          "Music Enjoyer",
          "Doggo Lover",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 55,
      }}
    />
  );
}

export default Type2;
