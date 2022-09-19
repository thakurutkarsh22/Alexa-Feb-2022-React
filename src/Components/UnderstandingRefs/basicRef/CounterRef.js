import { useEffect, useRef, useState } from "react";


// anti-pattern for useRef

function CounterRef(props) {
    const [counterVal, setCounterVal] = useState(0)
    
    
    // ref can keep track of prev value ..... 

    const countref = useRef(null);

    // if(true) {
    //     countref = 12;
    // }

    useEffect(() => {
        countref.current = counterVal;
    })


    return(
        <>
            oldVal: {countref.current}
            Count: {counterVal}
          <button onClick={() => {setCounterVal(old => old + 1)}}>+1</button>
        </>
    );
}

export default CounterRef;