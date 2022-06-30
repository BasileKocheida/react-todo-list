import React, { useState } from "react";
import '../TodoList.css';


function TodoList(){

    const [userInput, setUserInput] = useState('');
    const [items, setItems] = useState([]);

    const onChange = (e) => {
        setUserInput(e.target.value);
        // console.log(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        setItems(items => [...items, {value: userInput, isMark: false}])
        setUserInput('')
    }

    const deleteTodo = (item) => {
        
        console.log(item);
        let newItems = items.filter((index) => (index !== item));
        setItems(newItems)

    }

    const checkItem = (item, key) => {
        let newItems = items.map((item, index)=>{
            if(key === index){
                return {value: item.value, isMark: !item.isMark}
            }else{
                return item
            }
        })
        console.log(newItems);
        setItems(newItems)
    }
    
    const renderTodos = () => {
        return items.map((item, key) => {
            return (
                <div className="container" key={item}>
                    <div className={item.isMark ? "itemTrue": "item"}>
                        <p className={item.isMark ? "itemChecked": ""}>{item.value}</p>
                        <button className="btn" onClick={() => deleteTodo(item)}>X</button>
                    { item.isMark ? <input onClick={() => checkItem(item, key)} type="checkbox" id="scales" name="scales"checked /> : 
                        <input onClick={() => checkItem(item, key)} type="checkbox" id="scales" name="scales" />
                    
                    }
                    </div>


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