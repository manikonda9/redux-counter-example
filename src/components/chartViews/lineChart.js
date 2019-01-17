import React from "react";
import Highcharts from "highcharts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
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
        series: [
          {
            name: "line chart",
            data: props.data
          }
        ],
        plotOptions: {
          series: {
            //pointStart: 2010,
            point: {
              events: {
                click: function() {
                  props.change(this.y);
                }
              }
            }
          }
        }
      }
    };
  }

  componentDidMount = () => {
    Highcharts.chart(this.state.options);
  };

  render() {
    return <div id="container" />;
  }
}

export default LineChart;
