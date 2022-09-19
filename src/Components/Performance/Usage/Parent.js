import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
    const[state, updateState] = useState(0);

    // bar wont be changed with re-rendering // 
    // bar will only change when dependency changes in the array 
    // use call back can store function 
    const bar = useCallback(() => {}, []);

    // useMemo can store value 
    const baz  = useMemo(() => [1,2,3], []);

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
// useMemo() --> value


// React.memo(Component) --> it memoise the whole component.... 
