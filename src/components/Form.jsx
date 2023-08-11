import React from "react";
import styles from "../styles/Form.module.css";

function Form({ todos, setTodos, input, setInput }) {
  // * handler functions
  // ! get input text
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  // ! update the todo list
  const handleSubmit = (event) => {
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    event.preventDefault();
    setInput("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={input}
          type="text"
          placeholder="Enter a Task..."
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
