import React from 'react';
import Button from 'react-bootstrap/Button'
import TeamInfo from "../TeamInfo/TeamInfo";


function TeamCard(props) {

    return (
        <div className="d-inline-block t-card">
            <TeamInfo
                name={props.item.name} />
            <img className="t-card-img" src={props.item.mainImgSrc} alt={props.item.mainImgSrc} />
            <Button onClick={(e => props.click(props.item))}>Learn more</Button>
            {props.item.selected && 
            <TeamInfo
            name={props.item.name}
            altImgSrc={props.item.altImgSrc}
            title={props.item.title}
            profile={props.item.profile}
            github={props.item.github } 
            linkedIn={props.item.linkedIn}
            playlist={props.item.playlist}
             />}
        </div>
    )
}

export default TeamCard;