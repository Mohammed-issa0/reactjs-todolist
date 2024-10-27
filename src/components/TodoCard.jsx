import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i class="bx bxs-edit"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i class="bx bx-trash"></i>
        </button>
      </div>
    </li>
  );
}
