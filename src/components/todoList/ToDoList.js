import "./ToDoList.css";
import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions/todoAction";
import ToDoListItem from "./ToDoListItem";
import { Link } from "react-router-dom";
import { todosRef } from "../../config/firebase";

class ToDoList extends React.Component {
  state = {
    addFormVisible: false,
    addFormValue: "",
    list: []
  };

  componentWillMount = () => {
    this.props.fetchToDos();
    const ordersRef = todosRef.orderByKey();
    let items = [];
    ordersRef.once("value", snapshot => {
      snapshot.forEach(child => {
        items.push(child.val().title);
      });
    });

    this.setState({
      list: items
    });
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addToDo } = this.props;
    event.preventDefault();
    this.props.addToDo({ title: addFormValue });
    this.setState({ addFormValue: "" });
  };

  renderAddForm = () => {
    const { addFormVisible, addFormValue } = this.state;
    if (addFormVisible) {
      return (
        <div id="todo-add-form" className="col-12">
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-field text-center">
              <i class="fa fa-plus file btn btn-success" />
              <input
                value={addFormValue}
                onChange={this.handleInputChange}
                id="toDoNext"
                type="text"
              />
            </div>
          </form>
        </div>
      );
    }
  };

  renderToDos = () => {
    const data = this.props.data;
    const toDos = _.map(data, (value, key) => {
      return <ToDoListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div className="col-12 text-center">
        <h4>You have completed all the tasks</h4>
        <p>Start by clicking add button in the bottom of the screen</p>
      </div>
    );
  };

  render() {
    const { addFormVisible } = this.state;
    return (
      <div className="to-do-list-container">
        <h1 className="main">
          <Link className="link" to="/">
            React Home Page
          </Link>
        </h1>
        <div className="row">
          {this.renderAddForm()}
          {this.renderToDos()}
        </div>
        <div className="container fixed-action-btn">
          <button
            onClick={() => this.setState({ addFormVisible: !addFormVisible })}
            className="btn btn-success round"
          >
            {addFormVisible ? (
              <i class="fa fa-times add" />
            ) : (
              <i class="fa fa-plus add" />
            )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.dataReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(ToDoList);
