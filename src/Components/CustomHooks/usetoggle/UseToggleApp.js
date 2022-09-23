import { useEffect, useState } from "react";
import useToggle from "./useToggle";

function UseToggleApp() {


    // console.log("UseToggleApp")
    // 
    const [toggle, toggleFunc] = useToggle(true);

    useEffect(() => {
        console.log("hey there buddy");
    },[toggleFunc] );

    // console.log("UseToggleApp :: afterUseToggle")

    //  bad design ..... 
    return (
        <button onClick={() => {toggleFunc()}}>{toggle ? 'Login' : 'Logout'}</button>
    )
}

export default UseToggleApp;