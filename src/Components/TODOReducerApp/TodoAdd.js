import { useState } from "react";

function TodoAdd(props) {
    const {add} = props;

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