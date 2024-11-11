import "./components/todo/todo.css";

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
      <div>
        <div> Learning React</div>
      </div>
    </div>
  );
};

export default App;
