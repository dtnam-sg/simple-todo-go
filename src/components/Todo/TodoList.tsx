import React from "react";
import { ITodoListProps } from "../../model/todo.model";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }: ITodoListProps) => {
  if (todos.length === 0) {
    return <div className='text-center'>No todos.</div>;
  }
  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
