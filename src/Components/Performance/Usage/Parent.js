import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
    const[state, updateState] = useState(0);

    // bar wont be changed with re-rendering // 
    // bar will only change when dependency changes in the array 
    // use call back can store function 

    const myFunction = () => {}
    // const bar = useCallback(myFunction, []);

    // calling a finction
    //  -> logic inside the useCallback is heavy ... 

    // garbage collection ... 
    // 2nd reder  ... the callback function will be not garbage collected  .... 


    
    // useMemo can store value 
    const baz  = useMemo(() => [1,2,3], []);

    const bar = useMemo(() => myFunction, []);

    console.log("render: parent");

    return(
        <>
            <Child  bar={bar} baz={baz} />
            <button onClick={() => updateState(old => old + 1)}> Click Me </button>
        </> 
    )
}
export default Parent;

 // 
// useCallback() --> function
// useMemo() --> value (string, array, object, function);


// React.memo(Component) --> it memoise the whole component.... 
// -> if any props change 
        // -> then rerender
    // else 
        // -> dont  do anything ... 
