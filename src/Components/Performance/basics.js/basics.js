// 

import { useState } from "react";

// 3 broader life cycle for a react project

// 1. rendering  
// 2. reconciliation
// 3.commit


// 

function Component() {

    const [count, setCount] = useState(0)

    console.log("redering, Component");

    return (

        <>
            Hey there utkarsh
            <button onClick={() => setCount(5)}>Click me </button>
        </>
    )
}

export default Component;