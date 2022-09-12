import { useReducer } from "react";

function CounterReducerDis(state, action) {
    console.log("hey state", state, action);
    switch(action.type) {
        case "INCREMENT": 
            return {
                ...state,
                counter: state.counter + 1,
            }
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1,
            }
        case "RESET": 
            return {
                ...state,
                counter: 0,
            }
        default: 
            return state;
    } 

}

const IncrementAction = {
    type: "INCREMENT",

}

const DecrementAction = {
    type: "DECREMENT",

}

const ResetAction = {
    type: "RESET",

}

const defaultState = {
    counter: 0,
    loading: false
}

function CounterReducer() {
    // this reducer function itself CounterReducerDis should be a pure fuction .. 
    // no api calls, no gettting local storage, etc ... 
    const [state, dispatch ] = useReducer(CounterReducerDis, defaultState);

    // const[counter, ] useState;
    // const [reset]

    // 2 use State ... /// 


// action object 
// {
//     type: 
//     value: 
// }

    console.log("render");
    return(
        <>
            <div>counter: {state.counter}</div>
            <button onClick={() => dispatch(IncrementAction)}>+1</button>
            <button onClick={() => dispatch(DecrementAction)}>-1</button>
            <button onClick={() => dispatch(ResetAction)}>Reset</button>
        </>
    );
}

//  

export default CounterReducer;