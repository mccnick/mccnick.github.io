import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Particle from "../Particle";
import emailjs from "@emailjs/browser"; // EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send function
    emailjs
      .send(
        "service_ccz3ksd", // EmailJS Service ID
        "template_q97o1yr", // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "sx1fYbntoLY6yOQmN" // EmailJS Public Key
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent to Nick!",
            icon: "success",
            confirmButtonColor: "#6f477e",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to send your message. Please try again later.",
            icon: "error",
            confirmButtonColor: "#6f477e",
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container className="contact-container">
        <h1 className="project-heading">
          <strong className="darker-spiritbox">Contact Me</strong>
        </h1>
        <p className="lighter-spiritbox">
          If you would like to get in touch with Nick, please reach out below!
        </p>
        <div className="contact-card-view">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="custom-input"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="custom-input"
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                className="custom-input"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </div>
      </Container>
    </Container>
  );
}

export default Contact;
