import React from 'react';
import './Header.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Jumbotron className="bg-dark jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content center py-5">
                    <Col md={8} sm={12}>
                        <Navbar bg="dark" expand="lg" fixed="top">
                            <Navbar.Brand>
                               <h1 className="logo display-4 font-weight-bolder"> Playlist of the Day</h1>
                                </Navbar.Brand>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Header;