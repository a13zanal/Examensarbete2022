import './App.css';
import React from 'react';
import D3chart from './Comp_todo/D3chart';
import Recharts from './Comp_todo/Recharts';
import ReactVis from './Comp_todo/ReactVis';
import data from './Comp_todo/Data/dataSmall.json';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h3> LEADERBOARD </h3>
        {/* Kopplingen mellan App.js och Form komponenten, med props som skickas här från main till komponenterna, obs kan ej skicka uppåt bara nedåt */}

      </header>
      <div className='charts-container'>
        <D3chart data={data} />
        <ReactVis data={data} />
        <Recharts data={data} />
      </div>
    </div>
  );
}

export default App;
