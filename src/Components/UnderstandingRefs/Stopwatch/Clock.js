import { useEffect, useRef, useState } from "react";

function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [counter, setCounter] = useState(1);
    const timeRef = useRef(null);

    useEffect(() => {
        timeRef.current = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        console.log(timeRef.current);

        return () => {
            clearInterval(timeRef.current)
        }

    }, []);



    function start() {
        stop()
        timeRef.current = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        console.log("new val", timeRef.current);
    }

    function stop() {
        console.log(timeRef.current, "stop");
        clearInterval(timeRef.current);
    }


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
