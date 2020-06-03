import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = (props) => {
  return (
    <div className="loader">
      <img className="loader-img" src={props.src} alt="loader" />
      <p className="loader-text">{props.text}</p>
    </div>
  );
};
Loader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loader;
