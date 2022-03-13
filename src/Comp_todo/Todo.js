import React from "react";

const Todo = ({text, todo, setTodos}) => {
    // Events
    const deleteHandler = () => {
        setTodos(function (todos) {
            return (todos.filter((del) => del.id !== todo.id));
        }); 
        // Jämför det todoelementet med de todoelement från state (setTodos), stämmer det så deletas todon
        // filtrerar ut det todoelement som har samma id som som id från setTodos
    };

    return (
        <li className="todo-item">
            {text}
            <button onClick={deleteHandler}>X</button>
        </li>
    );
}

export default Todo;