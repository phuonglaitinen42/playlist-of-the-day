import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Username = (props) => {
    return (
        <Form className="name">
            <Form.Group>
                <Form.Label htmlFor="name">Please provide your name.</Form.Label>
                <Form.control id="name" name="name" type="text" placeholder="John Doe"> </Form.control>
            </Form.Group>

            <Button className="d-inline-block" variant="success" type="submit">
                Send
                </Button>
        </Form>
    )
}

export default Username;