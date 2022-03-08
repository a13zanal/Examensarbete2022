import './App.css';
import React, { useState } from 'react';
import Form from './Comp_todo/Form';
import Todolist from './Comp_todo/Todolist';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h3> TODO </h3>
        <Form  inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
        <Todolist todos={todos} />
      </header>
    </div>
  );
}

export default App;
