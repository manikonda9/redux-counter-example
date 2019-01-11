import React from "react";
import "./counterOutput.css";

const output = props => {
  return <div className="output"> Output : {props.counter}</div>;
};

export default output;
