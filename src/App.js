import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Routing from "./routing";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Routing />
      </React.Fragment>
    );

    /*<div>
        <h1 className="main">{this.props.title}</h1>
        <Counter counter={this.state.counter} />
        <List list={this.state.list} />
      </div>*/
  }
}

export default App;
