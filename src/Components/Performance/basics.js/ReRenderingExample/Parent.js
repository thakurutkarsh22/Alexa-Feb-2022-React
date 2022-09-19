import React, { useEffect, useState } from "react";
import Child from "./Child";

function Parent() {
    // const INITIAL_COUNT = {
    //     count: 0, 
    //     instance: 1,
    //  }

    // const [count, setCountObj] = useState(INITIAL_COUNT);
    const [,setBlank] = useState(0.56);

    const [count, setCountObj] = useState(0);

    // useEffect(() => {
    //     console.log(count, "Parent:::: inside the useEffect");
    // }, [count]);

    console.log("redering, parent");

    const onClick = React.useCallback(() => {
        setCountObj(old => old + 1);
    }, [])

    return (

        <>
            Parent
            {count}
            <Child  onClick={onClick} />
            
            {/* <button onClick={() => setCountObj(old => {
                return {
                    ...old,
                    count: old.count + 1,
                    instance: old.instance + 1,

                }
            })}>Click me </button> */}
            {/* <button onClick={() => setBlank(old => old+Math.random())}>Click me </button> */}
        </>
    )
}

export default Parent;