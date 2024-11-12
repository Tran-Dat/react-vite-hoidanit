const TodoData = (props) => {
  const { name, age, data } = props;

  return (
    <div className="toda-data">
      <div>My naem is a: {name}</div>
      <div> Learning React</div>
      <div> Learning React</div>
    </div>
  );
};

export default TodoData;
