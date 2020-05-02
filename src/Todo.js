import React from "react";

export default function Todo({ todo, toggletodo }) {
  function handleChange() {
    toggletodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        {todo.name}
      </label>
    </div>
  );
}
