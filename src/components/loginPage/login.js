import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="main">Login Form</h1>
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
                placeholder="Enter User Name"
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
                ref={input => (this.password = input)}
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
