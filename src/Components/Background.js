import React from "react";
import PropTypes from "prop-types";

function Background(props) {
  console.log(props.img);

  return <img className="background" src={props.src} alt="background" />;
}

Background.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Background;
