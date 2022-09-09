import { useState } from "react";

function TODOReducer () {

    const [text, setText] = useState();
    const [todoList, setTodoList] = useState();

    function add() {

    }

    return (
        
        <>
        {/* // input and add button  */}
            <div>

                <input onChange={(e) => setText(e.target.value)} placeholder={"type in the note"}/>
                <button onClick={add}></button>
            </div>
        </>
    );
}

export default TODOReducer;