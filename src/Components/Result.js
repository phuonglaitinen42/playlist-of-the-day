import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup } from "react-transition-group";

function Result(props) {
  return (
    <TransitionGroup
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
    </TransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
