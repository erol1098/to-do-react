import React, { useState } from "react";
import styles from "./Input.module.css";
const Input = (props) => {
  const [item, setItem] = useState("");

  const getItemHandler = (e) => {
    setItem(e.target.value);
  };

  const addItemHandler = (e) => {
    e.preventDefault();
    props.getList({ id: `${Math.random()}`, content: item });
    setItem("");
  };

  return (
    <form className={styles.form} onSubmit={addItemHandler}>
      <input
        name="input"
        type="text"
        placeholder="What needs to be done?"
        value={item}
        onChange={getItemHandler}
      />
    </form>
  );
};

export default Input;
