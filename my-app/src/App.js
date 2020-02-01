import React, { useReducer } from "react";
import "./App.css";
import { reducer, initialState } from "./reducers";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);
  const addTodo = newTodo => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };
  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <h1>Things To Do</h1>
      <div className="todo-form">
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      </div>
      <TodoList todoState={todoState} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;