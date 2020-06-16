import React from 'react';
import {
    useRouteMatch,
    Route,
    Switch,
} from 'react-router-dom';

import TeamContainer from '../Components/TeamContainer/TeamContainer';
import teamdata from '../Components/TeamData/TeamData';
import TeamInfo from '../Components/TeamInfo/TeamInfo';
import Header from '../Components/Header/Header';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

const CreditPage = (props) => {
let match = useRouteMatch();
const team = teamdata;

const teamMembers = team.map((team) => {
    return (
    <div key={team.id} >
                       <Card bg="light" text="dark" className="mt-top" d-inline-block border="light" style={{ width: '20rem'}}>
                        <Card.Body>
                            <Card.Img variant="top" className="mb-3 team-thumb-img" src={team.imgSrc} alt={team.title} />
                            <Card.Title>{team.title}</Card.Title>
                            <Card.Text><p>{team.subtitle}</p></Card.Text>
                            <Button variant="success" href={`${match.url}/${team.title}`}> Learn more
                            </Button>
                        </Card.Body>
                       </Card>
                       </div>
    );
});

return (
    <div>
        <Header />
    <Switch>
        <Route path="/credits/:teamId">
            <TeamContainer>
            <TeamInfo />
            </TeamContainer>
        </Route>
        <Route path={match.path}>
            <CardDeck>{teamMembers}</CardDeck>
            <Button variant="link">
        <a href="/">
            Return to main menu.
          </a></Button>
        </Route>
    </Switch>
</div>
);

}


export default CreditPage;