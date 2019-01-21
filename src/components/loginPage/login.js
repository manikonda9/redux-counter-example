import React from "react";
import { auth } from "../../config/firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
      loading: false,
      visible: true
    };
  }

  componentWillMount = () => {
    //creating new user
    /*auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });*/
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = e => {
    const email = this.state.email;
    const password = this.state.password;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        auth.onAuthStateChanged(user => {
          if (user) {
            if (user) {
              this.props.history.push("/home");
            } else {
              let error = { message: "Please verify Account details" };
              this.setState({ errors: this.state.errors.concat(error) });
            }
          } else {
            this.props.history.push("/");
          }
        });
      })
      .catch(err => {
        this.setState({
          errors: this.state.errors.concat(err),
          loading: false
        });
      });
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <h1 className="main">Login Form</h1>
        <form className="form-horizontal" onSubmit={this.login}>
          <div className="form-group">
            <label className="control-label" htmlFor="email">
              Email Id :
            </label>
            <div className="">
              <input
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                className="form-control"
                id="email"
                placeholder="Enter Email Id"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="password">
              Password :
            </label>
            <div className="">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
                id="password"
                placeholder="Enter Password"
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
    );
  }
}

export default Login;
