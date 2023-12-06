import React from "react";
import { ITodo } from "./Todos.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface ITodoPRops {
  todo: ITodo;
  deleteTodo: (id: string) => boolean;
  toggleComplete: (id: string) => void;
}

function Todo({ todo, deleteTodo, toggleComplete }: ITodoPRops) {
  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? "completed" : ""}`} // or completed className
      >
        {todo.title}
      </p>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)}/>
      </div>
    </div>
  );
}

export default Todo;
