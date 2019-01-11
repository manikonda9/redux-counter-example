import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { INC, DEC, ADD, SUB, func } from "../../actions/index";
import View from "../../components/counterView/counterView";
import Output from "../../components/counterOutput/counterOutput";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Output counter={this.props.ctr} />
        <View label="Increment 1" click={this.props.incFunc} />
        <View label="Decrement 1" click={this.props.decFunc} />
        <View label="Add 15" click={this.props.addFunc} />
        <View label="Subtract 20" click={this.props.subFunc} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incFunc: () => dispatch(func(INC, 1)),
    decFunc: () => dispatch(func(DEC, 1)),
    addFunc: () => dispatch(func(ADD, 15)),
    subFunc: () => dispatch(func(SUB, 20))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
