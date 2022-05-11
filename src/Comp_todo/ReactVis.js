import React, { useLayoutEffect } from "react";
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from "react-vis";

const ReactVis = ({ data }) => {
    const width = 800;
    const height = width / 2;

    const startReactVis = performance.now();
    localStorage.setItem("starttimeReactVis", startReactVis);
    console.log("startReactVis ", startReactVis);

    useLayoutEffect(() => {
        const stopReactVis = performance.now();
        localStorage.setItem("stoptimeReactVis", stopReactVis);
        console.log("stopReactVis ", stopReactVis);

        const starttime = localStorage.getItem("starttimeReactVis");
        const stoptime = localStorage.getItem("stoptimeReactVis");
        console.log("msReactVis", stoptime - starttime);
    });

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
