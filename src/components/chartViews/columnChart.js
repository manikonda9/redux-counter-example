import React from "react";
import Highcharts from "highcharts";

class ColumnChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnOptions: {
        chart: {
          //type: 'column',
          renderTo: "column"
        },
        title: {
          text: "Years Growth"
        },
        subtitle: {
          text: "Based on Line chart data variations"
        },
        yAxis: {
          title: {
            text: "Growth"
          }
        },
        xAxis: {
          title: {
            text: "Years"
          },
          categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
        },
        legend: {
          enabled: false
        },
        series: [
          {
            name: "Growth",
            type: "column",
            color: "orange",
            data: this.props.columnData
          },
          {
            name: "Growth",
            type: "line",
            color: "green",
            data: this.props.lineData
          }
        ]
      }
    };
  }

  componentWillMount = () => {
    this.setState({
      chart: Highcharts.chart(this.state.columnOptions)
    });
  };

  componentWillReceiveProps = () => {
    /*this.setState(prevState => ({
      columnOptions: {
        ...prevState.columnOptions,
        series: [
          {
            name: "Changes Column",
            type: "column",
            data: this.props.columnData
          },
          {
            name: "Changes Line",
            type: "line",
            data: this.props.lineData
          }
        ]
      }
    }));*/
    const columnChart = this.state.chart;
    //chart.update(this.state.columnOptions);
    const lineData = [...this.props.lineData];
    const columnData = [...this.props.columnData];
    columnChart.series[0].update({ data: columnData });
    columnChart.series[1].update({ data: lineData });
  };

  render() {
    return <div id="column" />;
  }
}

export default ColumnChart;
