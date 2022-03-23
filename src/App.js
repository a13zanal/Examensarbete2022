import './App.css';
import React, { useState } from 'react';
import D3chart from './Comp_todo/D3chart';
import Recharts from './Comp_todo/Recharts';
import ReactVis from './Comp_todo/ReactVis';
import StatusTable from './Comp_todo/StatusTable';
// import data from './Comp_todo/Data/dataSmall.json';
import data from './Comp_todo/Data/MOCK_DATA.json';

function App() {

  const [selectedLib, setSelectedLib] = useState();

  const sortedData = [...data].slice().sort((a, b) => b.starpoints - a.starpoints);
  const sortedRowData = [...data].sort((a, b) => b.Rownumber - a.Rownumber);

  
  return (
    <div className="App">
      <header className="App-header">
        <h3> LEADERBOARD </h3>
        {/* Kopplingen mellan App.js och Form komponenten, med props som skickas här från main till komponenterna, obs kan ej skicka uppåt bara nedåt */}
        <button onClick={() => setSelectedLib('D3')}>D3</button>
        <button onClick={() => setSelectedLib('ReactVis')}>ReactVis</button>
        <button onClick={() => setSelectedLib('Recharts')}>Recharts</button>
        <button onClick={() => setSelectedLib('Table')}>Table</button>
      </header>
      <div className='charts-container'>
        {selectedLib === 'D3' && <D3chart data={sortedData} />}
        {selectedLib === 'ReactVis' && <ReactVis data={sortedData} />}
        {selectedLib === 'Recharts' && <Recharts data={sortedData} />}
        {selectedLib === 'Table' && <StatusTable data={sortedData} datarow={sortedRowData} />}
      </div>
    </div>
  );
}

export default App;
