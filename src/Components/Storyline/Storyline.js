import React from "../../../node_modules/react";
import PropTypes from "../../../node_modules/prop-types";

function Storyline(props) {
  return (
    <p className="story" style={{ paddingLeft: 40 }}>
      {props.story}
    </p>
  );
}

Storyline.propTypes = {
  story: PropTypes.string.isRequired,
};

export default Storyline;
