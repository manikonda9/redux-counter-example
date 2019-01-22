import React from "react";
import "./list.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, deleteItem } from "../../actions/listAction";
import ListView from "../../components/listView/listView";
import AddList from "../../components/addList/addList";
import Header from "../../components/header/header";
import PropTypes from "prop-types";

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
        {/*<h1 className="main">
          <Link className="link" to="/">
            React Home Page
          </Link>
        </h1>*/}
        <Header />
        <h3 className="list">Redux List Example</h3>
        <div className="row container">
          <AddList add={this.props.add} />
          <ListView
            list={this.props.listItems.list}
            delete={this.props.delete}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listItems: state.listReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: text => dispatch(addItem(text)),
    delete: index => dispatch(deleteItem(index))
  };
};

List.propTypes = {
  list: PropTypes.arrayOf({
    title: PropTypes.string
  }),
  listItems: PropTypes.object,
  add: PropTypes.func,
  delete: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
