import React, { useLayoutEffect, Profiler } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Recharts = ({ data }) => {
    // const startRecharts = performance.now();
    // localStorage.setItem("starttimeRecharts", startRecharts);
    // console.log("startRecharts ", startRecharts);

    // useLayoutEffect(() => {
    //     const stopRecharts = performance.now();
    //     localStorage.setItem("stoptimeRecharts", stopRecharts);
    //     console.log("stopRecharts ", stopRecharts);

    //     const starttime = parseFloat(localStorage.getItem("starttimeRecharts"));
    //     const stoptime = parseFloat(localStorage.getItem("stoptimeRecharts"));
    //     console.log("msRecharts", stoptime - starttime);
    //     console.log(stoptime, localStorage.getItem("stoptimeRecharts"));
    //     console.log(starttime);
    // });

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
            localStorage.setItem("msRC", timeDuration);
        } else {
            console.log("error");
        }
    };

    setTimeout(getActualDuration, 9000);

    return (
        <div className="charts">
            <h3>Recharts</h3>
            <Profiler id="Recharts" onRender={callback}>
                <ResponsiveContainer width={800} aspect={2}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 50,
                            right: 50,
                            left: 50,
                            bottom: 50,
                        }}
                    >
                        <XAxis dataKey="team" />
                        <YAxis domain={[0, 10000]} tickCount={11} />
                        <Bar
                            dataKey="starpoints"
                            fill="#AA4BF5"
                            isAnimationActive={false}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </Profiler>
        </div>
    );
};

export default Recharts;
