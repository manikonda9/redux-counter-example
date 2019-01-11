import React from "react";
import "./counterView.css";

const view = props => {
  return (
    <div className="view" onClick={props.click}>
      {props.label}
    </div>
  );
};

export default view;
