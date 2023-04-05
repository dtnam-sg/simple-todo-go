import React, { useState } from "react";
import { ITodoFormProps } from "../../model/todo.model";
import Button from "../Button/Button";

const TodoForm = ({ addTodo }: ITodoFormProps) => {
  const [text, setText] = useState("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!text || text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <div className='flex mb-4 justify-center'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={handleChangeValue}
          placeholder='Add new todo'
          className='flex-1 mr-2 py-2 h-10 px-4 border border-slate-200 rounded-lg hover:shadow focus:outline-none'
        />
        <Button className='hover:shadow-md' type='submit'>
          Add
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
