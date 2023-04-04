import React from "react";
import { ITodoListProps } from "../../model/todo.model";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleTodo,
  onLikeTodo,
}: ITodoListProps) => {
  if (todos.length === 0) {
    return <div className='text-center text-stone-900'>No todos.</div>;
  }
  return (
    <ul className='mt-4'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          onLikeTodo={onLikeTodo}
        />
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
