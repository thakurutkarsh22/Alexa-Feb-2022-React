import Styles from "./TodoItem.module.css";

// todo: {
//     id: "",
//     description: "",
//     time: "",
// }

function TodoItem(props) {
  const { todo: todoObj, onDelete, onEdit } = props;
  const { id, discription } = todoObj;
  return (
    <div className={Styles.todoItem}>
      <span className={Number(discription) > 5 ? Styles.spanButifier : ""}>
        {discription}
      </span>
      <button onClick={() => onEdit(todoObj)} className={Styles.edit}>
        Edit
      </button>
      <button onClick={() => onDelete(id)} className={Styles.delete}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
