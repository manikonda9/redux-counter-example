import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="main">
          <Link className="link" to="/">
            React Home Page
          </Link>
        </h1>
        <ol>
          <li>
            <Link className="link" to="/counter">
              Counter Example
            </Link>
          </li>
          <li>
            <Link className="link" to="/list">
              List Example
            </Link>
          </li>
        </ol>
      </div>
    );
  }
}

export default Home;
