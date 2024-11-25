import "./todo.css";
import TodoData from "./todoData";
import TodoNew from "./todoNew";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" },
  ]);

  // const name = "eric MU";
  // const age = 25;
  // const data = {
  //   address: "HCM",
  //   country: "VN",
  // };

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name, //name: name
    };

    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    const newData = todoList.filter((item) => item.id !== id);
    setTodoList(newData);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />

      {/* {todoList.length > 0 && <TodoData todoList={todoList} />}

      {todoList.length === 0 && (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )} */}

      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;
