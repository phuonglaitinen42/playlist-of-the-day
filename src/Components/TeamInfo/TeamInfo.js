import React from 'react';
import { useSpring, animated} from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faSpotify,
    faLinkedin,
    } from "@fortawesome/free-brands-svg-icons";


function TeamInfo(props) {
    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div className="t-card-info" style={style}>
            <p className="t-card-title">{props.title}</p>
            <a href ={props.github} className="t-card-link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-github" icon={faGithub}/></a>
            <a href={props.linkedIn} className="t-card-link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-linkedIn" icon={faLinkedin}/> </a>
            <a href={props.playlist} className="t-card-link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-spotify" icon={faSpotify}/></a>
        </animated.div>
    )
}




export default TeamInfo;