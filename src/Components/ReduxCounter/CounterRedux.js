import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";


function CounterRedux() {

    const counter = useSelector(storeState => storeState.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(actions.increment());
    }

    const decrement = () => {
        dispatch(actions.decrement());
    }

    const addWith = () => {
        dispatch(actions.addWith(10));
    }

    useEffect(() => {
        console.log("api call", counter);
    }, [counter])

    return(
        <>
            <div>Counter</div>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addWith}>AddWith</button>
            {/* <button onClick={addSync}>Add sync</button> */}

        </>
    )

}

export default CounterRedux;