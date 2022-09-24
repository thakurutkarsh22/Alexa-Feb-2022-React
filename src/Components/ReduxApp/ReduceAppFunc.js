

//  useDispatch();; /// react me 
// useSelector((state) => return {
//     isauth: state,
//     value: state.value
// })

import { useDispatch, useSelector } from "react-redux";
import TOGGLE from "./actions/action";
// typescrupt 
function ReduceAppFunc() {
    const toggleValue = useSelector((state) => state.value);
    const dispatch = useDispatch();

    return(
        <div>
            hello functional component ... {toggleValue ? "a": "b"}
            <button onClick={() => dispatch(TOGGLE(false))}>Click me</button>
        </div>
    );
}

export default ReduceAppFunc;