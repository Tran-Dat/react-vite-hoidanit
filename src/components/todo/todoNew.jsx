import { useState } from "react";

const TodoNew = (props) => {
  // useState hook
  const [valueInput, setValueInput] = useState("eric");

  const { addNewTodo } = props;

  // addNewTodo("eric");
  const hanldeClick = () => {
    console.log(">> Check value Input: ", valueInput);
  };

  const hanldeOnChange = (name) => {
    setValueInput(name);
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
      <div className="textInput">My text input is = {valueInput}</div>
    </div>
  );
};

export default TodoNew;
