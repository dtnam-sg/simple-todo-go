import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

import Button from "../Button/Button";

import { ITodoItemProps } from "../../model/todo.model";

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }: ITodoItemProps) => {
  const handleToggleTodo = () => {
    onToggleTodo(todo.id);
  };
  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <li className='group flex items-center mb-2 hover:shadow-blue-500/50 hover:shadow-lg px-2 rounded-lg hover:cursor-pointer '>
      <div onClick={handleToggleTodo} className='mr-2'>
        {!todo.completed ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-8 h-8'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-8 h-8 text-green-500'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
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
      <Button onClick={handleDeleteTodo} variant="" className="bg-transparent opacity-0 group-hover:opacity-100">
        <TrashIcon className='h-8 w-8 text-red-500  border-red-700 ' />
      </Button>
    </li>
  );
};

export default React.memo(TodoItem);
