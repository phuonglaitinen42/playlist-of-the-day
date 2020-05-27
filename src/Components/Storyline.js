import React from "react";
import PropTypes from "prop-types";

function Storyline(props) {
  return <h3 className="story">{props.story}</h3>;
}

Storyline.propTypes = {
  story: PropTypes.string.isRequired,
};

export default Storyline;
