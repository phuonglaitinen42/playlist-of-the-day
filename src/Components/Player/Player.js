import React from 'react';
import './Player.css';

const Player = props => {
    const backgroundStyles= {
        backgroundImage: `url(${
            props.item.album.images[0].url
        })`,
    };

    const progressBarStyles = {
        width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
    };

    return (
        <div className="player-container">
            <div className="player-wrapper">
                <div className="now-playing_img">
                    <img src={props.item.album.images[0].url} alt={props.item.album.images[0].url} />
                </div>
                <div className="now-playing_side">
                    <div className="now-playing_name">{props.item.name}</div>
                    <div className="now-playing_artist">
                        {props.item.artists[0].name}
                    </div>
                    <div className="now-playing_status">
                        {props.is_playing ? "Playing" : "Paused"}
                    </div>
                    <div className="progress">
                        <div className="progress_bar" style={progressBarStyles} />
                    </div>
                </div>
                <div className="background" style={backgroundStyles} />{" "}
            </div>
        </div>
    );
}

export default Player;