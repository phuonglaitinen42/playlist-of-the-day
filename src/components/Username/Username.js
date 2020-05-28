import React, { useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Username = () => {
    const [registeredName, setUserName] = useState({
        username: "",
    });

    const changeValueHandler = (u) => {
        setUserName({
            ...registeredName,
            [u.target.name]: u.target.value,
        });
    };

    const addPostHandler = (u) => {
        u.preventDefault();

        axios
            .post("http://localhost:3001/usernames", registeredName)
            .then((response) => {
            console.log(response.data);
            });
    };

    return (

        <Form className="registeredName" onSubmit={addPostHandler}>
            <Form.Group>
                <Form.Label htmlFor="username">Please provide your name.</Form.Label>
                <Form.control
                    id="username"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    onChange={changeValueHandler}
                >
                </Form.control>
            </Form.Group>
            <Button className="d-inline-block" variant="success" type="submit">
                Send
                <FontAwesomeIcon icon={faSignature} className="signature-icon" />
            </Button>
        </Form>
    );
};

export default Username;