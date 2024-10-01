/**
 * A component that renders a button to delete all completed to-do items.
 * @param {Function} deleteCompletedTodos - The function to delete all completed to-do items.
 */
function DeleteCompletedTodos({ todos, deleteCompletedTodos }) {
  /**
   * Checks whether there exists any todos that are completed
   */
  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <div className="delete-completed-container">
      <button
        onClick={deleteCompletedTodos}
        className="delete-completed-button"
        disabled={!hasCompletedTodos}
      >
        Delete Completed Todos
      </button>
    </div>
  );
}

export default DeleteCompletedTodos;
