import React from "react";
import styles from "./Todos.module.css";
const Todos = (props) => {
  const setChecked = (e) => {
    e.target.nextSibling.className = e.target.checked
      ? `${styles.checked} ${styles.content}`
      : styles.content;
    props.isChecked(e.target.checked, e.target.closest("li").id);
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
    console.log(e.target.value);
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
            onMouseLeave={hideDeleteBtnHandler}
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
                value={content}
                onChange={editContentHandler}
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
