// ----------- react-toolkit -------------

import { configureStore, createSlice } from "@reduxjs/toolkit";

//  action ... 
// reducer ..... 
// initial state .... 
// connect to store ....
// dispatch() 

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter: 0},
    reducers: {
        increment(state, action) {
            // in here we can mutate
            // emmt 
            // state = {counter: state.counter + 1}
            state.counter +=1;
        },
        decrement(state, action) {
            // in here we can mutate
            // emmt 
            // state = {counter: state.counter + 1}
            state.counter -=1;
        },
        addWith(state, action) {
            state.counter += action.payload;
        },

    }
});


export const actions = counterSlice.actions;
console.log("actions", actions);


//  -----  store ------- 
const storeSlice = configureStore({
    reducer: counterSlice.reducer
})

export default storeSlice;



//  if you want api calls or side effects to save or do anything 

// ESTABLISHED: we can't do in reducer, action or store..

// Solution1: In useEffect() in your consumer component.

// SOlution2: ActionCreator  learn: thunk 