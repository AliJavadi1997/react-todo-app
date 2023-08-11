import React from "react";
import styles from "../styles/Todo.module.css";

function Todo({ todo, todos, setTodos }) {
  function removeHandler() {
    setTodos(todos.filter((element) => element.id !== todo.id));
  }
  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }
  return (
    <div className={todo.completed ? styles.completed : styles.notCompleted}>
      <div>{todo.text}</div>
      <div className={styles.buttons}>
        <div className={styles.completeButton} onClick={completeHandler}>
          ✔️
        </div>
        <div className={styles.removeButton} onClick={removeHandler}>
          🗑️
        </div>
      </div>
    </div>
  );
}
export default Todo;
