import React from "react";
import PropTypes from "prop-types";

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
