import React, { useState } from "react";

// import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Login from "../../Webpages/Login";
import { GenreDb } from "../../API/quizQuestions/constants";

function Result(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  const [genre, setGenre] = useState({ genre: props.quizResult });
  const genreHandler = (e) => {
    setGenre(...genre, ([e.target.name] = e.target));
    console.log(genre);
  };
  const saveGenre = (e) => {
    e.preventDefault();
    axios
      .post(GenreDb, genre, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        window.localStorage.setItem("resultId", response.data._id);
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
      <div>
        It's a likely chance that you prefer{" "}
        <div onChange={genreHandler} name="genre">
          <strong>{props.quizResult} </strong>
        </div>
        music at the momment!
      </div>
      <div className="result-btn">
        <Button
          type="submit"
          onClick={saveGenre}
          variant="success"
          style={{ marginRight: 20 }}
        >
          Save result
        </Button>
        <Button
          className="btn-success"
          style={{ marginRight: 20 }}
          variant="success"
          type="submit"
        >
          <Login />
        </Button>

        <Button
          className="btn-success"
          style={{ marginRight: 20 }}
          variant="sucess"
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