import React from "react";
import { ITodoItemProps } from "../../model/todo.model";

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }: ITodoItemProps) => {
  const handleToggleTodo = () => {
    onToggleTodo(todo.id);
  };
  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <li className='flex items-center mb-2'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={handleToggleTodo}
        className='mr-2'
      />
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}>
        {todo.text}
      </span>
      <button className='text-red-500' onClick={handleDeleteTodo}>
        Delete
      </button>
    </li>
  );
};

export default React.memo(TodoItem);
