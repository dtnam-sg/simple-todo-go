import React from "react";
import Todo from "./components/Todo/Todo";

const App = () => {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [inputValue, setInputValue] = useState("");

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };

  // const handleAddTodo = () => {
  //   if (inputValue.trim() === "") return;

  //   const newTodo: Todo = {
  //     id: todos.length + 1,
  //     text: inputValue,
  //     completed: false
  //   };

  //   setTodos([...todos, newTodo]);
  //   setInputValue("");
  // };

  // const handleToggleTodo = (id: number) => {
  //   const updatedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed
  //       };
  //     } else {
  //       return todo;
  //     }
  //   });

  //   setTodos(updatedTodos);
  // };

  // const handleRemoveTodo = (id: number) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(updatedTodos);
  // };

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
  //     <div className="w-full max-w-md p-4 rounded-md shadow-md bg-white">
  //       <h2 className="text-xl font-bold mb-4">Todo List </h2>
  //       <div className="flex">
  //         <input
  //           type="text"
  //           className="flex-1 mr-2 py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
  //           value={inputValue}
  //           onChange={handleInputChange}
  //         />
  //         <button
  //           className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
  //           onClick={handleAddTodo}
  //         >
  //           Add
  //         </button>
  //       </div>
  //       <ul className="mt-4">
  //         {todos.map((todo) => (
  //           <li key={todo.id} className="flex items-center justify-between py-2">
  //             <input type="checkbox" className="mr-2" onClick={() => handleToggleTodo(todo.id)}/>
  //             <span
  //               className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}

  //             >
  //               {todo.text}
  //             </span>
  //             <button
  //               className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-md"
  //               onClick={() => handleRemoveTodo(todo.id)}
  //             >
  //               X
  //             </button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
  return (
    <>
      <Todo />
    </>
  );
};

export default App;
