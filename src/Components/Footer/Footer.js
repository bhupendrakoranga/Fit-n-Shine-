import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import faceBook from '../../images/icon-facebook.svg';
import instaGram from '../../images/icon-intagram.svg';
import twitTer from '../../images/icon-twitter.svg';
import linkdIn from '../../images/icon-linkedin.svg';
import youTube from '../../images/icon-youtube.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-nav d-md-flex align-items-center justify-content-between">
          <Nav.Link to="#" className="footer-brand">
            FitnShine
          </Nav.Link>
          <ul className="nav-list d-flex flex-wrap">
            <li>
              <Nav.Link to="#">About Us</Nav.Link>
            </li>
            <li>
              <Nav.Link to="#">Terms &amp; Condition</Nav.Link>
            </li>
            <li>
              <Nav.Link to="#">Privacy Policy</Nav.Link>
            </li>
            <li>
              <Nav.Link to="#">Blog</Nav.Link>
            </li>
            <li>
              <Nav.Link to="#">Contact Us</Nav.Link>
            </li>
          </ul>
        </div>
        <span className="d-block cat-txt">Categories</span>
        <ul className="nav-list d-flex flex-wrap">
          <li>
            <Nav.Link to="#">Yoga</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Fitness</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Beauty</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Hair</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Spa</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Nails</Nav.Link>
          </li>
        </ul>
        <span className="d-block cat-txt">Services</span>
        <ul className="nav-list d-flex flex-wrap">
          <li>
            <Nav.Link to="#">Zumba</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Gym</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Calesthenics</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Hair Cut</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Yoga</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Massage</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Spa</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Deep Tissue Massage</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Nairl Paint</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Nail Art</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Hair Colour</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Makeup</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Face Clensing</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Manicure</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Pedicure</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Feet Massage</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Hair Spa</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Hair Rebonding</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Arm Wax</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Waxing</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Threading</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Zumba</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Threading</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Zumba</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Gym</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Calesthenics</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Hair Cut</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Yoga</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Massage</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Spa</Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">Deep Tissue Massage</Nav.Link>
          </li>
        </ul>
        <span className="d-block cat-txt">Follow Us</span>
        <ul className="social-list d-flex flex-wrap">
          <li>
            <Nav.Link to="#">
              <img src={faceBook} alt="facebook" />
            </Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">
              <img src={instaGram} alt="insta" />
            </Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">
              <img src={twitTer} alt="twitter" />
            </Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">
              <img src={linkdIn} alt="linkdin" />
            </Nav.Link>
          </li>
          <li>
            <Nav.Link to="#">
              <img src={youTube} alt="youtube" />
            </Nav.Link>
          </li>
        </ul>
        <p className="copy-rgt text-center">
          &copy;2021 FitnShine Technologies Pvt. Ltd.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
