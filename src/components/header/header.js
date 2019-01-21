import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const header = props => {
  return (
    <div className="row container">
      <div className="col-10 col-sm-11">
        <h1 className="main">
          <Link className="link" to="/">
            React Home Page
          </Link>
        </h1>
      </div>
      <div className="col-2 col-sm-1 logout">
        <button className="btn btn-success" onClick={props.click}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default header;
