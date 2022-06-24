import React from "react";
import styles from "./Footer.module.css";
const Footer = (props) => {
  const { all, active, completed } = props.statistic;
  const setClassHandler = (e) => {
    [...e.target.closest("ul").childNodes].map((li) => (li.className = ""));
    e.target.className = styles.selected;
    props.filter(e.target.id);
  };
  const clearCompletedHandler = (e) => {
    console.log("object");
    props.clearCompleted();
  };
  return (
    <footer className={styles.footer}>
      <p>{active} Items Left</p>
      <ul>
        <li id="all" value={all} onClick={setClassHandler}>
          All : {all}
        </li>
        <li id="active" value={active} onClick={setClassHandler}>
          Active : {active}
        </li>
        <li id="completed" value={completed} onClick={setClassHandler}>
          Completed : {completed}
        </li>
      </ul>
      <p className={styles.clear} onClick={clearCompletedHandler}>
        Clear Completed
      </p>
    </footer>
  );
};

export default Footer;
