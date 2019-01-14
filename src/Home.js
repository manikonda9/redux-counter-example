import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Counter Example",
          path: "/counter"
        },
        {
          name: "List Example",
          path: "/list"
        },
        {
          name: "Table Search Example",
          path: "/table"
        },
        {
          name: "High Chart Example",
          path: "/chart"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1 className="main">
          <Link className="link" to="/">
            React Home Page
          </Link>
        </h1>
        {this.state.data.map((data, index) => (
          <div className="dashboard" key={index}>
            <Link className="link" to={data.path}>
              {data.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
