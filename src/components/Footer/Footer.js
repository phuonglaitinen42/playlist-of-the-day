import React from "react";
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
            <Col className="p-o" md={3} sm={12}>
            REACT20K - BC.FI
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>
            Created by Phuong Laitinen, Otso Lappalainen and Vy Pham.
            </Col>
            </Row>
            </Container>
        </footer>
    )
}

export default Footer;
