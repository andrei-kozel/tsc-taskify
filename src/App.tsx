import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./model";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: uuidv4(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="app">
      <h1 className="app__title">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
