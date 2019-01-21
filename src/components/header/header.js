import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  signOut = e => {
    auth
      .signOut()
      .then(() => {
        return <Link to="/" />;
        //this.props.history.push("/");
      })
      .catch(err => {
        return <Link to="/" />;
        //this.props.history.push("/");
      });
    e.preventDefault();
  };
  render() {
    return (
      <div className="row container">
        <div className="col-10 col-sm-11">
          <h1 className="main">
            <Link className="link" to="/home">
              React Home Page
            </Link>
          </h1>
        </div>
        <div className="col-2 col-sm-1 logout">
          <button className="btn btn-success" onClick={this.signOut}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
