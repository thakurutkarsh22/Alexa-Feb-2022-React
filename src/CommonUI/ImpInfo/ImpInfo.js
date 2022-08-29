import React from "react";
import styles from "./impInfo.module.css";

function ImpInfo(props) {
  return (
    <>
      <div className={styles.beauty}>{props.impInfo}</div>
      {/* <button onClick={() => console.}>Click ME!</button> */}
    </>
  );
}

export default ImpInfo;
