import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./nav.css";

const NavBar = () => {
  return (
    <Navbar bg="transparent" expand="md" className="navbar">
      <Navbar.Brand>
        <Link to="/" className="nav-link">
          <h1 className="msg-title">msg board</h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto flex-column">
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/home">
              <span className="link-text">Home</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/notifications">
              <span className="link-text">Notifications</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/messages">
              <span className="link-text">Messages</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/profile">
              <span className="link-text">Favorites</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/logout">
              <span className="link-text">Logout</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


