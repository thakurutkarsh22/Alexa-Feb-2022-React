import { useState } from 'react';
import styles from './India.module.css';

function India(props) {

  // Object destructuring 
  // const {title, subtitle} = props;
  
  const [counter, setCounter] = useState(-1100);

  return (
    <>
      <h1 className={styles.heading}>{props.title} is {props.subtitle} {counter}</h1>
      <button onClick={() => setCounter(1)}>Increment</button>
    </>
    
  )
}

export default India;
