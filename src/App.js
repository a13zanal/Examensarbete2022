import './App.css';
import React, { useState } from 'react';
import D3chart from './Comp_todo/D3chart';
import Recharts from './Comp_todo/Recharts';
import ReactVis from './Comp_todo/ReactVis';
import data from './Comp_todo/Data/MOCK_DATA.json';

function App() {

  const sortedData = [...data].slice().sort((a, b) => b.starpoints - a.starpoints);

  const [selectedLib, setSelectedLib] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h3> LEADERBOARD WITH JS VISUALIZATION LIBRARIES </h3>
        <p>Please select which library you want to see a bar chart of</p>
        <div className="buttons">
          <button className='D3' onClick={() => setSelectedLib('D3')}>D3</button>
          <button className='ReactVis' onClick={() => setSelectedLib('ReactVis')}>ReactVis</button>
          <button className='Recharts' onClick={() => setSelectedLib('Recharts')}>Recharts</button>
        </div>
        <p className='sig'>@a13zanal</p>
      </header>
      <div className='charts-container'>
        {selectedLib === 'D3' && <D3chart data={sortedData} />}
        {selectedLib === 'ReactVis' && <ReactVis data={sortedData} />}
        {selectedLib === 'Recharts' && <Recharts data={sortedData} />}
      </div>
    </div>
  );
}

export default App;
