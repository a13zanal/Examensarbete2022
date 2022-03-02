import './App.css';
import React from 'react';

function App() {
  // Save data
  var saveData = () => {
    const whattodo = document.getElementById('new-todo').value;
    localStorage.setItem('WhatTodo', whattodo);
    console.log('setItem' + ' ' + whattodo);
  }
  //Get data
  var getData = () => {
    const data = localStorage.getItem("WhatTodo")
    console.log('getItem' + ' ' + data);
  }

  // delete data
  var deleteData = () => {
    localStorage.removeItem("WhatTodo")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3> LEADERBOARD -1 </h3>
        <label>Todo-list</label>
        <div>
          <input 
            type='text'
            id='new-todo'
            className='input input_lg'
            name='text'
            placeholder='Add a to-do'
            autoComplete='off'
          />
          <button onClick={saveData}>Add</button>
        </div>

        <div>
          <ul>
            <li><button onClick={getData}>get</button></li>
          </ul>
        </div>

        <div>
          <p>You have X todo</p>
          <button onClick={deleteData}>Clear!</button>
        </div>

      </header>
    </div>
  );
}

export default App;
