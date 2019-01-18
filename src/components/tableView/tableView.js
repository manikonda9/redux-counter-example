import React from "react";
import { Link } from "react-router-dom";

class tableView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.items,
      items: this.props.items,
      searchInput: ""
    };
  }

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
    const items = this.state.items;
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
            {items.map((data, key) => (
              <tr key={key}>
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

export default tableView;
