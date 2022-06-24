import React, { useEffect, useState } from "react";
import styles from "./Todos.module.css";
const Todos = (props) => {
  const [done, setDone] = useState(false);

  const checkBoxHandler = (e) => {
    e.target.checked ? setDone(true) : setDone(false);
  };

  return (
    <ul className={styles.list}>
      {props.todos.map((todo) => {
        const { content } = todo;
        const key = `${Math.random()}`;
        return (
          <li key={key} className={done ? "checked" : ""}>
            <input
              className={styles.check}
              type="checkbox"
              onClick={checkBoxHandler}
            />
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
