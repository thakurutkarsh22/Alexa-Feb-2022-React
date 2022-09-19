import React, { useEffect } from "react";

function Child(props) {
    const {onClick} = props;

    // useEffect(() => {
    //     console.log(countObj, "Child:::: inside the useEffect");
    // }, [countObj]);

    console.log("redering, Child");

    return (

        

        <>
            {/* Hey i am Children
            {countObj.count} */}
            <button onClick={onClick}>click child </button>
        </>
    )
}
// react.memo will see if the props are changed ot not 
// if props are changed -> render
// if props are not changed -> it will never re-render ... 
export default React.memo(Child);