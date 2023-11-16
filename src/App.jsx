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
    if (!task) return;
    const newTodoList = [
      ...todos,
      { id: todos.length + 1, task: task, done: false },
    ];

    setTodo(newTodoList);
  };

  const delteTodo = (id) => {
    const newTodoList = todos.filter((item) => item.id != id);
    setTodo(newTodoList);
  };

  const changeTodoState = (id, state) => {
    const newTodoList = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done: state };
      } else {
        return item;
      }
    });

    setTodo(newTodoList);
  };

  return (
    <div className="container">
      <h1>
        🎯My To do list✏️
      </h1>

      <form className="new-todo-container" onSubmit={(e) => e.preventDefault()}>
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
      </form>

      <ul className="todo-list">
        {todos.map((item) => {
          return (
            <li key={item.id} className={`todo-item ${item.done?"done" : ""}`}>
              <input
                type="checkbox"
                value={item.done}
                onChange={(e) => {
                  changeTodoState(item.id, e.target.checked);
                }}
              />
              <span className="todo-item-text">{item.task}</span>
              <button onClick={() => delteTodo(item.id)} className="delete">
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
