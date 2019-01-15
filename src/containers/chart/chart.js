import React from "react";
import Highcharts from "highcharts";
import { Link } from "react-router-dom";
import "./chart.css";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Revune",
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }
      ],
      value: 0,
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
            data: [53934, 62503, 67177, 79658, 107031, 129931, 147133, 164175]
          },
          {
            name: "Growth",
            type: "line",
            color: "green",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          }
        ]
      },
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    };
  }

  componentDidMount() {
    this.highChartsRender();
  }

  highChartsRender = () => {
    var that = this;
    const options = {
      chart: {
        renderTo: "container",
        type: "line"
      },
      title: {
        text: "Solar Employment Growth by Sector, 2010-2016"
      },

      subtitle: {
        text: "Source: thesolarfoundation.com"
      },

      yAxis: {
        title: {
          text: "Number of Employees"
        }
      },

      xAxis: {
        title: {
          text: "Years"
        },
        categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
      },
      legend: {
        enabled: false,
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          //pointStart: 2010,
          point: {
            events: {
              click: function() {
                that.chageState(this.y);
              }
            }
          }
        }
      },

      series: that.state.series
    };
    Highcharts.chart(options);

    Highcharts.chart(that.state.columnOptions);
  };

  chageState = val => {
    let data = this.state.data;
    const arr = data.map(a => {
      return a + val;
    });
    const arr2 = data.map(a => {
      return a + val / 2;
    });
    let columnOptions = this.state.columnOptions;
    columnOptions.series[0].data = arr;
    columnOptions.series[1].data = arr2;
    this.setState({
      columnOptions: columnOptions
    });

    Highcharts.chart(this.state.columnOptions);
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
        <div id="container" />
        <div id="column" />
      </div>
    );
  }
}

export default Chart;
