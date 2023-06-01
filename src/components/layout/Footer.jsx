import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-auto py-3">
      <Container>
        <p className="text-center">© {new Date().getFullYear()} Greek Lancer. All rights reserved. Web Infamous</p>
      </Container>
    </footer>
  );
};

export default Footer;