import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { ITodo } from "./Todos.types";

function ToDosWrapper() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
    return true;
  };

  const deleteTodo = (id: string) => {};

  const toggleComplete = (id: string) => {};

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      {/* Add New Todo Form */}

      <TodoForm addTodo={addTodo} />

      {/* display todos */}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
      ))}
    </div>
  );
}

export default ToDosWrapper;
