import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/header/header";
import { auth } from "./config/firebase";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Redux Counter",
          path: "/counter"
        },
        {
          name: "Redux List",
          path: "/list"
        },
        {
          name: "Table Search",
          path: "/table"
        },
        {
          name: "High Charts",
          path: "/chart"
        },
        {
          name: "Todo Firebase",
          path: "/todo"
        },
        {
          name: "Upload Form Data",
          path: "/form"
        }
      ]
    };
  }

  signOut = e => {
    auth
      .signOut()
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => {
        this.props.history.push("/");
      });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Header click={this.signOut} />
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
