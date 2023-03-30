import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Todo from "./pages/Todos/Todo";

const App = () => {
  return (
    <>
      <div className="pt-3">
        <ul className="flex justify-center items-center gap-4 underline">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/alarm" className="nav-link">Alarm</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Todo />} />
      </Routes>
      {/* <Todo /> */}
    </>
  );
};

export default App;
