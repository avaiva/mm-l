import React from "react";
import { Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Nav variant="underline">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/timeline" className="nav-link mml-nav">
          Timeline
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/today" className="nav-link mml-nav">
          Today
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/inner-support" className="nav-link mml-nav">
          InnerSupport
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
