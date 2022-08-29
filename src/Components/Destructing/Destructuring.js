import { useState } from "react";
import Content from "../../CommonUI/DestructureExample/content";
import Title from "../../CommonUI/DestructureExample/title";
import styles from "./Destructuring.module.css";

function Destructure(props) {
  const { title } = props;
  const [counter, setCounter] = useState(0);

  function onChangeCounter() {
    // setCounter(++counter)
    // setCounter(counter + 1); //this is wrong this will create bugs
    // setCounter((prevState, prevProps) => prevState + 1); // this is the correct way.
    setCounter((prevState, prevProps) => prevState + 1);
    setCounter((prevState, prevProps) => prevState + 1);
    setCounter((prevState, prevProps) => prevState + 1);
    setCounter((prevState, prevProps) => prevState + 1);
    setCounter((prevState, prevProps) => prevState + 1);

    //  this wont work ....

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  }

  return (
    <>
      <Title title={title} />
      <Content />
      {/* visitor counter */}
      <div>
        Visitor Counter: {counter}
        <button onClick={() => onChangeCounter()}>Increase THe counter</button>
      </div>
    </>
  );
}

export default Destructure;
