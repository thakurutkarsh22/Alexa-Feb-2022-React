import { useEffect, useState } from "react";

function useStopwatchControl(props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const {timeRef} = props;
    
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

    return {
        time,
        start,
        stop,
    }
}

export default useStopwatchControl;