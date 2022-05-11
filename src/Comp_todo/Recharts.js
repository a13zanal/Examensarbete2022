import React, { useLayoutEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Recharts = ({ data }) => {
    const startRecharts = performance.now();
    localStorage.setItem("starttimeRecharts", startRecharts);
    console.log("startRecharts ", startRecharts);

    useLayoutEffect(() => {
        const stopRecharts = performance.now();
        localStorage.setItem("stoptimeRecharts", stopRecharts);
        console.log("stopRecharts ", stopRecharts);

        const starttime = parseFloat(localStorage.getItem("starttimeRecharts"));
        const stoptime = parseFloat(localStorage.getItem("stoptimeRecharts"));
        console.log("msRecharts", stoptime - starttime);
        console.log(stoptime, localStorage.getItem("stoptimeRecharts"));
        console.log(starttime);
    });

    return (
        <div className="charts">
            <h3>Recharts</h3>
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
        </div>
    );
};

export default Recharts;
