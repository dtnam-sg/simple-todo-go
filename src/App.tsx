import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Todo from "./pages/Todos/Todo";

const App = () => {
  return (
    <>
      <div className="pt-3">
        <ul className="flex justify-center items-center gap-4">
          <li className="nav-item">
            <Link to="/todo-app-react" className="nav-link text-white hover:text-green-600">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="todo-app-react/alarm" className="nav-link text-white hover:text-green-600">Alarm</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/todo-app-react' element={<Todo />} />
      </Routes>
    </>
  );
};

export default App;
