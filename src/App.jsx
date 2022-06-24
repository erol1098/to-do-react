import React, { useState } from "react";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";
import Card from "./components/Card/Card";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const getListHandler = (list) => {
    setTodos((prevTodos) => [...prevTodos, list]);
  };

  const deleteItemHandler = (id) => {
    console.log("item deleted", id);
    setTodos((prevTodos) => prevTodos.filter((todos) => todos.id !== id));
  };
  const isCheckedHandler = (isChecked, id) => {
    console.log(isChecked, id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.isChecked = isChecked ? true : false;
          return todo;
        } else return todo;
      })
    );
  };

  return (
    <React.Fragment>
      <header className={styles.title}>
        <h1>todos</h1>
      </header>
      <Card>
        <Input getList={getListHandler} />
        <Todos
          todos={todos}
          deletedItem={deleteItemHandler}
          isChecked={isCheckedHandler}
        />
        <Footer />
      </Card>
    </React.Fragment>
  );
};

export default App;
