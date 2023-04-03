import React from "react";
import { render, fireEvent, getByRole, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoForm from "../components/Todo/TodoForm";
import Todo from "../pages/Todos/Todo";

const commonValue = "Test todo";

describe("TodoForm", () => {
  test("renders todo form component", () => {
    render(<Todo />);
    const titleValue = screen.getByRole("heading", { name: /Todo List/i });

    const input = screen.getByRole("button", { name: /add/i });
    expect(titleValue).toHaveTextContent("Todo List");
    expect(input).toBeInTheDocument();
  });

  test("renders the form with the correct inputs and labels", () => {
    const addTodo = jest.fn();

    render(<TodoForm addTodo={addTodo} />);

    const inputElement = screen.getByPlaceholderText("Add new todo");
    const submitButton = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: commonValue } });
    fireEvent.submit(submitButton);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");

    expect(addTodo).toHaveBeenCalledWith(commonValue);
    expect(submitButton).toBeInTheDocument();
  });
});
