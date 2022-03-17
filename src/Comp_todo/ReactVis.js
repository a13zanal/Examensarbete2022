import React from "react";
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries,
} from "react-vis";
import data from "./Data/dataSmall.json";

class ReactVis extends React.Component {
    render() {
        const width = 800;
        const height = width/2;
        const Domain = [0, height];

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
                >
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries data={dataName} />
                        
                </XYPlot>
            </div>
        );
    }
}

export default ReactVis;