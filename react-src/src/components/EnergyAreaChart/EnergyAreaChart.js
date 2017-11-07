// https://github.com/react-d3/react-d3-basic/blob/master/example/src/area.jsx

import React, { Component } from "react";
import { AreaChart } from "react-d3-basic";

class EnergyAreaChart extends Component {

  render() {

    var data = this.props.data;
    var chartSeries = [
        {
          field: "energy",
          name: "Energy Usage",
          color: "#ff7f0e",
          area: true,
          style: {
            strokeOpacity: 1,
            fillOpacity: 0.4
          }
        }
      ],
      x = function(d) {
        return d.start_time;
      },
      xScale = "time",
      y = function(d) {
        return +d;
      };

    return (
      <div>
        <AreaChart
          data={data}
          chartSeries={chartSeries}
          x={x}
          y={y}
          xScale={xScale}
        />
      </div>
    );
  }
}
export default EnergyAreaChart;
