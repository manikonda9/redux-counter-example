import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/header";
import { dataRef } from "../../config/firebase";
import "./form.css";
import PropTypes from "prop-types";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = e => {
    const user = {
      Name: this.name.value,
      EmailId: this.email.value,
      Age: Number.parseInt(this.age.value),
      Id: Number.parseInt(this.id.value),
      Place: this.place.value
    };
    dataRef.push().set(user);
    this.props.history.push("/table");

    /*axios
      .post("https://my-practice-project-f6467.firebaseio.com/data", { user })
      .then(res => console.log(res))
      .catch(err => console.log(err));*/
  };

  render() {
    return (
      <div className="container">
        {/*<h1 className="main">
          <Link className="link" to="/">
            React Home Page
          </Link>
        </h1>*/}
        <Header />
        <h3 className="main">Upload User Details Example</h3>
        <div className="container">
          <form className="form-horizontal" onSubmit={this.submit}>
            <div className="form-group">
              <label className="control-label" htmlFor="username">
                User Name :
              </label>
              <div className="">
                <input
                  type="text"
                  ref={input => (this.name = input)}
                  className="form-control"
                  id="username"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="email">
                Email Id :
              </label>
              <div className="">
                <input
                  type="email"
                  ref={input => (this.email = input)}
                  className="form-control"
                  id="email"
                  placeholder="Enter Email Id"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="id">
                Id :
              </label>
              <div className="">
                <input
                  type="number"
                  ref={input => (this.id = input)}
                  className="form-control"
                  id="id"
                  placeholder="Enter Id"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="age">
                Age :
              </label>
              <div className="">
                <input
                  type="number"
                  ref={input => (this.age = input)}
                  className="form-control"
                  id="age"
                  placeholder="Enter Age"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="place">
                Place :
              </label>
              <div className="">
                <input
                  type="text"
                  ref={input => (this.place = input)}
                  className="form-control"
                  id="place"
                  placeholder="Enter Place"
                />
              </div>
            </div>
            <div className="form-group pull-right">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

UserForm.propTypes = {
  user: PropTypes.objectOf({
    Name: PropTypes.string,
    EmailId: PropTypes.string,
    Age: PropTypes.number,
    Id: PropTypes.number,
    Place: PropTypes.string
  }),
  submit: PropTypes.func
};

export default UserForm;
