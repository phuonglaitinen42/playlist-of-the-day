import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="App-header">
      <h2>Find what playlist fits your feeling</h2>
      <button>
        <a href="/quiz">Start quiz</a>
      </button>
    </div>
  );
};

export default WelcomePage;
