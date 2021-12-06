import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ posts }) => {
  const d3Chart = useRef();
  

  useEffect(() => {
    DrawChart(posts);
  }, []);

  const margin = { top: 50, right: 30, bottom: 30, left: 60 };

  const DrawChart = (data) => {
    const chartwidth = "900";
    const chartheight = "500";

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    // x scale
    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.1);

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].month)
          .tickSizeOuter(0)
      );

    const max = d3.max(data, function (d) {
      return d.totalPosts;
    });

    // y scale
    const y = d3
      .scaleLinear()
      .domain([0, max])
      .range([chartheight, margin.top]);

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

    // Draw bars
    svg
      .append("g")
      .attr("fill", "#65f0eb")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.totalPosts))
      .attr("height", (d) => y(0) - y(d.totalPosts))
      .attr("width", x.bandwidth());
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <svg style={{ maxWidth: "90vw", maxHeight: "90vh" }} ref={d3Chart}></svg>
    </div>
  );
};

export default BarChart;
