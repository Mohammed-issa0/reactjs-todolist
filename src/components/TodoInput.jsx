import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          placeholder="Enter todo..."
        />
        <button
          type="submit"
          onClick={() => {
            handleAddTodos(todoValue);
            setTodoValue("");
          }}
        >
          {" "}
          Add
        </button>
      </header>
    </form>
  );
}
