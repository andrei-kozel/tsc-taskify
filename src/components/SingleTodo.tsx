import React, { useEffect, useRef, useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <span className="todos__single--text todos__single--done">
          {todo.todo}
        </span>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div className="icons">
        <span
          className="icon"
          onClick={() => {
            if (!todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <FaEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
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
