import React from "react";
import Username from "../Components/Username/Username";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="App-header">
      <h2>Find what playlist fits your feeling</h2>
      <Username />
    </div>
  );
};

export default WelcomePage;
