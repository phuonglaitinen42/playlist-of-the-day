import SpotifyPlayer from "react-spotify-player";
import SpotifyWebApi from "spotify-web-api-js";
import React, { Component } from "react";
import Axios from "axios";
import "./Playlist.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { GenreDb } from "../../API/quizQuestions/constants";

const spotifyApi = new SpotifyWebApi();
const shareUrl = "https://daily-playlist-frontend.herokuapp.com";
const quote = "Playlist of the Day";
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
      image: "",
      // genre: "",
      mygenre: "",
      player: "",
      shareUrl: "",
      title: "",
      myname: "",
      show: false,
    };
    this.playerCheckInterval = null;
  }

  componentDidMount() {
    const resultId = localStorage.getItem("resultId");
    console.log(resultId);

    Axios.get(GenreDb + resultId).then((response) => {
      const mygenre = response.data.genre;
      this.setState({ mygenre });
    });
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

  getName() {
    spotifyApi
      .getMe()
      .then((profile) => {
        const myname = profile.display_name;
        this.setState({
          myname: myname,
        });
      })

      .catch((e) => {
        console.log(e);
      });
  }

  getPlayer() {
    if (this.state.mygenre === "Pop/Ballad") {
      this.setState({
        player: "spotify:playlist:37i9dQZF1DXaPCIWxzZwR1",
      });
    }
    if (this.state.mygenre === "Jazz") {
      this.setState({
        player: "spotify:playlist:7pBWAhZGgqo3q1w672FoKl",
      });
    }
    if (this.state.mygenre === "Metal") {
      this.setState({
        player: "spotify:playlist:37i9dQZF1DWTcqUzwhNmKv",
      });
    }
    if (this.state.mygenre === "Progressive Rock") {
      this.setState({
        player: "spotify:playlist:37i9dQZF1DXcF6B6QPhFDv",
      });
    }
    if (this.state.mygenre === "Mixed") {
      this.setState({
        player: "spotify:playlist:37i9dQZF1DXdxcBWuJkbcy",
      });
    }
    this.setState({
      show: this.state.player === null ? false : true,
    });
  }

  render() {
    let player = "";
    if (this.state.player) {
      player = <SpotifyPlayer uri={this.state.player} />;
    }
    return (
      <div className="playlist-bg">
        <div className="playlist-render">
          <p onChange={this.getName()}>Hey {this.state.myname}! </p>

          <p>Music genre suits your mood today is {this.state.mygenre} </p>

          <input
            className="btn btn-success"
            type="button"
            value="Generate playlist"
            onClick={() => this.getPlayer()}
          ></input>
          <div className="playlist-result">
            <div className="playlist-player">{player}</div>
          </div>

          <div>
            <a href="/quiz" className="btn btn-success">
              Replay?!
            </a>
          </div>
          <div>
            <a href="/credits" className="btn btn-success">
              Learn more about the team behind the game.
            </a>
          </div>
          <div className="share-btn">
            <p>Share the quiz with your friends</p>
            <FacebookShareButton url={shareUrl} quote={quote}>
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={quote}>
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    );
  }
}
export default Playlist;
