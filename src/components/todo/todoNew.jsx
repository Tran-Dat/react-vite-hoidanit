const TodoNew = (props) => {
  console.log(props, "check");

  const { addNewTodo } = props;

  // addNewTodo("eric");
  const hanldeClick = () => {
    alert("click me");
  };

  const hanldeOnChange = (name) => {
    console.log(">> hanldeOnChang", name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        className="input"
        placeholder="Enter your task"
        onChange={(event) => hanldeOnChange(event.target.value)}
      />
      <button className="submit" onClick={hanldeClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
