import Styles from "./TodoItem.module.css";

// todo: {
//     id: "",
//     description: "",
//     timeAndDate: "",
// }

function TodoItem(props) {
  const { todo: todoObj, onDelete, onEdit } = props;
  const { id, discription } = todoObj;
  return (
    <div className={Styles.todoItem}>
      {discription}
      <button onClick={() => onEdit(id)} className={Styles.edit}>
        Edit
      </button>
      <button onClick={() => onDelete(id)} className={Styles.delete}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
