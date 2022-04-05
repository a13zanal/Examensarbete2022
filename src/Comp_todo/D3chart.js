import React, { useEffect, useLayoutEffect } from 'react';
import * as d3 from 'd3';
import continuousColorLegend from 'react-vis/dist/legends/continuous-color-legend';

const D3chart = ({ data }) => {

    useEffect(() => {
        // SVG container
        const width = 800;
        const height = width / 2;

        // console.time("D3 react");
        // console.time("d3");

        const svg = d3.select('#D3')
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", "0 0 800 400")

        // Scaling
        const x = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([60, width - 20])
            .padding(0.1)

        const y = d3.scaleLinear()
            .domain([0, 10000]) // Skalan på Y-axeln
            .range([height - 50, 50])

        // Axes
        function yAxis(g) {
            g.attr("transform", `translate(${60}, 0)`)
                .call(d3.axisLeft(y).ticks(null, data.format))
                .attr("font-size", '15px')
        }
        function xAxis(g) {
            g.attr("transform", `translate(0,${height - 50})`)
                .call(d3.axisBottom(x).tickFormat(i => data[i].team))
                .attr("font-size", '15px')
        }

        // SVG data
        svg.append("g")
            .attr("fill", '#AA4BF5')
            .selectAll("rect")
            .data([...data]) // ... Skapar en local kopia
            .join("rect") //rect = Rectangle
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(d.starpoints))
            .attr('title', (d) => d.starpoints)
            .attr("class", "rect")
            .attr("height", d => y(0) - y(d.starpoints))
            .attr("width", x.bandwidth());

        svg.append("g").call(xAxis);
        svg.append("g").call(yAxis);
        svg.node();

        // console.timeEnd("d3")
    }, []);

    // useLayoutEffect(() => {
    //     console.timeEnd("D3 react");
    // }, []);

    return (
        <div className='charts'>
            <h3>D3chart</h3>
            <div id="D3"></div>
        </div>
    );
}

export default D3chart;