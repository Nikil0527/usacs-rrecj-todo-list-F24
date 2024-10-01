import React, { useState } from 'react';

/**
 * A component that allows users to add new todos.
 * @param {Function} addTodo - The function to add a new todo.
 */
function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  /**
   * Handles the form submission to add a new todo item.
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
