import React from "react";
import "./addList.css";
import PropTypes from "prop-types";

const addList = props => {
  let input;
  return (
    <div className="col-6">
      <h3>Add List</h3>
      <input type="text" ref={node => (input = node)} />
      <button
        className="btn btn-success"
        onClick={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          props.add(input.value);
          input.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
};

addList.propTypes = {
  add: PropTypes.func,
  input: PropTypes.string.isRequired
};

export default addList;
