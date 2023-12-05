import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function ToDosWrapper() {
  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      {/* Add New Todo Form */}

      <TodoForm/>

      {/* display todos */}
      <Todo />
    </div>
  );
}

export default ToDosWrapper;
