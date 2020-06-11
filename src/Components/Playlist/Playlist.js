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
import Share from "../Share/Share";

import Player from "../Player/Player";

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
      displayName: "",
      link: null,
      image: "",
      // genre: "",
      mygenre: "",
      shareUrl: "",
      title: "",
    };

    // this.getGenre = this.getGenre.bind(this);
  }

  componentDidMount() {
    const resultId = localStorage.getItem("resultId");
    console.log(resultId);

    Axios.get("http://localhost:3001/result/" + resultId).then((response) => {
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

  getdisplayName() {
    spotifyApi.getUser('https://api.spotify.com/v1/me')
    .then(
      (response) => {
        console.log(this.state.displayName);
        const displayName = response.display_name;
  
        this.setState({
          displayName: displayName
        });
      })
    }




  getCall() {
    console.log(this.state.mygenre);
    if (this.state.mygenre === "Pop/Ballad") {
      return this.getPop();
    }
    if (this.state.mygenre === "Jazz") {
      return this.getJazz();
    }
    if (this.state.mygenre === "Metal") {
      return this.getMetal();
    }
    if (this.state.mygenre === "Progressive Rock") {
      return this.getRock();
    }
    if (this.state.mygenre === "Mixed") {
      return this.getMix();
    }
  }


  getJazz() {
    spotifyApi.getPlaylist("7pBWAhZGgqo3q1w672FoKl").then(
      (response) => {
        console.log(response);
        const link = response.external_urls.spotify;
        const playlistName = response.name;
        const image = response.images[0].url;
        console.log(link);

        this.setState({
          playlistName: playlistName,
          link: link,
          image: image,
          shareUrl: link,
          title: playlistName,
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
      const image = response.images[0].url;

      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
        image: image,
        shareUrl: link,
        title: playlistName,
      });
    });
  }
  getRock() {
    spotifyApi.getPlaylist("37i9dQZF1DXcF6B6QPhFDv").then((response) => {
      console.log(response);
      const link = response.external_urls.spotify;
      const playlistName = response.name;
      const image = response.images[0].url;

      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
        image: image,
        shareUrl: link,
        title: playlistName,
      });
    });
  }
  getMetal() {
    spotifyApi.getPlaylist("37i9dQZF1DWTcqUzwhNmKv").then((response) => {
      console.log(response);
      const link = response.external_urls.spotify;
      const playlistName = response.name;
      const image = response.images[0].url;

      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
        image: image,
        shareUrl: link,
        title: playlistName,
      });
    });
  }
  getMix() {
    spotifyApi.getPlaylist("37i9dQZF1DXdxcBWuJkbcy").then((response) => {
      console.log(response);
      const link = response.external_urls.spotify;
      const playlistName = response.name;
      const image = response.images[0].url;

      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
        image: image,
        shareUrl: link,
        title: playlistName,
      });
    });
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
          <p> Hey {this.state.displayName}. The music genre that suits your mood today is {this.state.mygenre} </p>
          <input
            class="btn btn-success"
            type="button"
            value="Get your playlist"
            onClick={() => this.getCall()}
          ></input>
          <div className="playlist-result">
            Your playlist of the day is: {this.state.playlistName}
            <div className="playlist-img">
              <img src={this.state.image} alt={this.state.playlistName} />
            </div>
          </div>
          <a href={this.state.link} target="blank_" class="btn btn-success">
            Open Spotify and listen!
          </a>
          <a href="/quiz" class="btn btn-success">
            Start your new playlist of the day!
          </a>
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
