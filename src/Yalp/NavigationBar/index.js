import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary "
    >
      <Container className="">
        <Navbar.Brand href="home">Yalp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="search">Search</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="login" className="float-end">
              Login
            </Nav.Link>
            <Nav.Link href="signup" className="float-end">
              SignUp
            </Nav.Link>
            <Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
