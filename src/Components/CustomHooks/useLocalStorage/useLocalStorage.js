import { useEffect, useState } from "react";

function useLocalStorage(props) {

    const [name, setName] = useState(() => {
        console.log("render in lazy initilization");

        return window.localStorage.getItem("name") 
                ? window.localStorage.getItem("name") : "" 
    });

    useEffect(() => {
        window.localStorage.setItem("name" ,name);
    }, [name]);

    return [
        name,
        setName
    ];

}

export default useLocalStorage;