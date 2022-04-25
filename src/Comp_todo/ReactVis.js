import React from "react";
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalBarSeries
} from "react-vis";

const ReactVis = ({data}) => {
    const width = 800;
    const height = width/2;

    return (
        <div className='charts'>
            <h3>React-Vis</h3>
            <XYPlot
                xType="ordinal"
                width={width}
                height={height}
                color="#AA4BF5"
                yDomain={[0, 10000]}
                margin={{
                    left: 70
                }}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={data} />
            </XYPlot>
        </div>
    );
}

export default ReactVis;