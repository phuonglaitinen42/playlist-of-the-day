import { Link } from 'react-router-dom';
import React, { useState } from "react";

import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import Button from "react-bootstrap/Button";
import Axios from "axios";

// try the link with =/result/{$user._id}

function Result(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  const [genre, setGenre] = useState({ genre: [props.quizResult] });
  const genreHandler = (e) => {
    setGenre(...genre, ([e.target.name] = e.target));
    console.log(genre);
  };
  const saveGenre = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/Genre", genre).then((response) => {
      console.log(response.data);
    });
  };

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
      <div></div>
      <div>
        It's a likely chance that you prefer{" "}
        <div onChange={genreHandler} name="genre">
          <strong>{props.quizResult} </strong>
        </div>
        music at the momment!
      </div>
      <div>
        <Button type="submit" onClick={saveGenre}>
          Save result
        </Button>
      </div>
      <div>
        <Button className="d-inline-block" variant="success" type="submit">
          <a href="http://localhost:8888">Login first</a>
        </Button>
        <Button
          className="d-inline-block"
          variant="light"
          type="submit"
          onClick={refreshPage}
        >
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
