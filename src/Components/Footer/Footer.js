import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container fluid={true} className="footer">
        <Row className="border-top justify-content-between p-3">
          <Col className="p-o" md={3} sm={12}>
            REACT20K - BC.FI
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
          <a href="/credits" class="btn btn-light">
        Created by Phuong Laitinen, Vy Pham and Otso Lappalainen.
      </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
