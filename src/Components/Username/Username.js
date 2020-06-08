import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Username.css";

const Username = () => {
  const [registeredName, setUserName] = useState({
    // id: [],
    username: "",
  });

  const changeValueHandler = (u) => {
    setUserName({
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


  // for Phuong.
  // onSubmit had to be changed to onClick, because backend does not save the names to db otherwise. Not sure why this happens.

  return (
    <Form className="registeredName" onClick={addPostHandler}>
      <Form.Group>
        <Form.Label htmlFor="username">Please provide your name.</Form.Label>
        <Form.Control
          id="username"
          username="username"
          type="text"
          placeholder="Artturi Reinikainen"
          onChange={changeValueHandler}
        ></Form.Control>
      </Form.Group>
      <Button className="d-inline-block" variant="success" type="submit">
        <Link
          className="toQuiz"
          class="btn btn-success"
          to="/quiz"
          style={{ color: "white" }}
        >
          Send
          {/* <FontAwesomeIcon icon={faSignature} className="signature-icon" /> */}
        </Link>
      </Button>
    </Form>
  );
};

export default Username;
