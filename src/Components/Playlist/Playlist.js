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
import {
  GenreDb,
  JazzID,
  PopID,
  RockID,
  MetalID,
  MixedID,
} from "../../API/quizQuestions/constants";
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
      shareUrl: "",
      title: "",
    };

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
    spotifyApi.getPlaylist(JazzID).then(
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
    spotifyApi.getPlaylist(PopID).then((response) => {
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
    spotifyApi.getPlaylist(RockID).then((response) => {
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
    spotifyApi.getPlaylist(MetalID).then((response) => {
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
    spotifyApi.getPlaylist(MixedID).then((response) => {
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
          <p>Music genre suits your mood today is {this.state.mygenre} </p>

          <input
            class="btn btn-success"
            type="button"
            value="Generate playlist"
            onClick={() => this.getCall()}
          ></input>
          <div className="playlist-result">
            Your playlist of the day is: {this.state.playlistName}
            <div className="playlist-img">
              <img src={this.state.image} alt={this.state.playlistName} />
            </div>
          </div>

          <a
            href={this.state.link}
            target="blank_"
            class="btn btn-success"
            style={{ textDecoration: "none", color: "white" }}
          >
            Open Spotify and listen!
          </a>
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
