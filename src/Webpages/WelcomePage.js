import React from "react";

import Button from "react-bootstrap/Button";

import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="App-header">
      <h2>Find what playlist fits your feeling</h2>
      <Button className="d-inline-block" variant="success" type="submit">
    <a href="/quiz">Start game.</a>
  </Button>
    </div>
  );
};

export default WelcomePage;
