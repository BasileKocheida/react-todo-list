import React, { useState } from "react";

function TodoList(){

    const [userInput, setUserInput] = useState('');
    const [items, setItems] = useState([]);

    const onChange = (e) => {
        setUserInput(e.target.value);
        // console.log(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        setUserInput('')
        setItems(items => [...items, userInput])
    }

    const deleteTodo = (e) => {
        e.preventDefault();
        const array = items;
        const index = array.indexOf(e.target.value)
        console.log(index);
        let newItems = array.splice(index, 1);
        setItems(newItems)

        console.log("ppl",array);
        console.log(newItems);

    }
    
    const renderTodos = () => {
        return items.map((item) => {
            return (
                <div key={item}>
                    {item} | <button onClick={deleteTodo}>X</button>
                </div>
            )
        })
    }

    return(
        <div>
            <h1>Ma Todo List</h1>
            <form>
                <input 
                    value={userInput} 
                    type="text" 
                    placeholder="Ajouter une tâche"
                    onChange={onChange}
                />
                <button onClick={addTodo}>Ajouter</button>
            </form>
            <div>
                {renderTodos()}
            </div>
        </div>
    );
}

export default TodoList;