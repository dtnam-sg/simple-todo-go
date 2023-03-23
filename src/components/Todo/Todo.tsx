import React, { useEffect, useState, useCallback } from "react";
import { ITodo } from "../../model/todo.model";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TODO_KEY = "todos";

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(TODO_KEY) || '[]');
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  }, [todos]);


  const addTodo = useCallback((text: string) => {
    const newTodo: ITodo = { id: Date.now().toString(), text, completed: false };
    setTodos((preTodos) => [...preTodos, newTodo]);
  },[todos]);

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

  const handleDeleteTodo = useCallback((id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
},[todos]);

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
