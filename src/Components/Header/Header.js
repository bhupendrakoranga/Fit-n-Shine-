import { Link } from 'react-router-dom';
import React, { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logoImg from '../../images/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="md">
        <Container>
          <Link to="/home">
            {' '}
            <Navbar.Brand href="#home">
              <img src={logoImg} alt="nav-logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" >Yoga</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Fitness
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Beauty
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Hair
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Spa
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Nails
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  Dental
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link exact href="/booking">
                Bookings
              </Nav.Link>
              <Nav.Link href="/available">Membership</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
