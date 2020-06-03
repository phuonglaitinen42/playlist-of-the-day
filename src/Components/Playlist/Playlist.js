import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
class Playlist extends Component {
  constructor(props) {
    super(props);
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
      genre: "",
    };
    this.getGenre = this.getGenre.bind(this);
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

  getCall() {
    if (this.state.genre === "Pop") {
      return this.getPop();
    }
    if (this.state.genre === "Jazz") {
      return this.getJazz();
    }
    if (this.state.genre === "Metal") {
      return this.getMetal();
    }
    if (this.state.genre === "Rock") {
      return this.getRock();
    }
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
  getGenre(e) {
    this.setState({
      genre: e.target.value,
    });
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h3>What was the result you got from our quiz?</h3>
        <label>
          Genre:
          <select value={this.state.genre} onChange={this.getGenre} required>
            <option value="Jazz">Jazz</option>
            <option value="Rock">Progressive Rock</option>
            <option value="Metal">Metal</option>
            <option value="Pop">Pop/Ballad</option>
          </select>
        </label>

        <input
          type="button"
          value="Get your playlist"
          onClick={() => this.getCall()}
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
