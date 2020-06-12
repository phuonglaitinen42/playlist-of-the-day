import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import TeamCard from "../TeamCard/TeamCard";

class TeamCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    name: "Phuong Laitinen",
                    title: "React20k Full Stack Development student",
                    profile: "lorem10",
                    mainImgSrc: "https://i.imgur.com/nYXBBNW.jpg",
                    altImgSrc: "https://i.imgur.com/nYXBBNW.jpg",
                    github: "https://github.com/heihazy",
                    linkedIn: "https://www.linkedin.com/in/phuong-laitinen-6b8098126/",
                    playlist: "https://open.spotify.com/playlist/5VyUnmXJ0N4qxCyUxi4E1D",
                    selected: false
                },
                {
                    id: 1,
                    name: "Vy Pham",
                    title: "React20k Full Stack Development student",
                    profile: "",
                    mainImgSrc: "https://i.imgur.com/PqhMnwf.jpg",
                    altImgSrc: "https://i.imgur.com/nYXBBNW.jpg",
                    github: "https://github.com/phamhavy171/",
                    linkedIn: "https://www.linkedin.com/in/vyphamht/",
                    playlist: "https://open.spotify.com/playlist/5VyUnmXJ0N4qxCyUxi4E1D",
                    selected: false
                },
                {
                    id: 2,
                    name: "Otso Lappalainen",
                    title: "React20k Full Stack Development student",
                    profile: "",
                    mainImgSrc: "https://i.imgur.com/If3faqt.jpg",
                    altImgSrc: "https://i.imgur.com/nYXBBNW.jpg",
                    github: "https://github.com/otsolap",
                    linkedIn: "https://www.linkedin.com/in/otsolap/",
                    playlist: "https://open.spotify.com/playlist/5VyUnmXJ0N4qxCyUxi4E1D",
                    selected: false
                },
            ]
        }
    }

    handleProfileClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false: true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <TeamCard item={item} click={(e => this.handleProfileClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return (
            <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
            </Container>
        );
    }

}

export default TeamCarousel;