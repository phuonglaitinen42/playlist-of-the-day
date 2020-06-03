import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

class Playlist extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    console.log(params);
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      playlistName: "",
      link: null,
    };
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  getJazz() {
    spotifyApi.getPlaylist("7pBWAhZGgqo3q1w672FoKl").then(
      (response) => {
        console.log(response);
        const link = response.external_urls.spotify;
        const playlistName = response.name;
        console.log(link);

        this.setState({
          playlistName: playlistName,
          link: link,
        });
      }

      // function (data) {
      //   console.log(data.playlists.items[0].uri);
      // },
      // function (err) {
      //   console.error(err);
      // }
    );
  }
  getPop() {
    spotifyApi.getPlaylist("37i9dQZF1DXaPCIWxzZwR1").then((response) => {
      console.log(response);
      const link = response.external_urls.spotify;
      const playlistName = response.name;
      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
      });
    });
  }
  getRock() {
    spotifyApi.getPlaylist("37i9dQZF1DXcF6B6QPhFDv").then((response) => {
      console.log(response);
      const link = response.external_urls.spotify;
      const playlistName = response.name;
      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
      });
    });
  }
  getMetal() {
    spotifyApi.getPlaylist("37i9dQZF1DWTcqUzwhNmKv").then((response) => {
      console.log(response);
      const link = response.external_urls.spotify;
      const playlistName = response.name;
      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
      });
    });
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="Get your playlist"
          onClick={() => this.getMetal()}
        ></input>
        <div className="playlist-result">
          Your playlist of the day is: {this.state.playlistName}
        </div>

        <a href={this.state.link} target="blank_">
          Open Spotify and listen!
        </a>
        <a href="/quiz">Return to quiz</a>
      </div>
    );
  }
}
export default Playlist;
