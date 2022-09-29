import { useDispatch, useSelector } from "react-redux";
import { actionsUndoRedux } from "./counterSlice";
import { ActionCreators } from 'redux-undo'

function CounterUndoRedux() {

    const score = useSelector((state) => {
        console.log(state);
        return state.counterReducer.present.score
    });
    const dispatch = useDispatch();

    return (
        <>
            <div>COunter Redux-redo</div>
            <div>Score: {score}</div>
            <button onClick={() => dispatch(actionsUndoRedux.increment())}>+1</button>
            <button onClick={() => dispatch(actionsUndoRedux.decrement())}>-1</button>
            <button onClick={() => dispatch(ActionCreators.undo())}>Undo</button>
            <button onClick={() => dispatch(ActionCreators.redo())}>Redo</button>
        </>

    )
}

export default CounterUndoRedux;