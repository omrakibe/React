import { useState } from "react";

let nextId = 0;

function Array() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  let updateTodo = (event) => {
    setTodo(event.target.value);
  };

  let addList = () => {
    setList((prevTask) => {
        if(todo == "") {
            
        }
      return [...prevTask, { id: nextId++, todo: todo }];
    });
    setTodo("");
  };
  return (
    <>
      <h1>Updating Arrays in State</h1>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={todo}
        onChange={updateTodo}
      />
      &nbsp; &nbsp;
      <button onClick={addList}>Add</button>
      <br />
      <ul>
        {list.map((element) => {
          return (
            <li style={{ marginTop: "7px" }} key={element.id}>
              {element.todo}
              &nbsp; &nbsp;
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Array;
