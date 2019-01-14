import React from "react";
import "./addList.css";

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

export default addList;
