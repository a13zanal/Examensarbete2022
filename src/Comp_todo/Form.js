import React from 'react';

const Form = ({inputText, setInputText, setTodos, todos}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitBtnHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() *1000}
        ]);
        setInputText("");
    };
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text"/>
            <button onClick={submitBtnHandler} type='submit'>submit</button>
        </form>
    );
}

export default Form;