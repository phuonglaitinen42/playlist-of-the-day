import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TeamCarousel from '../Components/TeamCarousel/TeamCarousel';



const CreditPage = (props) => {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <TeamCarousel />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )

}

export default CreditPage;