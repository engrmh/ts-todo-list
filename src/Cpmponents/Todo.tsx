import React from "react";
import { ITodo } from "./Todos.types";

interface ITodoPRops {
  todo: ITodo
  deleteTodo: (id: string) => void
  toggleComplete: (id: string) => void
}

function Todo({todo , deleteTodo , toggleComplete } : ITodoPRops) {
  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? 'completed' : ''}`} // or completed className
      >
       {todo.title}
      </p>
      <div>{/* <FontAwesomeIcon icon={faTrash} /> */}</div>
    </div>
  );
}

export default Todo;
