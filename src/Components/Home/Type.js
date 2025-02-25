import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Aerospace Enthusiast",
          "Problem Solver",
          "Constant Learner",
          "Doggo Lover",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,

        
      }}
    />
  );
}



export default Type;
