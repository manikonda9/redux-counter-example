import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import PropTypes from "prop-types";
import { dataRef } from "../../config/firebase";
import { getData } from "../../actions/tableAction";
import TableView from "../../components/tableView/tableView";
import "./table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.get();
  }

  componentWillMount = () => {
    /*let items = [];
        const ordersRef = dataRef.orderByKey();
        ordersRef.once("value", snapshot => {
          snapshot.forEach(child => {
            items.push(child.val());
          });
          items.sort(function(x, y) {
            if (x.Name > y.Name) {
              return 1;
            } else {
              return -1;
            }
          });
    
          this.setState({
            items: items,
            data: items
          });
        });*/
    //this.props.get();
  };
  render() {
    const data = this.props.list.data;
    const items = _.map(data, (val, key) => {
      return val;
    });
    if (items.length > 0) {
      return (
        <div className="container">
          <TableView items={items} />
          <button className="btn btn-success pull-right">
            <Link to="/form" className="primary">
              Add
            </Link>
          </button>
        </div>
      );
    } else {
      return <div className="container text-center loader">Loading .....</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    list: state.tableReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get: () => dispatch(getData())
  };
};

Table.propTypes = {
  list: PropTypes.object,
  get: PropTypes.func,
  items: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
