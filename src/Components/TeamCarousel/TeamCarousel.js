import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
    faGithub,
    faSpotify,
    faLinkedin,
    } from "@fortawesome/free-brands-svg-icons";

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
                    profile: "A result-driven Marketing professional with a demonstrated history of working in entrepreneurial environment and an aspiring Full Stack Web Developer. Skilled in Digital Marketing, Search Engine Optimization (SEO), HubSpot, Social Media, Web Design (HTML, CSS) and JavaScript. Fresh graduate with a Bachelor of Business Administration (BBA) focused in International Business from Xamk - South-Eastern Finland University of Applied Sciences. ",
                    mainImgSrc: "https://i.imgur.com/nYXBBNW.jpg",
                    altImgSrc: "https://i.imgur.com/nYXBBNW.jpg",
                    github: "https://github.com/heihazy",
                    linkedIn: "https://www.linkedin.com/in/phuong-laitinen/",
                    playlist: "https://open.spotify.com/playlist/5VyUnmXJ0N4qxCyUxi4E1D",
                    selected: false
                },
                {
                    id: 1,
                    name: "Vy Pham",
                    title: "React20k Full Stack Development student",
                    profile: "Hi, I'm student at HBC building skills to become full-stack developer. My current repositories are for learning and testing. Everything starts with baby steps!",
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
                    profile: "I’m interested in client consultations and creating excellent experiences. My job experience has been built from working at small start-up companies to handling international client cases at a global media house company. This has developed my consultation and communication skills. I enjoy work where I am able to consult clients and develop my problem-solving attitude utilising data. ",
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
        console.log(id);

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