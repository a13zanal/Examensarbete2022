import React from "react";

const Todo = ({text}) => {

    return (
        <div className="todocontainer">
            <li>{text}</li>
            <button>Completed</button>
            <button>Delete</button>
        </div>
    );
}

export default Todo;