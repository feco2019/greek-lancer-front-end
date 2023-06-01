import React, { useState } from "react";
import { Form, Button, Card, Image, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform API call to authenticate the login data
    // ...

    // Example code to show modal and redirect
    setShowModal(true);
    setTimeout(() => {
      navigate("/dashboard"); // Replace "/dashboard" with your desired redirection path
    }, 3000);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "400px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
        <Card.Body>
          <div className="text-center">
            <Image src={logo} alt="Greeklancers Logo" roundedCircle style={{ width: "100px" }} />
            <h3>Login</h3>
          </div>
          <Form onSubmit={handleSubmit}>
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
            <Button  variant="primary" type="submit" block>
              Login
            </Button>
            </div>
          </Form>

          <p className="mt-3">
            Don't have an account? <Link to="/registration">Register here</Link>
          </p>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have been successfully logged in!</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
