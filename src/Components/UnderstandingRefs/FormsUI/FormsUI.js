import { useEffect, useRef } from "react";
import Input from "../../../CommonUI/FormElements/Input";

function FormsUI() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    function handleKeyStrokes(event) {
        console.log(event, event.key, event.keyCode);
        if(event.keyCode === 13){ // Enter
            emailRef.current.focus();
        } 
        
    }

    
    return(
        <>
            <div>Forms</div>
            {/* basic inputs....  */}
            {/* <input 
                ref={nameRef}
             onKeyDown={(e) => handleKeyStrokes(e)} 
             placeholder="hello fill the name" 
             type={"text"} />

            <input ref={emailRef} placeholder="Email" type={"text"} /> */}
             
             <Input 
                placeholder="hello fill the name" 
                type={"text"} 
                ref={nameRef}
                onKeyDown={(e) => handleKeyStrokes(e)} 
                name={"Name"}/>


            <Input 
                placeholder="Email" 
                type={"text"} 
                name={"Email"} 
                ref={emailRef}
             /> 
        </>
        

    );
}

export default FormsUI;