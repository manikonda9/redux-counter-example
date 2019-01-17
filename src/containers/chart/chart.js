import React from "react";
import Highcharts from "highcharts";
import { Link } from "react-router-dom";
import axios from "axios";
import ListChart from "../../components/chartViews/lineChart";
import ColumnChart from "../../components/chartViews/columnChart";
import "./chart.css";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      lineData: [],
      columnData: []
    };
  }

  componentWillMount = () => {
    axios
      .get("https://my-practice-project-f6467.firebaseio.com/sales.json")
      .then(res => {
        this.setState({
          response: res.data,
          lineData: res.data,
          columnData: res.data.map(a => a + 20000)
        });
      });
  };

  chageState = val => {
    const data = this.state.response;
    const arr = data.map(a => {
      return a + val;
    });
    const arr2 = data.map(a => {
      return a + val / 2;
    });
    this.setState({
      lineData: arr2,
      columnData: arr
    });
  };
  render() {
    return (
      <div>
        <h1 className="main">
          <Link className="link" to="/">
            React Home Page
          </Link>
        </h1>
        <h3 className="main">High Chart Example</h3>
        {this.state.response.length > 0 ? (
          <ListChart data={this.state.response} change={this.chageState} />
        ) : (
          <div className="container text-center loader">Loading .....</div>
        )}
        {this.state.response.length > 0 ? (
          <ColumnChart
            lineData={this.state.lineData}
            columnData={this.state.columnData}
          />
        ) : (
          <div className="container text-center loader">Loading .....</div>
        )}
        <div id="column" />
      </div>
    );
  }
}

export default Chart;
