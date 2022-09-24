import { useEffect, useState } from "react";

function UseLocatorApp() {

    const[cord, setCord] = useState({x: 0, y: 0});

    const handler = (e) => {
        const {clientX, clientY} = e;
        setCord({x: clientX, y: clientY});
    }
    console.log("component");

    useEffect(() => {
        // addition of an event listner. .... 
        const listnerCallback = (e) => {
            console.log("callback");
            handler(e);
        };

        console.log("useEffect");
        document.addEventListener('mouseover', listnerCallback)

        // removal of subscription .... 
        return () => {
            console.log("cleanup");
            document.removeEventListener('mouseover', listnerCallback);
        }
        // use mousemove to get seamless update .... and try mouseover... .

    }, []);

    return (
        <>
            Co-ordinates x: {cord.x} y: {cord.y}
        </>
    )
}

export default UseLocatorApp;