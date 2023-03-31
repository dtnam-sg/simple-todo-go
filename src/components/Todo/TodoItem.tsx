import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

import { ITodoItemProps } from "../../model/todo.model";

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }: ITodoItemProps) => {
  const handleToggleTodo = () => {
    onToggleTodo(todo.id);
  };
  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <li className='group flex items-center mb-2 '>
      <div onClick={handleToggleTodo} className='mr-2'>
        {!todo.completed ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-8 h-8'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-8 h-8 text-green-500'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        )}
      </div>
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}>
        {todo.text}
      </span>
      <button
        className='text-red-500 p-2 hover:border-red-400 opacity-0 group-hover:opacity-100 '
        onClick={handleDeleteTodo}>
        <TrashIcon className='h-8 w-8 text-red-500 hover:text-red-600 border-red-700 ' />
      </button>
    </li>
  );
};

export default React.memo(TodoItem);
