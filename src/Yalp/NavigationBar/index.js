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
    { to: "/home", label: "Home" },
    { to: "/signin", label: "Signin" },
    { to: "/signup", label: "Signup" },
    { to: "/account", label: "Account" },
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
            {links.map((link) => (
      (link.label === "Signin" || link.label === "Signup") && currentUser !== null ? null : (
        (link.label === "Account" && currentUser === null) ? null : (
      <button
      key={link.to}
      className={`list-group-item ${active(link.to)} btn btn-danger button-margin` }
    >
      <Link to={link.to} style={{ textDecoration: 'none', color: 'inherit' }}>
        {link.label}
      </Link>
    </button>
    )
    )
    ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
