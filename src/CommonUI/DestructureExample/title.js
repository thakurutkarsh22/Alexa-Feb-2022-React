import styles from "./title.module.css";

function Title(props) {
  const { title } = props;
  return (
    <>
      {/* className={styles.title} */}
      <div className={styles.title}>{title}</div>
      <div>Subtitle</div>
    </>
  );
}

export default Title;
