import React from 'react';
import Button from 'react-bootstrap/Button'
import TeamInfo from "../TeamInfo/TeamInfo";


function TeamCard(props) {

    return (
        <div className="d-inline-block t-card">
            <h3>{props.item.name}</h3>
            <img className="t-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && 
            <TeamInfo
            imgSrc={props.item.imgSrc}
            title={props.item.title}
            github={props.item.github } 
            linkedIn={props.item.linkedIn}
            playlist={props.item.playlist}
             />}
             <Button variant="info outline-primary" size="sm" className="t-card-btn" onClick={(e) => props.click(props.item)}>Learn more</Button>
        </div>
    )
}

export default TeamCard;