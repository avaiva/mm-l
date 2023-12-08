import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Nav variant="underline">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/timeline" activeClassName="active">
          Timeline
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/today" activeClassName="active">
          Today
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/inner-support" activeClassName="active">
          Inner-Support
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
