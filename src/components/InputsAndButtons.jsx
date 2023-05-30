const InputsAndButtons = ({ newTodo, addTodo, setNewTodo }) => {
  return (
    <div className="input&button">
      <input
        type="text"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add new Todo</button>
    </div>
  );
};

export default InputsAndButtons;
