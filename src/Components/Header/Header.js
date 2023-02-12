import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>React Query Tutorial Demo File</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/traditional-fetch"}>Traditional Fetching</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/rq-fetch"}>RQ Fetching</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/axiosfetch"}>Axios Fetching</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
