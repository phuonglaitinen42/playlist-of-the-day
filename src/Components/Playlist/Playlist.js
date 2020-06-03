import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
// import { faCloudMeatball } from "@fortawesome/free-solid-svg-icons";
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

  getPlaylist() {
    spotifyApi.searchPlaylists("43ZHCT0cAZBISjO8DG9PnE").then(
      (response) => {
        const data = response.playlists.items[0].name;
        const openSpotify = response.playlists.items[0].external_urls.spotify;
        console.log(openSpotify);
        console.log(data);
        console.log(response);
        this.setState({
          playlistName: data,
          link: openSpotify,
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

  render() {
    return (
      <div>
        <input
          type="button"
          value="Get your playlist"
          onClick={() => this.getPlaylist()}
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
