import React from "react";
import NameCard from "../NameCard/NameCard";

import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import Button from 'react-bootstrap/Button';
import { useState, useEffect  } from "react";
import axios from "axios";

function Result (props) {
  const [dailyUser, setName] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3001/usernames/')
    .then((response) => {
      setName(response.data) ;
    });
  }, []);


  function refreshPage() {
    window.location.reload(false);
  }

  
const theUserName = dailyUser.map((n) => {
  return (
    <NameCard
    username={n.username}
    />
  );
});


  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div> {theUserName}</div>
      <div>
        It's a likely chance that you prefer{" "}
        <strong>{props.quizResult} </strong>music at the momment!
      </div>
      <div>
        <Button className="d-inline-block" variant="success" type="submit">Get your playlist now</Button>
        <Button className="d-inline-block" variant="light" type="submit" onClick={refreshPage}>
            Redo the questions
        </Button>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
