import React from "react";
import ReactDOM from "react-dom";
import Counter from "./containers/counter/counter";
import List from "./containers/list/list";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      list: []
    };
  }
  render() {
    return (
      <div>
        <h1 className="main">{this.props.title}</h1>
        <Counter counter={this.state.counter} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
