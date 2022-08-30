import { useState } from "react";
import TodoItem from "./TodoItem";

function TODO() {
  const [todoList, setTodoList] = useState([]);
  const [inputItem, setInputItem] = useState();

  function createTodoItem() {
    const todoObj = {
      id: Date.now() + todoList.length,
      discription: inputItem,
      time: new Date(),
    };
    setTodoList((oldState, oldProp) => [...oldState, todoObj]);
    setInputItem("");
  }

  function onDeleteTodo(id) {
    console.log("hey felete", id);
    const filteredArray = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredArray);
  }

  function onEditTodo() {}

  function renderTodoList() {
    return todoList.map((todo) => (
      <TodoItem todo={todo} onDelete={onDeleteTodo} onEdit={onEditTodo} />
    ));
  }

  return (
    <>
      {/* // Inputs */}
      <div>
        {/* input */}
        <div>
          <input
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
            type={"text"}
            placeholder="Enter Task"
          />
          <button onClick={() => createTodoItem()}>ADD</button>
        </div>
        {/* button */}
        <div></div>
      </div>

      {/* // sorting-button */}
      <div></div>

      {/* // TODO-list  */}
      <div>{renderTodoList()}</div>
    </>
  );
}

export default TODO;
