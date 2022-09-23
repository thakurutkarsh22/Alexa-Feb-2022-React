import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

function UseLocalStorageApp() {


    // you have to make sure your update functions (like setName)
    //  are not changing during renders ... they should have const memory. 
    const [name, setName] = useLocalStorage();

    return (
        <>
            Form
            <input 
                value={name}
                onChange={(e) => {setName(e.target.value)}} 
                type={"text"} 
                placeholder={"name"} 
            />
        </>
    );
}

export default UseLocalStorageApp;