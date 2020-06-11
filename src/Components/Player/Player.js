import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackName: "Track Name",
            artistName: "Artist Name",
            albumName: "Album Name",
            playing: false,
            position: 0,
            duration: 0,
        };
    }
    render () {
        const {
            artistName,
            trackName,
            albumName,
            error,
            position,
            duration,
            playing,
        } = this.state;
        
        return (
            <div>
                <p>Artist:  {artistName}</p>
                <p>Artist:  {trackName}</p>
                <p>Artist:  {artistName}</p>
            </div>
        )
    }
}

export default Player;