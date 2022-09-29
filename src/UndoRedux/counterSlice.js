import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {score: 0},
    reducers: {
        increment: (state) => {
            //  in here we can mutate .... // in the backed this is making sure with the help of emmet 
            // to not mutate in the backend .. 

            state.score +=1;
        },
        decrement: (state) => {
            state.score -=1;
        },
    }
});

export const actionsUndoRedux = counterSlice.actions;  //  it is vey easy to do 
// you dont get messed up in types .... 

export default counterSlice;