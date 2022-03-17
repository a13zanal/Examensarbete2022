import React, { useEffect } from 'react';
import * as d3 from 'd3';

const D3chart = ({data}) => {

useEffect(() => {
// SVG container
const width = 800;
const height = width/2;
    
const svg = d3.select('#D3charts')
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height]);

// Scaling
const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([60, width - 20])
    .padding(0.1)

const y = d3.scaleLinear()
    .domain([0, 400]) // Skalan på Y-axeln
    .range([height - 50, 50])

// Axes
function yAxis(g) {
    g.attr("transform", `translate(${60}, 0)`)
        .call(d3.axisLeft(y).ticks(null, data.format))
        .attr("font-size", '20px')
}
function xAxis(g) {
    g.attr("transform", `translate(0,${height - 50})`)
        .call(d3.axisBottom(x).tickFormat(i => data[i].team))
        .attr("font-size", '20px')
}

// SVG data
svg.append("g")
    .attr("fill", 'royalblue')
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(a.starpoints, b.starpoints)))
    .join("rect")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(d.starpoints))
        .attr('title', (d) => d.starpoints)
        .attr("class", "rect")
        .attr("height", d => y(0) - y(d.starpoints))
        .attr("width", x.bandwidth());

svg.append("g").call(xAxis);
svg.append("g").call(yAxis);
svg.node();

});

    return(
        <div className='charts'>
            <h3>D3chart</h3>
            <div id="D3charts"></div>
        </div>
    );
}

export default D3chart;