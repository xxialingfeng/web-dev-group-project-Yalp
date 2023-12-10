import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function NavigationBar() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.userReducer);
  const links = [
    { to: "/signin", label: "Signin" },
    { to: "/signup", label: "Signup" },
    { to: "/account", label: currentUser.username },
  ];
  const active = (path) => (pathname.includes(path) ? "active" : "");
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary "
    >
      <Container className="">
        <Navbar.Brand  as={Link} to="/home">Yalp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/login" className="float-end">
              Login
            </Nav.Link>
            <Nav.Link href="signup" className="float-end">
              SignUp
            </Nav.Link>
            {links.map((link) => (
      (link.label === "Signin" || link.label === "Signup") && currentUser !== null ? null : (
        (link.label === "Account" && currentUser === null) ? null : (
          <Nav.Link as={Link} to={link.to}>{link.label}</Nav.Link>
    ))
    ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
