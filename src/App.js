import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Comp_todo/Form';
import Todolist from './Comp_todo/Todolist';

function App() {
  // Använder state för hantera todos
  // const [värdet, funktionen som tillåter dig ändra värdet] = "" för text, [] för array
  const [todos, setTodos] = useState([]); // State som håller koll på todos
  
  // Only once when reload
  useEffect(() => {
    LocalstorageGet();
  }, []);

  //use effect
  useEffect(() => {
    LocalstorageSave();
  }, [todos]);

  //Localstorage
  const LocalstorageSave = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const LocalstorageGet = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localtodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localtodo);
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h3> TODO </h3>
        <Form todos={todos} setTodos={setTodos}/> 
        {/* Kopplingen mellan App.js och Form komponenten, med props som skickas här från main till komponenterna, obs kan ej skicka uppåt bara nedåt */}
        <Todolist todos={todos} setTodos={setTodos}/>
      </header>
    </div>
  );
}

export default App;
