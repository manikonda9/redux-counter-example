import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { dataRef } from "../../config/firebase";
import { getData } from "../../actions/tableAction";
import "./table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      items: [],
      searchInput: ""
    };
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
    this.props.get();
  };

  searchTableData = () => {
    let value = this.state.searchInput;

    let data = this.state.data;
    let items = [];
    data.forEach(function(ele) {
      if (ele.Name.toLowerCase().indexOf(value) > -1) {
        items.push(ele);
      }
    });

    this.setState({
      items: items,
      searchInput: ""
    });
  };

  onHandleChange = e => {
    let value = e.target.value;
    this.setState({
      searchInput: value
    });
  };

  render() {
    const { data } = this.props.list;

    const items = data;
    return (
      <div className="container">
        <h1 className="main">
          <Link className="link" to="/">
            React Home Page
          </Link>
        </h1>
        <h3 className="main">Table Search Example</h3>
        <input
          type="text"
          value={this.state.searchInput}
          onChange={this.onHandleChange}
        />
        <button className="btn btn-success" onClick={this.searchTableData}>
          Search
        </button>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Age</th>
              <th>Place</th>
              <th>Email Id</th>
            </tr>
          </thead>
          <tbody>
            {items.map((data, index) => (
              <tr key={index}>
                <td>{data.Name}</td>
                <td>{data.Id}</td>
                <td>{data.Age}</td>
                <td>{data.Place}</td>
                <td>{data.EmailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
