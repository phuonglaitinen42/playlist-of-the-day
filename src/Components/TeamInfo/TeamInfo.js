import React from 'react';
import { useSpring, animated} from 'react-spring';
// import {Transition} from 'react-spring/renderprops'
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
            <p className="t-card-name">{props.name}</p>
            <p className="t-card-title">{props.title}</p>
            <p className="t-card-profile">{props.profile}</p>
            <a href ={props.github} className="profilelinks" target="_blank" rel="noopener noreferrer">Github <FontAwesomeIcon className="fa-github" icon={faGithub}/></a>
            <a href={props.linkedIn} className="profilelinks" target="_blank" rel="noopener noreferrer">LinkedIn<FontAwesomeIcon className="fa-linkedIn" icon={faLinkedin}/></a>
            <a href={props.playlist} className="profilelinks" target="_blank" rel="noopener noreferrer">Favourite Playlist<FontAwesomeIcon className="fa-spotify" icon={faSpotify}/></a>
        </animated.div>
    )
}

/*

 const profileImages = [...];


 <Transition
            profileImages={toggle}
            from={{ position: 'absolute', opacity: 0}}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>
                {toggle => 
                toggle
                ? props => <div style={props.mainImgSrc}></div>
                : props => <div style={props.altImgSrc}></div>
                }
            </Transition>

*/


export default TeamInfo;