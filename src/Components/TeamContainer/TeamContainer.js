import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';


function TeamContainer(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
      </Jumbotron>
    );

}

export default TeamContainer;