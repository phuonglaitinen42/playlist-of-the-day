import React, { Component } from "react";

export const authEndpoint = "https://accounts.spotify.com/authorize"; // Replace with your app's client ID, redirect URI and desired scopes
const clientId = "5a2f9ddd57784db0aab3f4179a994b1f";
const redirectUri = "http://localhost:3000/";
const scopes = ["user-read-currently-playing", "user-read-playback-state"]; // Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";
class Login extends Component {
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
    }
  }
  render() {
    return (
      <div>
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          Login with Spotify
        </a>
      </div>
    );
  }
}

export default Login;
