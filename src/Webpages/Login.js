import React from "react";

export const authEndpoint = "https://accounts.spotify.com/authorize"; // Replace with your app's client ID, redirect URI and desired scopes
const clientId = "5a2f9ddd57784db0aab3f4179a994b1f";
const redirectUri = "http://localhost:8888/callback";
const scopes = ["user-read-private", "user-read-email"]; // Get the hash of the url

const Login = () => {
  return (
    <a
      style={{ textDecoration: "none", color: "white" }}
      className="btn-success"
      href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
      )}&response_type=code&show_dialog=true`}
    >
      Get you playlist of the Day
    </a>
  );
};

export default Login;
