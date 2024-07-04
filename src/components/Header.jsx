import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../assets/logo.jpg'; 

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="Habot Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="#find-suppliers">Find Suppliers</Nav.Link>
            <NavDropdown title="Find Service Tags" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-success">Login / Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
