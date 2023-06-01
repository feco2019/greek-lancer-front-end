import React, { useState } from "react";
import { Form, Button, Card, Image, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png.png";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:1337/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration successful:", data);
        setShowModal(true);
        setTimeout(() => {
          navigate.push("/dashboard"); // Replace "/dashboard" with your desired redirection path
        }, 3000);
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <Card
        style={{ width: "400px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        <Card.Body>
          <div className="text-center">
            <Image
              src={logo}
              alt="greek-lancer"
              roundedCircle
              style={{ width: "100px" }}
            />
            <h3>Registration Form</h3>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="phone_number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <div className="text-center">
            <Button
              className="text-center"
              variant="primary"
              type="submit"
              block="true"
            >
              Register
            </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your registration was successful!</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Registration;
