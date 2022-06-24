import React, { useState } from "react";
import styles from "./Todos.module.css";
const Todos = (props) => {
  const [edited, setEdited] = useState(props.todos.content);
  console.log(props.todos.content);
  const setChecked = (e) => {
    e.target.nextSibling.className = e.target.checked ? styles.checked : "";
  };
  const displayDeleteBtnHandler = (e) => {
    e.target.closest(
      "li"
    ).lastChild.className = `${styles.visible} ${styles.delete}`;
  };
  const hideDeleteBtnHandler = (e) => {
    e.target.closest("li").lastChild.className = `${styles.delete}`;
  };
  const deleteItemHandler = (e) => {
    props.deletedItem(e.target.closest("li").id);
  };

  const editContentHandler = (e) => {
    e.target.readOnly = false;
  };

  return (
    <ul className={styles.list}>
      {props.todos.map((todo) => {
        const { id, content } = todo;

        return (
          <li
            key={id}
            id={id}
            onMouseOver={displayDeleteBtnHandler}
            onMouseOut={hideDeleteBtnHandler}
          >
            <div>
              <input
                className={styles.check}
                type="checkbox"
                onChange={setChecked}
              />
              <input
                className={styles.content}
                type="text"
                value={edited}
                readOnly
                onClick={editContentHandler}
              />
            </div>

            <div className={styles.delete} onClick={deleteItemHandler}>
              x
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
