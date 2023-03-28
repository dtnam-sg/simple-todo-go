import React, { useEffect, useState, useCallback } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ITodo } from "../../model/todo.model";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TODO_KEY = "todos";

const Todo = () => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>(TODO_KEY, []);

  const addTodo = useCallback(
    (text: string) => {
      const newTodo: ITodo = {
        id: Date.now().toString(),
        text,
        completed: false,
      };
      setTodos((preTodos) => [...preTodos, newTodo]);
    },
    [todos],
  );

  const handleToggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = useCallback(
    (id: string) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <div className='container shadow-inner shadow-2xl mx-auto mt-8 max-w-xl bg-gradient-to-r from-cyan-300 bg-green-300 bg-green-200 p-5 rounded-xl text-center '>
      <h1 className='text-3xl font-bold mb-4 text-green-600 '>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default Todo;
