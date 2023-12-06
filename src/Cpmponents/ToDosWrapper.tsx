import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { ITodo } from "./Todos.types";
import swal from "sweetalert";

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

  const deleteTodo = (id: string) => {
    swal({
      title: "Are You Sure?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((res) => {
      if (res) {
        setTodos(todos.filter((todo) => todo.id !== id));

        swal({
          text: "Deleted SuccessFully",
          icon: "success",
        });
      }
    });
    return true;
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    return true;
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      {/* Add New Todo Form */}

      <TodoForm addTodo={addTodo} />

      {/* display todos */}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default ToDosWrapper;
