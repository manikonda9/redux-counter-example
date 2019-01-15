import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../../actions/todoAction";

class ToDoListItem extends Component {
  handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  render() {
    const { todoId, todo } = this.props;
    return (
      <div key="toDoName" className="container col-9 to-do-list-item teal">
        <h4>
          {todo.title}{" "}
          <span
            onClick={() => this.handleCompleteClick(todoId)}
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="fa fa-trash-o delete" />
          </span>
        </h4>
      </div>
    );
  }
}

export default connect(
  null,
  { completeToDo }
)(ToDoListItem);
