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
      return [
        { createTask: newTodo, id: uuidv4(), isDone: false },
        ...prevTask,
      ];
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
          isDone: true,
          // setTask(word.charAt(0).toUpperCase() + word.slice(1));
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTask((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
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
            <li style={{margin: "6px"}} key={newTask.id}>
              <span
                style={
                  newTask.isDone == true
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "None" }
                }
              >
                {newTask.createTask}
              </span>
              &nbsp; &nbsp;
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => markAsDone(newTask.id)}
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
