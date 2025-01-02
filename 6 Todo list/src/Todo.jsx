import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  let [task, setTask] = useState([{ createTask: "Tasks", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let todoTask = () => {
    // task.push(newTodo);
    setTask((prevTask) => {
      return [...prevTask, { createTask: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
    // console.log(newTodo);
  };

  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTask((prevTodo) => task.filter((prevTodo) => prevTodo.id != id));
    
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
          return (
            <li key={newTask.id}>
              {newTask.createTask}
              &nbsp; &nbsp;
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => deleteTodo(newTask.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
