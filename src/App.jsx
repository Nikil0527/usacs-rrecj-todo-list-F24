import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import AppHeader from './components/AppHeader';
import DeleteCompletedTodos from './components/DeleteCompletedTodos';
import './styles/App.css';

/**
 * The main App component
 */
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false },
  ]);

  /**
   * Add a todo to the todo-list
   * @param {string} text - The description of the new todo to add
   */
  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text, completed: false };
    setTodos([...todos, newTodo]);
  };

  /**
   * Toggles the completion status of a todo
   * @param {number} id - The ID of the todo to toggle
   */
  const toggleTodo = (id) => {
    // IMPLEMENT THIS
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * Edits the text of a todo.
   * @param {number} id - The ID of the todo to edit.
   * @param {string} newText - The new text of the todo.
   */
  const editTodo = (id, newText) => {
    // IMPLEMENT THIS
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    console.log(`Editing todo with id: ${id}`);
  };

  /**
   * Deletes a todo from the list.
   * @param {number} id - The ID of the todo to delete.
   */
  const deleteTodo = (id) => {
    // IMPLEMENT THIS
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(`Deleting todo with id: ${id}`);
  };

  /**
   * Delete all todos that are completed.
   */
  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="App">
      <AppHeader />
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
      <DeleteCompletedTodos
        todos={todos}
        deleteCompletedTodos={deleteCompletedTodos}
      />
    </div>
  );
}

export default App;
