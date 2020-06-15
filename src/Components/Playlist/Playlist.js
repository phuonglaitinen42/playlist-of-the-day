import SpotifyPlayer from "react-spotify-player";
import SpotifyWebApi from "spotify-web-api-js";
import React, { Component } from "react";
// import Player from "../Player/Player";
import Axios from "axios";
import "./Playlist.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import {
  GenreDb,
  // JazzID,
  // PopID,
  // RockID,
  // MetalID,
  // MixedID,
} from "../../API/quizQuestions/constants";


// import Share from "../Share/Share";

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
      image: "",
      // genre: "",
      mygenre: "",
      player: "",
      shareUrl: "",
      title: "",
      myname: "",
      // song1: "",
      // song2: "",
      // song3: "",
      // artist1: "",
      // artist2: "",
      // artist3: "",

    };
    this.playerCheckInterval = null;
    // this.getGenre = this.getGenre.bind(this);
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
        console.log(myname);
        this.setState({
          myName: myname,
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
  }

  // getGenre(e) {
  //   this.setState({
  //     genre: e.target.value,
  //   });
  //   console.log(this.state.genre);
  // }

  render() {
    return (
      <div className="playlist-bg">
        <div className="playlist-render">
          {/* <h3>What was the result you got from our quiz?</h3>
        <label>
          Genre:
          <select value={this.state.genre} onChange={this.getGenre} required>
            <option value="Jazz">Jazz</option>
            <option value="Rock">Progressive Rock</option>
            <option value="Metal">Metal</option>
            <option value="Pop">Pop/Ballad</option>
          </select>
        </label> */}
          <p onChange={this.getName()}>Hey {this.state.myname}! </p>

          <p>Music genre suits your mood today is {this.state.mygenre} </p>

          <input
            class="btn btn-success"
            type="button"
            value="Generate playlist"
            onClick={() => this.getPlayer()}
          ></input>
          <div className="playlist-result">
            {/* Your playlist of the day is: {this.state.playlistName}
            <div className="playlist-img">
              <img src={this.state.image} alt={this.state.playlistName} />
            </div>
            <div>
              Some songs:{" "}
              <ul>
                <li>
                  {this.state.song1} - {this.state.artist1}
                </li>
                <li>
                  {this.state.song2} - {this.state.artist2}
                </li>
                <li>
                  {this.state.song3} - {this.state.artist3}
                </li>
              </ul>{" "}
            </div> */}
            <div className="playlist-player">
              <SpotifyPlayer uri={this.state.player} />
            </div>
          </div>
          {/* <a
            href={this.state.link}
            target="blank_"
            class="btn btn-success"
            style={{ textDecoration: "none", color: "white" }}
          >
            Open Spotify and listen!
          </a> */}
          <a href="/quiz" class="btn btn-success">
            Start your new playlist of the day!
          </a>
          <div>
          <a href="/credits" class="btn btn-success">
        Learn more about the team.
      </a>
          </div>
          <div className="share-btn">
            <p>Share your Playlist of the Day with your friends</p>
            <FacebookShareButton
              url={this.state.shareUrl}
              quote={this.state.title}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              url={this.state.shareUrl}
              title={this.state.title}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    );
  }
}
export default Playlist;
