import React from "react";
import { Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Container className="d-flex justify-content-center" style={{width: "100vw"}}>
    <Nav variant="underline">
      <Nav.Item style={{marginLeft: "0.5em", marginRight: "2em"}}>
        <Nav.Link as={NavLink} to="/timeline" className="nav-link mml-nav">
          Timeline
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{marginRight: "2em"}}>
        <Nav.Link as={NavLink} to="/today" className="nav-link mml-nav">
          Today
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{marginLeft: "0.5em"}}>
        <Nav.Link as={NavLink} to="/inner-support" className="nav-link mml-nav">
          MyWisdom
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
  );
}

export default NavBar;
