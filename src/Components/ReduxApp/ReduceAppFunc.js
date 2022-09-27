

//  useDispatch();; /// react me 
// useSelector((state) => return {
//     isauth: state,
//     value: state.value
// })

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TOGGLE from "./actions/action";
// typescrupt 
function ReduceAppFunc() {
    const toggleValue = useSelector((state) => state.value);
    const dispatch = useDispatch();

    useEffect(() => {
        // api 
        const usr = 'https://jsonplaceholder.typicode.com/users';
        fetch(usr).then(response => response.json()).then(data => {
            console.log("data inside the use effect");
            console.log(data);
        });

    }, [toggleValue])

    return(
        <div>
            hello functional component ... {toggleValue ? "a": "b"}
            <button onClick={() => dispatch(TOGGLE(false))}>Click me</button>
        </div>
    );
}

export default ReduceAppFunc;