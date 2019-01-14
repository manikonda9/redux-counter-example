import React from "react";
import "./listView.css";

const listView = props => {
  return (
    <div className="col-6">
      <h3>List Deatils</h3>
      <ol>
        {props.list.map((list, index) => (
          <li key={index}>
            {list}
            <button
              className="btn btn-danger"
              onClick={() => props.delete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default listView;
