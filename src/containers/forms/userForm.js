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
    this.state = {
      Name: "",
      EmailId: "",
      Age: "",
      Id: "",
      Place: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    const user = {
      Name: this.state.Name,
      EmailId: this.state.EmailId,
      Age: this.state.Age,
      Id: this.state.Id,
      Place: this.state.Place
    };
    /*const user = {
      Name: this.name.value,
      EmailId: this.email.value,
      Age: Number.parseInt(this.age.value),
      Id: Number.parseInt(this.id.value),
      Place: this.place.value
    };*/
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
                  name="Name"
                  value={this.state.Name}
                  onChange={this.handleChange}
                  // ref={input => (this.name = input)}
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
                  name="EmailId"
                  value={this.state.EmailID}
                  onChange={this.handleChange}
                  // ref={input => (this.email = input)}
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
                  name="Id"
                  value={this.state.Id}
                  onChange={this.handleChange}
                  // ref={input => (this.id = input)}
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
                  name="Age"
                  value={this.state.Age}
                  onChange={this.handleChange}
                  //ref={input => (this.age = input)}
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
                  name="Place"
                  value={this.state.Place}
                  onChange={this.handleChange}
                  // ref={input => (this.place = input)}
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
    Name: PropTypes.string.isRequired,
    EmailId: PropTypes.string.isRequired,
    Age: PropTypes.number.isRequired,
    Id: PropTypes.number.isRequired,
    Place: PropTypes.string.isRequired
  }),
  submit: PropTypes.func
};

export default UserForm;
