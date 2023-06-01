import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png.png';

const Home = () => {
  return (
    <div className="landing-page">
      <Container className="text-center">
        <img style={{width:'200px'}} src={logo} alt="Greeklancers Logo" className="logo" />
        <h1>Welcome to Greeklancers</h1>
        <p>We are a professional freelance platform connecting employers and talented freelancers.</p>
        <div className="cta-buttons">
        <Link to="/registration" className="btn btn-primary btn-lg mr-3">Register</Link>
        <Link to="/login" className="btn btn-outline-primary btn-lg">Login</Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;