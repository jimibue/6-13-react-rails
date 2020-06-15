import React from "react";
import Todo from "./Todo";

const TodoList = ({ updateTodo, deleteTodo, todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            x={deleteTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            {...todo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
