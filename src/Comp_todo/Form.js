import React, {useState} from 'react';

const Form = ({setTodos}) => {
    const [inputText, setInputText] = useState(""); // State som håller koll på värdet i input
    // JavaScript code och funktioner kan skickas här
    // Event
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        // Sätter ett nytt state värde till de som skrivits in i input
        // e innebär vad som just hände typ, för att få ut informaitonen använd console.log(e);
    };
    const submitBtnHandler = (e) => {
        e.preventDefault(); // Hindrar browser refresha sidan vid submit
        setTodos( function (todos) {
            return [...todos, {text: inputText, completed: false, id: Math.random() *1000}];
            // ... (= Spread syntax) Kopiera Todovärdet från state (SetTodos)
        });
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
// Exporterar vår komponenet så vi kan Koppla den till App.js

// Kan använda <> och </> istället för div eftersom return bara kan hantera en knot del. 

// setTodos([
//      ...todos, {text: inputText, completed: false, id: Math.random() *1000}
// ]);
// ------------  Gör såhär nedan istället för att hindra bugg! -------------
// setTodos( function (todos) {
//    return [...todos, {text: inputText, completed: false, id: Math.random() *1000}];
// });
