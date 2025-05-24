import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Chat() {
  return (
    <Container>
      <Particle />
      <Container className="chat-container">
        <h1>Chat</h1>
        <p>Chat with me here!</p>
        {/* Add your chat component or functionality here */}
        {/*
        
        NICK NOTE: 
        to add chat back to navbar, uncomment from these files: Navbar.js and App.js 
        
        */}
      </Container>
    </Container>
  );
}
export default Chat;