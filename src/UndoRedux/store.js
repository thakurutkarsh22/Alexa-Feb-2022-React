import { configureStore } from "@reduxjs/toolkit";
import undoable from "redux-undo";
import counterSlice from "./counterSlice";

const undoReduxStore = configureStore({
    reducer: {
        counterReducer: undoable(counterSlice.reducer),
        toggleRefucer: null,
    }
});

export default undoReduxStore;


// / club different reducers 