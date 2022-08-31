import { useState } from "react";
import TodoItem from "./TodoItem";

function TODO() {
  const [todoList, setTodoList] = useState([]);
  const [inputItem, setInputItem] = useState();
  const [buttonDescription, setButtonDesc] = useState("ADD");
  const [editTodoId, setEditTodoId] = useState();

  function createTodoItem() {
    const todoObj = {
      id: Date.now() + todoList.length,
      discription: inputItem,
      time: new Date(),
    };
    setTodoList((oldState, oldProp) => [...oldState, todoObj]);
    setInputItem("");
  }

  function updateTodoItem() {
    const editiedTodoDescription = inputItem;
    const editId = editTodoId;

    // const todoListCopy = [...todoList]; // shallow
    const todoListCopy = JSON.parse(JSON.stringify(todoList)); // deep copy

    const index = todoListCopy.findIndex((todo) => todo.id === editId);
    todoListCopy[index].discription = editiedTodoDescription;

    setTodoList(todoListCopy);

    setInputItem("");
    setButtonDesc("ADD");
    setEditTodoId("");
  }

  function onDeleteTodo(id) {
    console.log("hey felete", id);
    const filteredArray = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredArray);
  }

  function onEditTodo(todo) {
    const { id, discription } = todo;

    setButtonDesc("EDIT");

    const element = document.getElementById("inputItem");
    element.focus();

    console.log("here i am editing", id);
    setEditTodoId(id);

    setInputItem(discription);
  }

  function renderTodoList() {
    return todoList.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={onDeleteTodo}
        onEdit={onEditTodo}
      />
    ));
  }

  function buttonHandler() {
    buttonDescription === "ADD" ? createTodoItem() : updateTodoItem();
  }

  function sortTodo() {
    const sortedArr = todoList.sort((a, b) => +a.discription - +b.discription);
    setTodoList(sortedArr);
  }

  return (
    <>
      {/* // Inputs */}
      <div>
        {/* input */}
        <div>
          <input
            id="inputItem"
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
            type={"text"}
            placeholder="Enter Task"
          />
          <button onClick={buttonHandler}>{buttonDescription}</button>
        </div>
        {/* button */}
        <div></div>
      </div>

      {/* // sorting-button */}
      <button onClick={() => sortTodo()}>Sort</button>
      {/* // TODO-list  */}
      <div>{renderTodoList()}</div>
    </>
  );
}

export default TODO;
