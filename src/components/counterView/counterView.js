import React from "react";
import "./counterView.css";
import PropTypes from "prop-types";

const view = props => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
      <div className="view" onClick={props.click}>
        {props.label}
      </div>
    </div>
  );
};

view.propTypes = {
  click: PropTypes.func,
  label: PropTypes.string.isRequired
};

export default view;
