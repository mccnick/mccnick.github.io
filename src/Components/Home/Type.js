import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hello :) Let's chat.",
          "These are my favorite",
          "music albums & EPs.",
          "I wanted to combine",
          "my passion for music",
          "and outer space, with",
          "software engineering.",
          "This rotating cube",
          "is actually a tesseract",
          "built with Three.js :)",
          "Zoom in to see",
          "Click & Drag to rotate",
          "The doggo's name is",
          "Ollie :)",
          "Feel free to explore.",
          "Thanks for visiting!",
          "Restarting in..",
          "3",
          "2",
          "1",
        ],
        autoStart: true,
        loop: true,
        typingSpeed: 65,
        deleteSpeed: 55,
      }}
    />
  );
}

export default Type;
