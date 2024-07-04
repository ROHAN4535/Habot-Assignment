import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo1 from '../assets/logo1.jpg';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0A3D62', color: 'white', padding: '20px 0', marginTop: '110px', marginBottom: '10px' }}>
      <Container style={{ borderTop: '1px solid gray', borderBottom: '1px solid gray' }}>
        <Row>
          <Col md={4} className="d-flex flex-column align-items-center">
            <img src={logo1} alt="Logo" style={{ width: '220px', marginTop: '70px', height: '60px', marginLeft: '-30px' }} />
            <p style={{ height: '20px', marginLeft: '-122px', marginTop: '20px', fontSize: '1.1rem' }}>&copy; R Singhania</p>
          </Col>
          <Col md={2} className="d-flex flex-column align-items-start" style={{ marginTop: '50px' }}>
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li><a>About</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </Col>
          <Col md={2} className="d-flex flex-column align-items-start" style={{ marginTop: '50px' }}>
            <h6>Terms</h6>
            <ul className="list-unstyled">
              <li><a style={{ color: 'white' }}>Data privacy</a></li>
              <li><a style={{ color: 'white' }}>Terms</a></li>
              <li><a style={{ color: 'white' }}>Accessibility</a></li>
            </ul>
          </Col>
          <Col md={2} className="d-flex flex-column align-items-start" style={{ marginTop: '50px' }}>
            <h6>Related</h6>
            <ul className="list-unstyled">
              <li><a style={{ color: 'white' }}>Find Buyer</a></li>
              <li><a style={{ color: 'white' }}>Feedback</a></li>
            </ul>
          </Col>
          <Col md={2} className="d-flex justify-content-around" style={{ marginTop: '80px' }}>
            <a href="https://www.linkedin.com" style={{ color: 'white' }}><FaLinkedin size={24} /></a>
            <a href="https://www.twitter.com" style={{ color: 'white' }}><FaTwitter size={24} /></a>
            <a href="https://www.facebook.com" style={{ color: 'white' }}><FaFacebook size={24} /></a>
            <a href="https://www.instagram.com" style={{ color: 'white' }}><FaInstagram size={24} /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
