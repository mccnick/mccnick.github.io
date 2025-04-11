import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <div style={{ width: "60%", whiteSpace: "normal", wordWrap: "break-word" }}>
      <Typewriter
        options={{
          strings: [
            "Hello :) Let's chat.",
            "These are my favorite music albums & EPs.",
            "I wanted to combine my passion for music...",
            "and outer space, with software engineering.",
            "This rotating cube is actually a tesseract...",
            "built with Three.js :)",
            "To the left of this text: Click & Drag to rotate, Zoom in to see inside.",
            "The doggo's name is Ollie :)",
            "Feel free to explore. Thanks for visiting!",
            "Restarting in...",
            "3",
            "2",
            "1",
          ],
          autoStart: true,
          loop: true,
          delay: 65,
          deleteSpeed: 55,
        }}
      />
    </div>
  );
}

export default TypeWriter;
