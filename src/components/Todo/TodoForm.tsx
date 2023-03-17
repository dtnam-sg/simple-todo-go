import React, { useState } from "react";
import { ITodoFormProps } from "../../model/todo.model";

const TodoForm = ({ addTodo }: ITodoFormProps) => {
  const [text, setText] = useState("");

  const handleChangeValue = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex mb-4">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={handleChangeValue}
          placeholder='Add new todo'
          className="flex-1 mr-2 py-2 px-3 border border-gray-400 rounded"
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
