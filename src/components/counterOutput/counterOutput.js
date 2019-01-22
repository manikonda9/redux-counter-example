import React from "react";
import "./counterOutput.css";
import PropTypes from "prop-types";

const output = props => {
  return <div className="output container"> Output : {props.counter}</div>;
};

output.propTypes = {
  counter: PropTypes.number.isRequired
};

export default output;
