import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

function Result(props) {
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
        <strong>{props.quizResult} </strong>music at the momment!
      </div>
      <div>
        <button>Get your playlist now</button>
        <button>
          <a href="/" style={{ textDecoration: "none" }}>
            Redo the questions
          </a>{" "}
        </button>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
