import React, { useState } from "react";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";
import Card from "./components/Card/Card";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [todos, setTodos] = useState([]);
  const getListHandler = (list) => {
    setTodos((prevTodos) => [...prevTodos, list]);
  };

  const deleteItemHandler = (id) => {
    console.log("item deleted", id);
    setTodos((prevTodos) => prevTodos.filter((todos) => todos.id !== id));
  };

  return (
    <React.Fragment>
      <header className={styles.title}>
        <h1>todos</h1>
      </header>
      <Card>
        <Input getList={getListHandler} />
        <Todos todos={todos} deletedItem={deleteItemHandler} />
        <Footer />
      </Card>
    </React.Fragment>
  );
};

export default App;
