const Todo = ({
  todos,
  markAsDone,
  deleteTodo,
  completedTodos,
  handleEdit,
  handleEditSave,
  handleEditCancel,
  editTodo,
  editedTodo,
  setEditedTodo,
  toggleHideCompleted,
  hideCompleted,
}) => {
  return (
    <div className="todos-main">
      <div className="todos-container">
        <div className="completed-todos">
          <p>Completed todos: {completedTodos}</p>
          <button onClick={toggleHideCompleted} disabled={completedTodos === 0}>
            {hideCompleted ? "Show Completed" : "Hide Completed"}
          </button>
        </div>
        {todos.length === 0 ? (
          <p>No todos added yet</p>
        ) : (
          <article>
            {todos.map((todo) => (
              <div key={todo.id} className="todos">
                <div>
                  {editTodo === todo ? (
                    <input
                      type="text"
                      value={editedTodo}
                      onChange={(e) => setEditedTodo(e.target.value)}
                      className="todo-name"
                    />
                  ) : (
                    <p className="todo-name">{todo.text}</p>
                  )}
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    value={todo.done}
                    checked={todo.done}
                    onChange={() => {
                      markAsDone(todo);
                    }}
                    className="checkbox"
                  />
                </div>
                <div className="buttons">
                  {editTodo === todo ? (
                    <div>
                      <button onClick={handleEditSave}>Save</button>
                      <button onClick={handleEditCancel}>Cancel</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => handleEdit(todo)}>Edit</button>
                      <button onClick={() => deleteTodo(todo)}>Delete</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </article>
        )}
      </div>
    </div>
  );
};

export default Todo;
