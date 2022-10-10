import React from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { Todo } from "../model";

interface Props {
  todo: Todo;
}

const SingleTodo = ({ todo }: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div className="icons">
        <span className="icon">
          <FaEdit />
        </span>
        <span className="icon">
          <FaTrash />
        </span>
        <span className="icon">
          <FaCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
