/**
 * A general button component for to-do items.
 * @param {string} icon - The icon to display on the button.
 * @param {Function} onClick - The function to call when the button is clicked.
 * @param {string} altText - The alt text for the icon.
 * @param {boolean} disabled - Whether the button is disabled.
 */
function TodoButton({ icon, onClick, altText, disabled = false }) {
  return (
    <button 
      onClick={onClick} 
      className="todo-button" 
      disabled={disabled}
    >
      <img
        src={icon}
        alt={altText}
        className={`todo-icon ${disabled ? 'disabled' : ''}`} // Set class based on disabled prop
      />
    </button>
  );
}

export default TodoButton;