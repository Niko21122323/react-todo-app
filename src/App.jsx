import { useState } from "react";
import InputsAndButtons from "./components/InputsAndButtons";
import Todo from "./components/Todo";
import "./App.css";

export const App = () => {
  // States
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [hideCompleted, setHideCompleted] = useState(false);

  // Completed todos count
  const completedDodo = todos.filter((todo) => todo.done).length;
  // Hiding and showing completed
  const hideShowCompleted = hideCompleted
    ? todos.filter((todo) => !todo.done)
    : todos;

  // Adding a todo
  function addTodo() {
    if (newTodo.trim() !== "") {
      let object = {
        id: Math.floor(Math.random() * 10000),
        text: newTodo,
        done: false,
      };
      setTodos([object, ...todos]);
      setNewTodo("");
    } else {
      alert("Enter value");
    }
  }

  // Mark todo as done
  function markAsDone(todo) {
    setTodos([
      ...todos.map((item) =>
        item.id === todo.id
          ? { id: item.id, text: item.text, done: !item.done }
          : item
      ),
    ]);
  }

  // Delete todo
  function deleteTodo(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  // Editing todo
  function handleEdit(todo) {
    setEditTodo(todo);
    setEditedTodo(todo.text);
  }

  //Saving the edited todo
  function handleEditSave() {
    setTodos(
      todos.map((todo) => {
        if (todo.id === editTodo.id) {
          return { ...todo, text: editedTodo };
        } else {
          return todo;
        }
      })
    );
  }

  // Cancel changes on edit
  function handleEditCancel() {
    setEditTodo(null);
    setEditedTodo("");
  }

  // Hide completed todos
  function toggleHideCompleted() {
    setHideCompleted(!hideCompleted);
  }

  return (
    <div className="app">
      <InputsAndButtons
        newTodo={newTodo}
        addTodo={addTodo}
        setNewTodo={setNewTodo}
      />
      <Todo
        todos={hideShowCompleted}
        markAsDone={markAsDone}
        deleteTodo={deleteTodo}
        completedTodos={completedDodo}
        handleEdit={handleEdit}
        handleEditSave={handleEditSave}
        handleEditCancel={handleEditCancel}
        editTodo={editTodo}
        editedTodo={editedTodo}
        setEditedTodo={setEditedTodo}
        toggleHideCompleted={toggleHideCompleted}
        hideCompleted={hideCompleted}
      />
    </div>
  );
};
