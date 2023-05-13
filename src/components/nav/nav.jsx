import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBell, faMessage, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./nav.css";

const NavBar = () => {
  return (
    <Navbar bg="transparent" expand="md" className="navbar">
      <Navbar.Brand>
        <Link to="/" className="nav-link">
          <h1 className="title">msg board</h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column text-left">
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/home">
              <FontAwesomeIcon className="home-icon" icon={faHouse} />
              <span className="link-text">Home</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/notifications">
              <FontAwesomeIcon icon={faBell} />
              <span className="link-text">Notifications</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/messages">
              <FontAwesomeIcon icon={faMessage} />
              <span className="link-text">Messages</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/profile">
              <FontAwesomeIcon icon={faHeart} />
              <span className="link-text">Favorites</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link as={Link} to="/msg">
            <FontAwesomeIcon icon={faCheck} />
              <span className="link-text">Logout</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

