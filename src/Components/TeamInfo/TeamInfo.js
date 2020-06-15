import React from 'react';
import { useParams } from 'react-router-dom';
import teamdata from '../TeamData/TeamData';


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faSpotify,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


function TeamInfo() {
    let { teamId } = useParams();
    let team = teamdata.find((t) => t.title === teamId)

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            
            <Container fluid={true}>
                <div><img className="t-team-img" src={team.imgSrc} alt={team.title} />
                    <div> <p className="t-card-title">{team.title}</p></div>
                    <p className="t-card-profile">{team.profile}</p>
                    <div className="t-card-link">
                        <a href={team.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-github" icon={faGithub} />Checkout my repositories.</a>
                    </div>
                    <div className="t-card-link"><a href={team.linkedIn} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-linkedIn" icon={faLinkedin} />Let's connect on LinkedIn!</a></div>
                    <div className="t-card-link">
                        <a href={team.playlist} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-spotify" icon={faSpotify} />Enjoy the vibes from my favourite playlist.</a>
                    </div>
                    <Button variant="warning" href="/credits">Back to Credits</Button>
                </div>
            </Container>
        </Jumbotron>
    );
}

export default TeamInfo;