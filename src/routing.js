import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Counter from "./containers/counter/counter";
import List from "./containers/list/list";
import Home from "./Home";

class RouterComp extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/list" component={List} />
      </Switch>
    );
  }
}

export default RouterComp;
