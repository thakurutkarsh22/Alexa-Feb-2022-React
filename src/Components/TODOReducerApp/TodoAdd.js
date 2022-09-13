import { useState } from "react";

function TodoAdd(props) {
    const {add, darkMode} = props;

    console.log("darkMode in todoAdd", darkMode);

    const [todo, setTodo] = useState("");
    return (
        <>
            <input value={todo} onChange={(e) => {setTodo(e.target.value)}}  placeholder="Enter todo"/>
            <button onClick={() => {
                add(todo);
                setTodo("")
            }}>Add</button> 
        </>
    )
}

export default TodoAdd;