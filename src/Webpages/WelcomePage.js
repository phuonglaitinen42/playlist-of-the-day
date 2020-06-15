import React from "react";

import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="App-header">
      <h2>Find what playlist fits your feeling</h2>
      <p>
        Playlist of the Day Application genereates a playlist which catches your
        vibes in the day. We provide you a quick quiz to finalize music genre,
        from there, newly created playlist is available for you after you have
        logged in to Spotify. Now, let's start!
      </p>
      <a href="/quiz" class="btn btn-success">
        Start quiz{" "}
      </a>
    </div>
  );
};

export default WelcomePage;
