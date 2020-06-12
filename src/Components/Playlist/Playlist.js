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
      displayName: "",  
      link: null,
      image: "",
      // genre: "",
      mygenre: "",
      shareUrl: "",
      title: "",
      error: "",
      deviceId: "",
      artistName:"",
      playing: false,
      position: 0,
      duration: 0,
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
        const artistName = response.artists;
        console.log(link);

        this.setState({
          playlistName: playlistName,
          link: link,
          image: image,
          shareUrl: link,
          title: playlistName,
          artistName: artistName,
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
      const artistName = response.artists;

      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
        image: image,
        shareUrl: link,
        title: playlistName,
        artistName: artistName,
      });
    });
  }
  getRock() {
    spotifyApi.getPlaylist(RockID).then((response) => {
      console.log(response);
      const link = response.external_urls.spotify;
      const playlistName = response.name;
      const image = response.images[0].url;
      const artistName = response.artists;

      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
        image: image,
        shareUrl: link,
        title: playlistName,
        artistName: artistName,
      });
    });
  }
  getMetal() {
    spotifyApi.getPlaylist(MetalID).then((response) => {
      console.log(response);
      const link = response.external_urls.spotify;
      const playlistName = response.name;
      const image = response.images[0].url;
      const artistName = response.artists;

      console.log(link);

      this.setState({
        playlistName: playlistName,
        link: link,
        image: image,
        shareUrl: link,
        title: playlistName,
        artistName: artistName,
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

  getName() {
    spotifyApi
    .getMe()
    .then((response) => {
        console.log(response)
        const displayName = response.display_name;
        console.log(displayName);
        this.setState({
          displayName: displayName,
        });
      })
    }


      checkLogin() {
        if ({loggedIn: false}) {
          this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
        }
      }

      checkForPlayer() {
        if (window.Spotify !== null) {
          this.player = new window.Spotify.Player({
            name: "Spotify Player",
          });
          this.playerHandler();

          this.player.connect();
        }
      }

      playerHandler() {
        this.player.on('initialization_error', e => { console.error(e); });
        this.player.on('autentication_error', e => {
          console.error(e)
          this.setState({ loggedIn: false });
        });
        this.player.on('account_error', e => { console.error(e); });
        this.player.on('playback_error', e => { console.error(e); } )

        // playback updates
        this.player.on('player_state_changed', state => this.onStateChanged(state));

        // ready
        this.player.on('ready', response => {
          let { device_id } = response;
          console.log("device ready");
          this.setState({ deviceId: device_id })
        });
      }

      onStateChanged(state) {
        // no longer listening to music causes a null state.
        if (state !== null) {
          const {
            current_track: currentTrack,
            position,
            duration,
          } = state.track_window;
          const trackName = currentTrack.name;
          const albumName = currentTrack.album.name;
          const artistName = currentTrack.artists
          .map(artist => artist.name)
          .join(", ");
          const playing = !state.paused;
          this.setState({
            position,
            duration,
            trackName,
            albumName,
            artistName,
            playing
          });
        }
      }

      onPrevClick() {
        this.player.previousTrack();
      }

      onPlayClick() {
        this.player.toggleTrack();
      }

      onNextClick() {
        this.player.nextTrack();
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
            value="Generate playlist"
            onClick={() => this.getCall()}
          ></input>
          <div className="playlist-result">
            Your playlist of the day is: {this.state.playlistName}
            <div className="playlist-img">
              <img src={this.state.image} alt={this.state.playlistName} />
            </div>
          </div>
          <div>
          <p>Artist: {this.state.artistName}</p>
          <p>Track:{this.state.trackName}</p>
          <p>Album:{this.state.albumName}</p>
          <p>
            <button>previous</button>
            <button></button>
            <button>Next</button>
          </p>
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
