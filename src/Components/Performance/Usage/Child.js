import { setNestedObjectValues } from "formik";
import React, { useEffect } from "react";

function Child(props) {

    const {bar, baz} = props;

    console.log(bar, baz, "inspection");

    // const bar = () => {};
    // const baz  = [1,2,3];

    useEffect(() => {
        // heavy workload .... with help of bar and baz
        console.log("heavy work inside the child");
        // setState()
    }, [bar, baz]);



    return(
        <>
            <div>Hey there !!!!</div>
        </> 
    )
}
export default React.memo(Child);