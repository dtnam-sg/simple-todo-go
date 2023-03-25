import React from "react";
import { TrashIcon } from '@heroicons/react/24/solid'
 
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
      <button className='text-red-500 p-2 hover:border-red-400 hover:bg-red-200' onClick={handleDeleteTodo}>
        <TrashIcon className="h-5 w-5 text-red-500" />
      </button>
    </li>
  );
};

export default React.memo(TodoItem);
