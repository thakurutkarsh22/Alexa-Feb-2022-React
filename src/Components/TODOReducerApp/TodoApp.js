import { useReducer } from "react";
import { ADD_ACTION } from "./actions/todo.actions";
import { initialState, reducer } from "./reducers/todo.reducer";
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";

function TodoApp(props) {
    // state = todos (list of todos)
    const [state, dispatch] = useReducer(reducer, initialState);


    function add(text) {
        dispatch(ADD_ACTION(text))
    }

    return (
        <>
            <TodoAdd  add={(text) => add(text)}/>
            <Todo todos={state.todos} />
        
        </>

    )
}

export default TodoApp;