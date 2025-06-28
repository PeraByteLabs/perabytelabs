import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = ({ handlePageChange }) => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" onClick={() => handlePageChange('home')} className="fw-bold">
          <img
            src="/logo.png" // Assuming logo.png is in the public folder
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Perabyte Labs Logo"
          />
          PeraByte Labs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handlePageChange('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('skills')}>Core Skills</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('games')}>Games</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('books')}>Books</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('resources')}>Parent Resources</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;