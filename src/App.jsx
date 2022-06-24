import React, { useState, useEffect } from "react";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";
import Card from "./components/Card/Card";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [numbers, setNumbers] = useState({ all: 0, active: 0, completed: 0 });

  useEffect(() => {
    setNumbers((prevNumbers) => {
      return {
        all: todos.length,
        active: `${todos.filter((todo) => todo.isChecked === false).length}`,
        completed: `${todos.filter((todo) => todo.isChecked === true).length}`,
      };
    });
    // storing todos
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getListHandler = (list) => {
    setTodos((prevTodos) => [...prevTodos, list]);
  };
  const deleteItemHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todos) => todos.id !== id));
  };
  const isCheckedHandler = (isChecked, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.isChecked = isChecked ? true : false;
          return todo;
        } else return todo;
      })
    );
  };
  const filterHandler = (filter) => {
    setFilter(filter);
  };
  return (
    <React.Fragment>
      <header className={styles.title}>
        <h1>todos</h1>
      </header>
      <Card>
        <Input getList={getListHandler} />
        <Todos
          filter={filter}
          todos={todos}
          deletedItem={deleteItemHandler}
          isChecked={isCheckedHandler}
        />
        <Footer filter={filterHandler} statistic={numbers} />
      </Card>
    </React.Fragment>
  );
};

export default App;
