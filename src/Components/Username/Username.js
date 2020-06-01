import React, { useState  } from 'react';
import { Link } from 'react-router-dom';
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
        console.log(u);

        axios
            .post("http://localhost:3001/usernames", registeredName)
            .then((response) => {
                console.log(response.data);
            })
    };

    return (

        <Form className="registeredName" onClick={addPostHandler} >
            <Form.Group>
                <Form.Label htmlFor="username">Please provide your name.</Form.Label>
                <Form.Control
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Artturi Reinikainen"
                    onChange={changeValueHandler}
                >
                </Form.Control>
            </Form.Group>
            <Button
                className="d-inline-block"
                variant="success"
                type="submit"
                >
                <Link to="/quiz">
                    Send
                <FontAwesomeIcon icon={faSignature} className="signature-icon" />
                </Link>
            </Button>
        </Form>
    );
};

export default Username;