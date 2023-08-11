import React from "react";
import Todo from "./Todo";
import styles from "../styles/TodoList.module.css";

function TodoList({ todos, setTodos, setInput }) {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
