import "./App.css";
import React, { useState } from "react";
import D3chart from "./Comp_todo/D3chart";
import Recharts from "./Comp_todo/Recharts";
import ReactVis from "./Comp_todo/ReactVis";
import dataThousand from "./Comp_todo/Data/MOCK_DATA_1000.json";
import dataTenThousand from "./Comp_todo/Data/MOCK_DATA_10000.json";
import dataFemThousand from "./Comp_todo/Data/MOCK_DATA_50000.json";

function App() {
    const sortedData = [...dataThousand]
        .slice()
        .sort((a, b) => b.starpoints - a.starpoints);

    //const sortedData = [...dataTenThousand].slice().sort((a, b) => b.starpoints - a.starpoints);

    // const sortedData = [...dataFemThousand]
    //     .slice()
    //     .sort((a, b) => b.starpoints - a.starpoints);

    const [selectedLib, setSelectedLib] = useState();

    var uniqueTeamName = 1;

    const dataName = sortedData.map((d) => {
        ++uniqueTeamName;
        return { x: d.team + uniqueTeamName, y: d.starpoints };
    });

    return (
        <div className="App">
            <header className="App-header">
                <h3> LEADERBOARD WITH JS VISUALIZATION LIBRARIES </h3>
                <p>
                    Please select which library you want to see a bar chart of
                </p>
                <div className="buttons">
                    <button className="D3" onClick={() => setSelectedLib("D3")}>
                        D3
                    </button>
                    <button
                        className="ReactVis"
                        onClick={() => setSelectedLib("ReactVis")}
                    >
                        ReactVis
                    </button>
                    <button
                        className="Recharts"
                        onClick={() => setSelectedLib("Recharts")}
                    >
                        Recharts
                    </button>
                </div>
                <p className="sig">@a13zanal</p>
            </header>
            <div className="charts-container">
                {selectedLib === "D3" && <D3chart data={sortedData} />}
                {selectedLib === "ReactVis" && <ReactVis data={dataName} />}
                {selectedLib === "Recharts" && <Recharts data={sortedData} />}
            </div>
        </div>
    );
}

export default App;
