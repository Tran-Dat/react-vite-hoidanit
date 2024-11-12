import "./components/todo/todo.css";
import TodoData from "./components/todo/todoData";
import TodoNew from "./components/todo/todoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const hoidanit = "eric MU";
  const age = 25;
  const data = {
    address: "HCM",
    country: "VN",
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData name={hoidanit} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
