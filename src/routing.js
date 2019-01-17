import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Counter from "./containers/counter/counter";
import List from "./containers/list/list";
import Table from "./containers/table/table";
import Chart from "./containers/chart/chart";
import ToDo from "./components/todoList/ToDoList";
import Form from "./containers/forms/userForm";
import Home from "./Home";

class RouterComp extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/list" component={List} />
        <Route path="/table" component={Table} />
        <Route path="/chart" component={Chart} />
        <Route path="/todo" component={ToDo} />
        <Route path="/form" component={Form} />
      </Switch>
    );
  }
}

export default RouterComp;
