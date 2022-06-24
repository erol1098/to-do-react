import React, { useState } from "react";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";
import Card from "./components/Card/Card";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [todos, getTodos] = useState([]);
  const getListHandler = (list) => {
    getTodos((prevTodos) => [...prevTodos, list]);
  };
  return (
    <React.Fragment>
      <header className={styles.title}>
        <h1>todos</h1>
      </header>
      <Card>
        <Input getList={getListHandler} />
        <Todos todos={todos} />
        <Footer />
      </Card>
    </React.Fragment>
  );
};

export default App;
