import { useState } from "react";

function Todo() {
  let [task, setTask] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let todoTask = () => {
    // task.push(newTodo);
    setTask([...task, newTodo]);
    setNewTodo("")
    // console.log(newTodo);
  };

  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <h1>
        <u>Todo List</u>
      </h1>
      <input
        placeholder="Add your Task"
        value={newTodo}
        onChange={updateTodo}
      />
      &nbsp; &nbsp;
      <button onClick={todoTask}>Add</button>
      <br />
      <br />
      <hr />
      <br />
      <h2>Tasks to Complete: </h2>
      <br />
      <ul>
        {task.map((newTask) => {
          return <li>{newTask}</li>;
        })}
      </ul>
    </>
  );
}

export default Todo;
