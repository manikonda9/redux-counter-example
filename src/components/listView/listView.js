import React from "react";
import "./listView.css";
import "font-awesome/css/font-awesome.min.css";

const listView = props => {
  return (
    <div className="col-6">
      <h3>List Deatils</h3>
      <ol>
        {props.list.map((list, index) => (
          <li key={index}>
            {list}
            <button
              className="btn btn-default"
              onClick={() => props.delete(index)}
            >
              <i className="fa fa-trash-o" />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default listView;
