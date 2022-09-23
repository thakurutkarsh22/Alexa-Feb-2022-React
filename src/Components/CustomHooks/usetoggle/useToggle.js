import { useCallback, useMemo, useState } from "react";

// 
function useToggle(initialVal = false) {
    const [toggle, setToggle] = useState(initialVal);


    const toggleFunc = useMemo(() => () => {
        setToggle((oldVal) => !oldVal);

    }, []);

    // console.log("UseToggleApp :: useToggle");
    
    return [
        toggle,
        toggleFunc
    ]

}

export default useToggle;