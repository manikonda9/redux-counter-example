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
      listData: [],
      lineData: [],
      columnData: []
    };
  }

  componentWillMount = () => {
    axios
      .get("https://my-practice-project-f6467.firebaseio.com/sales.json")
      .then(res => {
        let list = [...res.data];
        this.setState({
          listData: list,
          lineData: list,
          columnData: list.map(a => a + 20000)
        });
      });
  };

  chageState = val => {
    const data = this.state.listData;
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
    const lineData = this.state.lineData;
    const columnData = this.state.columnData;
    return (
      <div>
        <h1 className="main">
          <Link className="link" to="/">
            React Home Page
          </Link>
        </h1>
        <h3 className="main">High Chart Example</h3>
        {lineData.length > 0 ? (
          <ListChart data={lineData} change={this.chageState} />
        ) : (
          <div className="container text-center loader">Loading .....</div>
        )}
        {lineData.length > 0 ? (
          <ColumnChart lineData={lineData} columnData={columnData} />
        ) : (
          <div className="container text-center loader">Loading .....</div>
        )}
        <div id="column" />
      </div>
    );
  }
}

export default Chart;
