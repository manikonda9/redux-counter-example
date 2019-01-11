import React from "react";
import ReactDOM from "react-dom";
import Counter from "./containers/counter/counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Counter counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
