import React from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <span className="todos__single--text todos__single--done">
          {todo.todo}
        </span>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div className="icons">
        <span className="icon">
          <FaEdit />
        </span>
        <span className="icon">
          <FaTrash />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <FaCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
