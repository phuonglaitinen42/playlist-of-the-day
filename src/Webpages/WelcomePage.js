import React from "react";
import Login from "../Components/Login/Login";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="App-header">
      <h2>Find what playlist fits your feeling</h2>
      <Login />
    </div>
  );
};

export default WelcomePage;
