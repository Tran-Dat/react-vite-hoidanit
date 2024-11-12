const TodoNew = (props) => {
  console.log(props, "check");

  const { addNewTodo } = props;

  // addNewTodo("eric");
  return (
    <div className="todo-new">
      <input type="text" className="input" placeholder="Enter your task" />
      <button className="submit">Add</button>
    </div>
  );
};

export default TodoNew;
