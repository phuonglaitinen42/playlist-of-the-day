import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import Button from 'react-bootstrap/Button';

// try the link with =/result/{$user._id}

function Result(props) {

  function refreshPage() {
    window.location.reload(false);
  }

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
        <strong>{props.quizResult} </strong>music at the momment!
      </div>
      <div>
        <Button className="d-inline-block" variant="success" type="submit">
          <Link to="/result">
            Get your playlist now
          </Link>
        </Button>
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
