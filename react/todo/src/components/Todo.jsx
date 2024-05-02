import React, { useReducer, useState } from "react";
import BasicExample from "./TodoTable";
import "./Todos.css"; // Import CSS file for styling

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (state.some((todo) => todo.id === action.data.id)) {
        return state;
      }
      return [...state, { ...action.data, complete: false }];

    case "EDIT":
      return state.map((todo) =>
        todo.id === action.data.id
          ? { ...todo, title: action.data.title }
          : todo
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.data.id);

    case "DELETEALL":
      return [];

    default:
      return state;
  }
};

const Todos = () => {
  const [input, setInput] = useState({});
  const [state, dispatch] = useReducer(reducer, []);

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleAddTodo = () => {
    dispatch({ type: "ADD", data: input });
    setInput({}); // Clear input fields after adding
  };

  const handleEditTodo = () => {
    dispatch({ type: "EDIT", data: input });
    setInput({}); // Clear input fields after editing
  };

  const handleClearTable = () => {
    dispatch({ type: "DELETEALL" });
  };

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>
      <BasicExample todos={state} dispatch={dispatch} />
      <div className="input-container">
        <label htmlFor="id" className="label">ID:</label>
        <input
          type="text"
          name="id"
          id="id"
          className="input"
          value={input.id || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="title" className="label">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          className="input"
          value={input.title || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="button-container">
        <button className="button add-button" onClick={handleAddTodo}>Add</button>
        <button className="button edit-button" onClick={handleEditTodo}>Edit</button>
        <button className="button clear-button" onClick={handleClearTable}>Clear Table</button>
      </div>
    </div>
  );
};

export default Todos;
