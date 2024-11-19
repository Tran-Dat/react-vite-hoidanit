/* eslint-disable */

import { useState } from "react";

const TodoNew = (props) => {
  // useState hook
  const [valueInput, setValueInput] = useState("");

  const { addNewTodo } = props;

  // addNewTodo("eric");
  const hanldeClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
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
        value={valueInput}
      />
      <button className="submit" onClick={hanldeClick}>
        Add
      </button>
      <div className="textInput">My text input is = {valueInput}</div>
    </div>
  );
};

export default TodoNew;
