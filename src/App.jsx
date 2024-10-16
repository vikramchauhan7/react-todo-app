import { useState, useReducer } from "react";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import "./App.css";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
      break;
    case "DONE":
      return state.map((todo) => {
        if (todo.id === payload.id) todo.done = !todo.done;
        return todo;
      });
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  function addTodo(label) {
    console.log("Add Todo Clicked");
    dispatch({
      id: [...Array(12)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join(""),
      type: "ADD",
      payload: {
        label,
        done: false,
      },
    });
  }

  return (
    <div className="app">
      <div className="todos-container">
        {/* TABS */}
        <ul className="tabs">
          <li className="tab active-text">All</li>
          <li className="tab">Active</li>
          <li className="tab">Completed</li>
        </ul>

        {/* TODOS */}
        <div className="todos">
          {todos?.map((todo, index) => (
            <div className="todo" key={`todo-${index}`}>
              <Checkbox checked={todo.done} />
              <span className={`${todo.done ? "done" : "active-text"}`}>
                {todo.label}
              </span>
            </div>
          ))}
        </div>

        <Input placeholder="Add Todo" buttonLabel="Add" onSubmit={addTodo} />
      </div>
    </div>
  );
}
