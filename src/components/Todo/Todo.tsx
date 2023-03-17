import React, { useState } from "react";
import { ITodo } from "../../model/todo.model";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TODO_KEY = "todos";

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: ITodo = { id: Date.now(), text, completed: false };
    setTodos((preTodos) => [...preTodos, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container mx-auto mt-8 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
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
