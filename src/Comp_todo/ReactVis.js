import React, { useLayoutEffect, Profiler } from "react";
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from "react-vis";

const ReactVis = ({ data }) => {
    const width = 800;
    const height = width / 2;

    let timeDuration = 0;

    const callback = (
        id,
        phase,
        actualDuration,
        startTime,
        baseDuration,
        commitTime,
        interactions
    ) => {
        timeDuration = timeDuration + actualDuration;
        console.log(
            "id " +
                id +
                " startTime " +
                startTime +
                " actualDuration " +
                actualDuration +
                " baseDuration " +
                baseDuration +
                " commitTime " +
                commitTime +
                " phase " +
                phase +
                " interactions " +
                interactions
        );
        console.log("timeDuration ", timeDuration);
    };

    const getActualDuration = () => {
        console.log("klar ", timeDuration);

        if (timeDuration > 0) {
            localStorage.setItem("msRV", timeDuration);
        } else {
            console.log("timeDuration = 0");
        }
    };

    setTimeout(getActualDuration, 3000);

    return (
        <div className="charts">
            <h3>React-Vis</h3>
            <Profiler id="ReactVis" onRender={callback}>
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
            </Profiler>
        </div>
    );
};

export default ReactVis;
