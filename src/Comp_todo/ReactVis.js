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

    const dataName = data.map((d)=> {
        return {x: d.team, 
        y: d.starpoints}
    });

    return (
        <div className='charts'>
            <h3>React-Vis</h3>
            <XYPlot
                xType="ordinal"
                width={width}
                height={height}
                color="#AA4BF5"
                yDomain={[0, 10000]} // Y-axel Skala
                //xRange={[0, 10]}
                margin={{
                    left: 70 // För att få Y-axelns siffror att visas fullt
                }}
            >
                
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={dataName} />
            </XYPlot>
        </div>
    );
}

export default ReactVis;