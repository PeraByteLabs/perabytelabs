import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = ({ handlePageChange }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" onClick={() => handlePageChange('home')}>Perabyte Labs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" onClick={() => handlePageChange('home')}>Home</Nav.Link>
          <Nav.Link href="#" onClick={() => handlePageChange('skills')}>Core Skills</Nav.Link>
          <Nav.Link href="#" onClick={() => handlePageChange('games')}>Games</Nav.Link>
          <Nav.Link href="#" onClick={() => handlePageChange('books')}>Books</Nav.Link>
          <Nav.Link href="#" onClick={() => handlePageChange('resources')}>Parent Resources</Nav.Link>
          <Nav.Link href="#" onClick={() => handlePageChange('contact')}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
