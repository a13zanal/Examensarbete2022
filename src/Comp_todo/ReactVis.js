import React, { useEffect, useLayoutEffect } from "react";
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from "react-vis";

const ReactVis = ({ data }) => {
    const width = 800;
    const height = width / 2;

    // useEffect hook is invoked after the DOM has been painted.
    useEffect(() => {
        const startReactVis = new Date().getTime();
        localStorage.setItem("starttimeReactVis", startReactVis);
        console.log("startReactVis ", startReactVis);
    });

    // useLayoutEffect hook is invoked synchronously before changes are painted on the screen.
    useLayoutEffect(() => {
        const stopReactVis = new Date().getTime();
        localStorage.setItem("stoptimeReactVis", stopReactVis);
        console.log("stopReactVis ", stopReactVis);
    });

    const starttime = localStorage.getItem("starttimeReactVis");
    const stoptime = localStorage.getItem("stoptimeReactVis");
    console.log("msReactVis", stoptime - starttime);

    return (
        <div className="charts">
            <h3>React-Vis</h3>
            <XYPlot
                xType="ordinal"
                width={width}
                height={height}
                color="#AA4BF5"
                yDomain={[0, 10000]}
                margin={{
                    left: 70,
                }}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={data} />
            </XYPlot>
        </div>
    );
};

export default ReactVis;
