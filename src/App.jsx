import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([
    { id: 1, task: "to do on Monday", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (task) => {
    const newTodoList = [
      ...todos,
      { id: todos.length + 1, task: task, done: false },
    ];

    setTodo(newTodoList)
  };

  const delteTodo = (id) => {
    const newTodoList = todos.filter((item) => item.id!=id);
    setTodo(newTodoList)
  }

  return (
    <div className="container">
      <h1>
        {"<"}My To do list{"/>"}
      </h1>

      <div className="new-todo-container">
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add new todo"
        />
        <button
          onClick={() => {
            addTodo(newTodo);
            setNewTodo("");
          }}
        >
          ➕
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((item) => {
          return (
            <li key={item.id} className="todo-item">
              <input type="checkbox" value={item.done} />
              <span className="todo-item-text">{item.task}</span>
              <button 
              onClick={()=> delteTodo(item.id)
              }
              className="delete"
              >❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
