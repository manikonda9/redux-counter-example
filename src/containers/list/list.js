import React from "react";
import "./list.css";
import { connect } from "react-redux";
import { addItem, deleteItem } from "../../actions/listAction";
import ListView from "../../components/listView/listView";
import AddList from "../../components/addList/addList";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    };
  }
  render() {
    return (
      <div>
        <h1 className="list">Redux List Example</h1>
        <div className="row container">
          <AddList add={this.props.add} />
          <ListView list={this.props.listItems} delete={this.props.delete} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listItems: state.listReducer.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: text => dispatch(addItem(text)),
    delete: index => dispatch(deleteItem(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
