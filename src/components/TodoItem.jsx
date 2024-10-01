import { useState, useRef } from 'react';
import TodoButton from './TodoButton';
import DeleteIcon from '../assets/delete-icon.svg';
import EditIcon from '../assets/edit-icon.svg';

/**
 * A component that renders an individual todo.
 * @param {Object} todo - The todo.
 * @param {Function} toggleTodo - The function to toggle the completion status of the todo.
 * @param {Function} editTodo - The function to edit the todo.
 * @param {Function} deleteTodo - The function to delete the todo.
 */
function TodoItem({ todo, toggleTodo, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleSave}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSave();
              }
            }}
            className="edit-input"
          />
        ) : (
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="todo-interface">
        <TodoButton
          icon={EditIcon}
          onClick={handleEdit}
          altText="Edit"
          disabled={isEditing || todo.completed}
        />
        <TodoButton
          icon={DeleteIcon}
          onClick={() => deleteTodo(todo.id)}
          altText="Delete"
          disabled={isEditing}
        />
      </div>
    </div>
  );
}

export default TodoItem;
