import { useState } from "react";
import styles from "./title.module.css";

function Content(props) {
  //   const { content1 } = props;
  const [content, setContent] = useState(0);

  function generateContent() {
    // how
    // return ""asdaskdkasdlisahjdkhaskhdkashaskhdlskjhfldsjkgf //f
    const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
    software like Aldus PageMaker including versions of Lorem Ipsum`;
    setContent(content);
  }
  return (
    <>
      <div className={styles.content}>{content}</div>
      <button onClick={() => generateContent()}>Generate Content</button>
    </>
  );
}

export default Content;
