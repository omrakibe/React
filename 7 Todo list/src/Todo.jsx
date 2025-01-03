import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  let [task, setTask] = useState([
    { createTask: "Tasks", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let todoTask = () => {
    // task.push(newTodo);
    setTask((prevTask) => {
      return [{ createTask: newTodo, id: uuidv4() }, ...prevTask];
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

  let upperCaseAll = () => {
    setTask((prevTodo) =>
      prevTodo.map((todo) => {
        let word = todo.createTask;
        return {
          ...todo,
          createTask: word.charAt(0).toUpperCase() + word.slice(1),
          // setTask(word.charAt(0).toUpperCase() + word.slice(1));
        };
      })
    );
  };

  let upperCaseOne = (id) => {

    let updatedTask = task.map(task.id === id ? {...task, isDone: !task.isDone} : task)
    console.log(updatedTask);
    
  }

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
                onClick={() => upperCaseOne(newTask.id)}
              >
                Marks as Done
              </button>
              &nbsp; &nbsp;
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => deleteTodo(newTask.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={upperCaseAll}
      >
        Mark all as Done.
      </button>
    </>
  );
}

export default Todo;
