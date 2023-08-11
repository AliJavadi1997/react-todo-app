import { useState } from "react";
import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <h1>Todo Application</h1>
      <Form
        className="form"
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />
      <TodoList
        className="todo-list"
        todos={todos}
        setInput={setInput}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
