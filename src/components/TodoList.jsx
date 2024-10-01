import TodoItem from './TodoItem';

/**
 * A component that renders a list of todos.
 * @param {Object[]} todos - The list of todos.
 * @param {Function} toggleTodo - The function to toggle the completion status of a todo.
 * @param {Function} editTodo - The function to edit the todo.
 * @param {Function} deleteTodo - The function to delete a todo.
 */
function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
