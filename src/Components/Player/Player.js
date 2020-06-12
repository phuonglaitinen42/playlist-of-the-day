import SpotifyWebApi from "spotify-web-api-js";
import React, { Component } from "react";
import "./Player.css";

const spotifyApi = new SpotifyWebApi();

class Player extends Component {
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
      error: "",
      deviceId: "",
      artistName: "",
      playing: false,
      position: 0,
      duration: 0,
    };
    this.playerCheckInterval = null;
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

  checkLogin() {
    if ({ loggedIn: false }) {
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
    this.player.on('playback_error', e => { console.error(e); })

    // playback updates
    this.player.on('player_state_changed', state => this.onStateChanged(state));

    // ready
    this.player.on('ready', async response => {
      let { device_id } = response;
      console.log("device ready");
      await this.setState({ deviceId: device_id })
      this.playerOnBrowser();
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
        playing,
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

  playerOnBrowser() {
    const { deviceId, loggedIn } = this.state;
    fetch("https//api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${loggedIn}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "device_ids": [deviceId],
        "play": true,
      })
    })
  }


  render() {
    const {
        loggedIn,
        error,
        position,
        duration,
        playing,
    } = this.state;

    return (
      <div className="player-container">
        <div className="player-wrapper">
          <div>
            <p>Artist: {this.state.artistName}</p>
            <p>Album:{this.state.albumName}</p>
            <p>
              <button onClick={() => this.onPrevClick()}>previous</button>
              <button onClick={() => this.onPlayClick()}>{playing ? 'Pause' : 'Play'}</button>
              <button onClick={() => this.onNextClick()}>Next</button>
            </p>
          </div>
          </div>
          </div>
    );
  }
}

export default Player;
