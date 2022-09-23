import { useEffect, useRef, useState } from "react";
import useStopwatchControl from "./useStopwatchControl";

function Clock() {
    const [counter, setCounter] = useState(1);
    const timeRef = useRef(null);

    const {time, start, stop } = useStopwatchControl({timeRef});

    return (<>
        <div>Clock</div>
        <div>{time}</div>
        <button onClick={() => start()}>Start</button>
        <button onClick={() => stop()}>stop</button>
        <div>{counter}</div>
        <button onClick={() => setCounter(old => old + 1)}>updateState</button>
    </>)
}

export default Clock;
