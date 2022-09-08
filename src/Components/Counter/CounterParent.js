import { useState } from "react";
import Counter from "./Counter";

const CounterParent = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((oldState, oldPrep) => oldState + 1);
  };
  return <Counter score={counter} increment={increment} />;
};

export default CounterParent;
