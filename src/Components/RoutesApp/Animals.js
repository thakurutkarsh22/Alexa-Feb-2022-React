import { useLocation } from "react-router-dom";
import Dog from "./Animals/Dog";
import Lion from "./Animals/Lion";

function Animals() {
    console.log(useLocation());
    // to get the params .... 
    const {search} = useLocation();
    const animalType = search.split("=")[1];
    console.log(animalType);

    return (
        <>
        <h1>Animals</h1>
        {animalType === 'dog' && <Dog />}
        {animalType === 'lion' && <Lion />}
        {animalType !== 'dog' && animalType !== 'lion' && (<div>hey there is no animal</div>)}
        </>
    )
}

export default Animals;