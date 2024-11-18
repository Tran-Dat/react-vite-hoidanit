const TodoData = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todoList } = props;

  console.log(">> Check props: ", todoList);
  return (
    <div className="todo-data">
      {todoList.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="todo-item">
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}

      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default TodoData;
