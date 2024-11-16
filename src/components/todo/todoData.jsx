const TodoData = (props) => {
  const { name, age, data } = props;

  console.log(">> Check props: ", props);
  return (
    <div className="toda-data">
      <div>My naem is a: {name}</div>
      <div> Learning React</div>
      <div> Watching Youtube</div>
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default TodoData;
