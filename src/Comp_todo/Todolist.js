import React from "react";
import Todo from "./Todo";

const Todolist = ({todos, setTodos}) => {
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} text={todo.text} todo={todo} setTodos={setTodos} todos={todos}/>
                ))}
                {/*Map över todoarrayen som skapar en ny li element för varje ny todo
                - Map() låter dig manipulera objekten i en array genom att iterera och komma åt enskilda objekt.
                - Används oftast för att rendera en lista med data till DOM*/}
            </ul>
        </div>
    );
}

export default Todolist;