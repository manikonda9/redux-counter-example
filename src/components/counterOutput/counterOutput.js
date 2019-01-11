import React from "react";
import "./counterOutput.css";

const output = props => {
  return <div className="output container"> Output : {props.counter}</div>;
};

export default output;
