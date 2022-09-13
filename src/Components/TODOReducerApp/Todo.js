import { useContext } from "react";
import DarkModeContext from "../App/context";

function Todo(props) {
    const context = useContext(DarkModeContext);
    console.log("context --- todo: ",context );
    const {todos} = props;
    // mode // in edit mode or in display mode 

    // in mode edit you can track the edited todo .... 

    return (
        <>
                    {todos.map(item => {
            return (
                <div>
                    id: {item.id}
                    text: {item.text}
                </div>
            )
        })}
        </>
    )


}

export default Todo;